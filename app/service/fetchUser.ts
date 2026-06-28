import { api } from "./API";

type User = {
  id: string;
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
};

export async function getUser() {
  const res = await api.get("/user");
  return res;
}

export async function updateUserInfo(user: User) {
  const res = await api.patch("/user/update", user);
  console.log(res);
  return res;
}
