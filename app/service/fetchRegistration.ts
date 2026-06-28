import axios from "axios";
import { api } from "./API";

type createUserData = {
  login: string;
  password: string;
};

export async function createUser({ login, password }: createUserData) {
  try {
    const res = await api.post("/auth/signup", { login, password });
    document.cookie = `access_token=${res.data.access_token}; max-age=3600`;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.status;
    }
  }
}
