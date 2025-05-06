import { api } from "./instance";
import { type AxiosError } from "axios";
import type { SimpleResponse, ErrorResponse } from "./types";

export const uploadFile = async (files: File[]): Promise<SimpleResponse> => {
  try {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("sdData", file);
    });

    const { data } = await api.post<SimpleResponse>("/upload", formData);

    return data;
  } catch (_err) {
    const err = _err as AxiosError<ErrorResponse>;

    const errorMessage =
      err?.response?.data?.errorMessage ||
      err?.message ||
      "Неизвестная ошибка при загрузке файла";

    return Promise.reject(errorMessage);
  }
};
