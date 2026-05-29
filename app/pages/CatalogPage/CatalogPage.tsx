import { filters } from "data/categories";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Container from "~/components/Container";
import DropDownList from "~/components/DropDownList";
import ProductCard from "~/components/ProductCard";
import { loadFiltersCatalogPage, useProducts } from "~/service/fetchCatalog";
import type { FilterProps, ProductCardProps } from "~/types/Product";

export default function CatalogPage() {
  const { products, isLoading, error } = useProducts();
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

  return (
    <section>
      <Container>
        <div className="flex mt-28 gap-x-7">
          <div className="flex flex-col gap-y-5 h-min w-max">
            {categories.map((category) => {
              return <Link to="/">{category.name}</Link>;
            })}
          </div>
          <div className="flex gap-5 flex-col ">
            <div className="flex gap-2.5">
              {filters.map((filter) => {
                return <DropDownList key={filter.id} filter={filter} />;
              })}
            </div>
            {isLoading ? (
              <span>Подгружаем </span>
            ) : (
              <div className="grid grid-cols-3 gap-x-3.5 gap-y-7 place-content-between">
                {products.map((product) => (
                  <ProductCard key={product.categoryId} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
