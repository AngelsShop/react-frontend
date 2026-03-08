import type { ProductCardProps } from "data/categories";

type Props = {
  product: ProductCardProps;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col items-center">
      <img src={product.image} alt="" />
      <div className="relative flex flex-col items-center">
        <span>{product.title}</span>
        <span className="font-bold">{`${product.price} ${product.currency}`}</span>
        <span className="text-[#252525]/50">{product.sizes.join(" ")}</span>
        {product.isNew && (
          <span className="absolute -right-10 text-[#E0BEA2]">new</span>
        )}
      </div>
    </div>
  );
}
