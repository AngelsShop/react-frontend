import { api } from "./API";

const API =
  "https://angels-shop.ru/api/v1/product/variant/d2762124-6af7-4cf6-bb8b-bfcc6c86708e/favorites/add";

export async function addFavorite(variantId: string) {
  const res = await api.post(`/product/variant/${variantId}/favorites/add`);
  console.log(res);
}

export async function deleteFavorite(variantId: string) {
  const res = await api.delete(
    `/product/variant/${variantId}/favorites/remove`,
  );
  console.log(res);
}
