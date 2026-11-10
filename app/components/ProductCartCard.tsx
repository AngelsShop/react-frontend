import type { VariantType } from "~/types/Product";
import Container from "./Container";

type cartProps = {
  product: VariantType;
};

export default function ProductCartCard({ product }: cartProps) {
  return (
    <div>
      <Container>
        <div className="flex justify-between">
          <div>
            <img src={product.images[0]} alt={product.name} />
            <span className="text-[16px]">{product.name}</span>
          </div>
          <span className="text-[16px]">{product.color}</span>
          <span className="text-[16px]">{product.size}</span>
          <div>
            <span className="text-[16px]">{product.price}</span>
            <img src="/images/cart/deleteBtn.svg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}
