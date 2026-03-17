import { products } from "data/categories";
import Container from "~/components/Container";
import ProductCard from "~/components/ProductCard";
import ProductInfo from "~/components/ProductInfo";
import type { ProductCardProps } from "~/types/Product";

type Props = {
  product: ProductCardProps;
};

export default function ProductPage({ product }: Props) {
  return (
    <div className="flex flex-col gap-16">
      <ProductInfo product={product} />
      <section>
        <Container>
          <div className="flex flex-col gap-7">
            <h3>Вам может понравится</h3>
            <div className="flex justify-between gap-3.5">
              {products
                .filter((el) => el.id !== product.id)
                .slice(0, 4)
                .map((jacket, index) => {
                  return (
                    <ProductCard key={index} product={jacket}></ProductCard>
                  );
                })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
