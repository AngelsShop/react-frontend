import { api } from "./API";

const API = `https://angels-shop.ru/api/v1/auth/signin`;

type authorizationUser = {
  login: string;
  password: string;
};

// export async function authorizationUser({
//   login,
//   password,
// }: authorizationUser) {
//   try {
//     const res = await fetch(API, {
//       method: "POST",
//       headers: {
//         Accept: "*/*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ login, password }),
//     });
//     if (!res.ok) throw new Error(`Не удалось получить данные ${res.status}`);
//     console.log("Победа");
//     const data = res.json();
//     return data;
//   } catch (error) {
//     console.error(`Возможно пользователя не существует ${error}`);
//   }
// }

export async function authorizationUser({
  login,
  password,
}: authorizationUser) {
  const res = await api.post("/auth/signin", { login, password });
  document.cookie = `access_token=${res.data.access_token}; max-age=3600`;
  // localStorage.setItem("access_token", res.data.access_token);
  return res.data.access_token;
}
