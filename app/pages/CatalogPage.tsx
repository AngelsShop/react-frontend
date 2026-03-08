import { categoriesCatalog, filters, products } from "data/categories";
import { Link } from "react-router";
import Container from "~/components/Container";
import DropDownList from "~/components/DropDownList";
import ProductCard from "~/components/ProductCard";

export default function CatalogPage() {
  return (
    <section>
      <Container>
        <div className="flex mt-28 gap-x-7">
          <div className="flex flex-col gap-y-5 p-1 h-min w-max">
            {categoriesCatalog.map((categoryCatalog) => {
              return <Link to="/">{categoryCatalog.title}</Link>;
            })}
          </div>
          <div className="flex gap-5 flex-col justify-center ">
            <div className="flex gap-2.5">
              {filters.map((filter) => {
                return <DropDownList key={filter.id} filter={filter} />;
              })}
            </div>
            <div className="grid grid-cols-3 gap-x-3.5 gap-y-7 place-items-center">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
