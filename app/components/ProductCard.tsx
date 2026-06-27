import { createSearchParams, Link, useNavigate } from "react-router";
import ColorJacket from "./ColorJacket";
import type { ProductCardProps } from "~/types/Product";
import Favorite from "./Favorite";
import { addFavorite } from "~/service/fetchFavorites";

type Props = {
  product: ProductCardProps;
  onFavorite: () => void;
};

export default function ProductCard({ onFavorite, product }: Props) {
  const navigate = useNavigate();
  const goToProductPage = (color: string) => {
    navigate({
      pathname: `/catalog/${product.productId}`,
      search: `?${createSearchParams({ color: color })}`,
    });
  };

  return (
    <div className="relative flex flex-col gap-4">
      <Favorite onFavorite={() => onFavorite()} product={product}></Favorite>
      <Link
        to={{
          pathname: `/catalog/${product.productId}`,
          search: `?${createSearchParams({ color: product.colors[0] })}`,
        }}
      >
        <img className="w-full h-50" src={product.previewImage} alt="" />
      </Link>
      <div className="relative h-full justify-between flex flex-col items-center gap-1">
        <p>{product.title}</p>
        <div className="flex flex-col items-center gap-1">
          <span className="font-bold">{`${product.price}`}</span>
          <span className="text-[#252525]/50">{product.sizes.join(" ")}</span>
          {/* {product.isNew && (
          <span className="absolute -right-10 text-[#E0BEA2]">new</span>
        ) } */}
          <ColorJacket
            colors={new Set(product.colors)}
            size="small"
            onColorClick={goToProductPage}
          ></ColorJacket>
        </div>
      </div>
    </div>
  );
}
