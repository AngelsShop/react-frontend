import axios from "axios";
import { api } from "./API";

type authorizationUser = {
  login: string;
  password: string;
};

export async function authorizationUser({
  login,
  password,
}: authorizationUser) {
  try {
    const res = await api.post("/auth/signin", { login, password });
    document.cookie = `access_token=${res.data.access_token}; max-age=3600`;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.status;
    }
  }
}
