import { useEffect, useState } from "react";
import type { ProductCardProps } from "~/types/Product";
import { api } from "./API";

export function useProducts() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadForCatalogPage() {
    setIsLoading(true);
    const res = await api.get("/product/list", {
      params: { page: 1, limit: 10 },
    });
    if (res.status >= 400) setError(res.statusText);
    setIsLoading(false);
    setProducts(res.data.items);
  }

  useEffect(() => {
    loadForCatalogPage();
  }, []);

  return { products, isLoading, error };
}

export async function loadFiltersCatalogPage() {
  const res = await api.get("/category/list");
  return res.data;
}

export async function loadForCatalogPage() {
  const res = await api.get("/product/list", {
    params: { page: 1, limit: 10 },
  });
  return res;
}
