import Container from "~/components/Container";
import ProductCard from "~/components/ProductCard";
import ProductInfo from "~/components/ProductInfo";
import { useProducts } from "~/service/fetchCatalog";
import type { ProductInfoProps } from "~/types/Product";

type Props = {
  product: ProductInfoProps;
};

export default function ProductPage({ product }: Props) {
  const { products, isLoading } = useProducts();

  return (
    <div className="flex flex-col gap-16">
      <ProductInfo product={product} />
      <section>
        <Container>
          <div className="flex flex-col gap-7">
            <h3>Вам может понравится</h3>
            <div className="flex justify-between gap-3.5">
              {isLoading ? (
                <p>Грузим</p>
              ) : (
                products
                  .filter((el) => el.productId !== product.id)
                  .slice(0, 4)
                  .map((jacket) => (
                    <ProductCard key={jacket.productId} product={jacket} />
                  ))
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
