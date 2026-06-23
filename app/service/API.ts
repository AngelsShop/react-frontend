import axios from "axios";

export const api = axios.create({
  baseURL: "https://angels-shop.ru/api/v1",
  headers: { accept: "application/json", "Content-Type": "application/json" },
});

export function getCookie(name: string) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

api.interceptors.request.use((config) => {
  const token = getCookie("access_token");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});
