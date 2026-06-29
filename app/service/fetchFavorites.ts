import axios from "axios";
import { api } from "./API";
import type { ProductCardProps } from "~/types/Product";

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
  await api.delete(`/product/variant/${variantId}/favorites/remove`);
}

export async function loadListFavorites() {
  try {
    const res = await api.get<{ items: ProductCardProps[] }>(
      "/product/favorites/list",
    );
    return {
      value: res.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        error: error.response.status,
      };
    }
  }
}
