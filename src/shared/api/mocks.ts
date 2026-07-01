/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ВРЕМЕННЫЕ МОКИ БЭКЕНДА  ⚠️  УДАЛИТЬ ПОСЛЕ ПОДКЛЮЧЕНИЯ РЕАЛЬНОГО API
 * ─────────────────────────────────────────────────────────────────────────────
 *  Причина: drone-backend временно недоступен (MongoDB Atlas не резолвится
 *  из текущей сети). Этот файл эмулирует ответы бэка на уровне axios-адаптера,
 *  поэтому requests.ts, обработка ошибок и все страницы остаются нетронутыми.
 *
 *  Данные лежат в ./mockData.ts (сгенерированы из /dataExamples).
 *
 *  Как включить:  в `.env.local` → VITE_USE_MOCKS=true
 *  Как удалить:   удалить mocks.ts + mockData.ts + блок мока в instance.ts + строку из .env.local
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { AxiosAdapter, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import type { PointModel, PolygonModel } from "../types";
import type { Response, SimpleResponse } from "./types";
import { mockPoints, mockPolygons } from "./mockData";

// ── Роутинг мока: путь + метод → тело ответа (форма { message, data } как у бэка) ─
const resolveMockBody = (
  method: string,
  url: string
): SimpleResponse | Response<unknown> | null => {
  const path = url.split("?")[0].replace(/\/+$/, "");

  if (method === "get" && path === "/getAllPolygons") {
    return { message: "Успех!", data: mockPolygons } satisfies Response<PolygonModel[]>;
  }
  if (method === "get" && path === "/getAllPoints") {
    return { message: "Успех!", data: mockPoints } satisfies Response<PointModel[]>;
  }

  const pointMatch = path.match(/^\/getPointById\/(.+)$/);
  if (method === "get" && pointMatch) {
    const found = mockPoints.find((p) => p._id === pointMatch[1]) ?? mockPoints[0];
    return { message: "Точка успешно получена", data: found } satisfies Response<PointModel>;
  }

  const polygonMatch = path.match(/^\/getPolygonById\/(.+)$/);
  if (method === "get" && polygonMatch) {
    const found = mockPolygons.find((p) => p._id === polygonMatch[1]) ?? mockPolygons[0];
    return { message: "Полигон успешно получен!", data: found } satisfies Response<PolygonModel>;
  }

  if (method === "post" && path === "/upload") {
    return { message: "Файл(ы) успешно загружены (мок)" } satisfies SimpleResponse;
  }

  return null;
};

// ── Axios-адаптер: имитирует сеть с небольшой задержкой ──────────────────────
export const mockAdapter: AxiosAdapter = (config: InternalAxiosRequestConfig) =>
  new Promise<AxiosResponse>((resolve, reject) => {
    const method = (config.method ?? "get").toLowerCase();
    const url = config.url ?? "";
    const body = resolveMockBody(method, url);

    setTimeout(() => {
      if (body === null) {
        // Незамоканный эндпоинт — отдаём axios-совместимую ошибку 404
        reject({
          message: `[MOCK] Эндпоинт не замокан: ${method.toUpperCase()} ${url}`,
          config,
          response: {
            data: { errorMessage: `Мок для ${url} не найден` },
            status: 404,
            statusText: "Not Found",
            headers: {},
            config,
          },
        });
        return;
      }

      resolve({
        data: body,
        status: 200,
        statusText: "OK (mock)",
        headers: {},
        config,
      } as AxiosResponse);
    }, 300);
  });
