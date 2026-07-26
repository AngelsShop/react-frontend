import { filters } from "data/categories";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Container from "~/components/Container";
import DropDownList from "~/components/DropDownList";
import ProductCard from "~/components/ProductCard";
import { loadFiltersCatalogPage, useProducts } from "~/service/fetchCatalog";
import { addFavorite, deleteFavorite } from "~/service/fetchFavorites";
import type { FilterProps, ProductCardProps } from "~/types/Product";

export default function CatalogPage() {
  const { products, isLoading, loadForCatalogPage } = useProducts();
  const [categories, setCategories] = useState<FilterProps[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await loadFiltersCatalogPage();
        setCategories(data);
      } catch (error) {
        console.error(`${error}`);
      }
    })();
  }, []);

  useEffect(() => {
    toast.dismiss();
  }, []);

  async function onFavorite(product: ProductCardProps) {
    if (!product.isFavorite) {
      await addFavorite(product.variantId);
    } else {
      await deleteFavorite(product.variantId);
    }
    await loadForCatalogPage();
  }

  return (
    <section>
      <Container>
        <div className="flex mt-28 gap-x-7 w-full">
          <div className="flex items-start flex-col gap-y-5 h-min w-max">
            {categories.map((category) => {
              return (
                <Link key={category.id} to="/">
                  {category.name}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-5 flex-col w-full">
            <div className="flex gap-2.5">
              {filters.map((filter) => {
                return <DropDownList key={filter.id} filter={filter} />;
              })}
            </div>
            {isLoading ? (
              <span>Подгружаем </span>
            ) : (
              <div className="max-sm:grid-cols-2 max-sm:gap-1 grid grid-cols-3 gap-x-3.5 gap-y-7">
                {products.map((product) => (
                  <ProductCard
                    onFavorite={() => onFavorite(product)}
                    key={product.variantId}
                    product={product}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
