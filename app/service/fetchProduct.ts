import { api } from "./API";

export async function getProductById(productId: string) {
  const res = await api.get(`/product/${productId}`);
  return res.data;
}
