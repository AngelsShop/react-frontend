import { useState } from "react";

import favouriteWhiteHeart from "../../public/images/catalog/favouriteWhiteHeart.svg";
import favouriteHeart from "../../public/images/catalog/favouriteHeart.svg";
import type { ProductCardProps } from "~/types/Product";
import { addFavorite } from "~/service/fetchFavorites";

type Props = {
  product: ProductCardProps;
  onFavorite: () => void;
};

export default function Favourite({ onFavorite, product }: Props) {
  const [favourite, setFavourite] = useState(product.isFavorite);

  const srcImage = product.isFavorite ? favouriteWhiteHeart : favouriteHeart;
  return (
    <button
      onClick={() => onFavorite()}
      className="cursor-pointer absolute right-0 bg-[#E0BEA2] rounded-bl-3xl text-white size-10 flex text-2xl justify-center items-center"
    >
      <img src={srcImage} />
    </button>
  );
}
