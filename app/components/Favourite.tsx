import { useState } from "react";

import favouriteWhiteHeart from "../../public/images/catalog/favouriteWhiteHeart.svg";
import favouriteHeart from "../../public/images/catalog/favouriteHeart.svg";

type Props = {
  isFavorite: boolean;
};

export default function Favourite({ isFavorite }: Props) {
  const [favourite, setFavourite] = useState(isFavorite);

  const handleClick = () => {
    setFavourite((prev) => !prev);
  };

  const srcImage = favourite ? favouriteWhiteHeart : favouriteHeart;
  return (
    <button
      onClick={handleClick}
      className="cursor-pointer absolute right-0 bg-[#E0BEA2] rounded-bl-3xl text-white size-10 flex text-2xl justify-center items-center"
    >
      <img src={srcImage} />
    </button>
  );
}
