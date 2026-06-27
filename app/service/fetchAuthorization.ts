import { api } from "./API";

type authorizationUser = {
  login: string;
  password: string;
};

export async function authorizationUser({
  login,
  password,
}: authorizationUser) {
  const res = await api.post("/auth/signin", { login, password });
  document.cookie = `access_token=${res.data.access_token}; max-age=3600`;
  // localStorage.setItem("access_token", res.data.access_token);
  return res.data.access_token;
}
