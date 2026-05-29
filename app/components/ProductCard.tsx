import { NavLink } from "react-router";
import ColorJacket from "./ColorJacket";
import Favourite from "./Favourite";
import type { ProductCardProps } from "~/types/Product";
import { useState } from "react";

type Props = {
  product: ProductCardProps;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="relative flex flex-col gap-4">
      {/* <Favourite isFavorite={product.isFavorite}></Favourite>  */}
      <NavLink to={`/catalog/${product.productId}`}>
        <img className="w-full h-50" src={product.previewImage} alt="" />
      </NavLink>
      <div className="relative h-full justify-between flex flex-col items-center gap-1">
        <p>{product.title}</p>
        <div className="flex flex-col items-center gap-1">
          <span className="font-bold">{`${product.price}`}</span>
          <span className="text-[#252525]/50">{product.sizes.join(" ")}</span>
          {/* {product.isNew && (
          <span className="absolute -right-10 text-[#E0BEA2]">new</span>
        ) } */}
          <ColorJacket colors={product.colors} size="small"></ColorJacket>
        </div>
      </div>
    </div>
  );
}
