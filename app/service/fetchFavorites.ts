import axios from "axios";
import { api } from "./API";

export async function addFavorite(variantId: string) {
  try {
    await api.post(`/product/variant/${variantId}/favorites/add`);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.status;
    }
  }
}

export async function deleteFavorite(variantId: string) {
  const res = await api.delete(
    `/product/variant/${variantId}/favorites/remove`,
  );
}
