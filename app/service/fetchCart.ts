import { api } from "./API";

export async function addProductsCart(variantId: string) {
  await api.post("/cart/items", { items: [variantId] });
}

export async function listProductsCart() {
  const res = await api.get("/cart");
  return res.data;
}
