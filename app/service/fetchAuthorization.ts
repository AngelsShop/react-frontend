const API = `https://angels-shop.ru/api/v1/auth/signin`;

type authorizationUser = {
  login: string;
  password: string;
};

export async function authorizationUser({
  login,
  password,
}: authorizationUser) {
  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });
    if (!res.ok) throw new Error(`Не удалось получить данные ${res.status}`);
    console.log("Победа");
    const data = res.json();
    return data;
  } catch (error) {
    console.error(`Возможно пользователя не существует ${error}`);
  }
}
