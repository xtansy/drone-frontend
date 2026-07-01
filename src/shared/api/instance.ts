import axios from "axios";

import { mockAdapter } from "./mocks"; // ⚠️ временный импорт, удалить вместе с моками

const API_URL = import.meta.env.PROD
  ? "https://drone-backend-five.vercel.app/"
  : "http://localhost:3030/";

export const api = axios.create({
  baseURL: API_URL,
});

// ⚠️ ── ВРЕМЕННЫЕ МОКИ БЭКЕНДА — УДАЛИТЬ ВЕСЬ БЛОК + ./mocks.ts + ./mockData.ts ──
// Пока drone-backend недоступен, фронт работает на моках из /dataExamples.
// Включены только в dev (в прод-сборку не попадают). Чтобы ходить в реальный
// бэкенд, когда он вернётся, — поставь false или удали блок целиком.
const USE_MOCKS = import.meta.env.DEV;
if (USE_MOCKS) {
  api.defaults.adapter = mockAdapter;
  console.warn("[API] МОК-режим: реальный бэкенд не используется (src/shared/api/mocks.ts).");
}
// ── КОНЕЦ БЛОКА МОКОВ ────────────────────────────────────────────────────────
