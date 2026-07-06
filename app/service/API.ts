import axios from "axios";
import { toast, type ToastContentProps } from "react-toastify";
import { SplitButtons } from "~/components/SplitButtons";

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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      const notify = () =>
        toast(SplitButtons, {
          toastId: "auth-required",
          customProgressBar: true,
          pauseOnHover: true,
          closeOnClick: true,
        });
      notify();
    }

    return Promise.reject(error);
  },
);
