import axios from "axios";

const API_URL = "123";

export const api = axios.create({
  baseURL: API_URL,
});
