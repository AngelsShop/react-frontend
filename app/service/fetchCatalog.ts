import { useEffect, useState } from "react";
import type { ProductCardProps, VariantType } from "~/types/Product";

const API_Catalog = `https://angels-shop.ru/api/v1/product/list?page=1&limit=10`;
const API_Filter = `https://angels-shop.ru/api/v1/category/list`;
const API_Varints = `https://angels-shop.ru/api/v1/product`;

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
    loadForCatalogPage();
  }, []);

  return { products, isLoading, error };
}

export function useProductVariants(variantId: string) {
  const [productVariants, setProductVariants] = useState<VariantType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadVarinatsProduct() {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_Varints}/${variantId}/variants`);
      if (!res.ok)
        throw new Error(
          `Ошибка в получении данных для подгрузки каталога ${res.status}`,
        );
      const data = await res.json();
      setProductVariants(data);
    } catch (error) {
      console.error(`${error}`);
      setError(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadVarinatsProduct();
  }, []);

  return { productVariants, isLoading, error };
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
