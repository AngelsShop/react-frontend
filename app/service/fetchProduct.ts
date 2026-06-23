import { api } from "./API";

const API_key = `https://angels-shop.ru/api/v1/product`;

export async function getProductById(productId: string) {
  const res = await api.get(`/product/${productId}`);
  return res.data;
}
