import { NavLink } from "react-router";
import ColorJacket from "./ColorJacket";
import Favourite from "./Favourite";
import type { ProductCardProps } from "~/types/Product";

type Props = {
  product: ProductCardProps;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="relative flex flex-col items-center gap-4">
      <Favourite isFavorite={product.isFavorite}></Favourite>
      <NavLink to={`/catalog/${product.id}`}>
        <img src={product.image} alt="" />
      </NavLink>
      <div className="relative flex flex-col items-center gap-1">
        <span>{product.title}</span>
        <span className="font-bold">{`${product.price} ${product.currency}`}</span>
        <span className="text-[#252525]/50">{product.sizes.join(" ")}</span>
        {product.isNew && (
          <span className="absolute -right-10 text-[#E0BEA2]">new</span>
        )}
        <ColorJacket colors={product.colors} size="small"></ColorJacket>
      </div>
    </div>
  );
}
