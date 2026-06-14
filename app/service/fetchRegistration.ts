const API = "https://angels-shop.ru/api/v1/auth/signup";

type createUserData = {
  login: string;
  password: string;
};

export async function createUser({ login, password }: createUserData) {
  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });
    if (!res.ok) return new Error("Не удалось создать пользователя");
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
