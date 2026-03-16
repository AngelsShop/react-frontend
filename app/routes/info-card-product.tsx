import ProductPage from "~/pages/ProductPage";
import type { Route } from "./+types/info-card-product";
import { redirect } from "react-router";
import { products } from "data/categories";

export const loader = ({ params }: Route.ClientLoaderArgs) => {
  if (!params.id) {
    return redirect("/catalog");
  }
  const product = products.find((el) => el.id === params.id);
  if (product) {
    return { product };
  }
  return redirect("/not-found");
};

export default function infoCardProduct({ loaderData }: Route.ComponentProps) {
  return <ProductPage product={loaderData.product} />;
}
