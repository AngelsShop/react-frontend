import ProductPage from "~/pages/ProductPage/ProductPage";
import type { Route } from "./+types/info-card-product";
import { redirect } from "react-router";
import { getProductById } from "~/service/fetchProduct";

export default function infoCardProduct() {
  return <ProductPage />;
}
