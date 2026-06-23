import { api } from "./API";

const API = "https://angels-shop.ru/api/v1/auth/signup";

type createUserData = {
  login: string;
  password: string;
};

export async function createUser({ login, password }: createUserData) {
  const res = await api.post("/auth/signup", { login, password });
  document.cookie = `access_token=${res.data.access_token}; max-age=3600`;
  // localStorage.setItem("access_token", res.data.access_token);
  return res.data.access_token;
}
