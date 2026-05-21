import { useEffect, useState } from "react";
import type { ProductCardProps } from "~/types/Product";

const API_Catalog = `https://angels-shop.ru/api/v1/product/list?page=1&limit=10`;
const API_Filter = `https://angels-shop.ru/api/v1/category/list`;

export function useProducts() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadForCatalogPage() {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(API_Catalog, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      if (!res.ok)
        throw new Error(
          `Ошибка в получении данных для подгрузки каталога ${res.status}`,
        );
      const data = await res.json();
      setProducts(data.items);
    } catch (error) {
      console.error(`${error}`);
      setError(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      await loadForCatalogPage();
    })();
  }, []);

  return { products, isLoading, error };
}

export async function loadFiltersCatalogPage() {
  try {
    const res = await fetch(API_Filter);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("Ошибка в получении данных для подгрузки фильтров");
    }
  } catch (error) {
    throw new Error(`{$error}`);
  }
}
