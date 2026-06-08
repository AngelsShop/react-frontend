import ProductPage from "~/pages/ProductPage/ProductPage";
import type { Route } from "./+types/info-card-product";
import { redirect } from "react-router";
import { getProductById } from "~/service/fetchProduct";

export const loader = async ({ params }: Route.ClientLoaderArgs) => {
  if (!params.productId) {
    return redirect("/catalog");
  }

  const product = await getProductById(params.productId);
  if (product) {
    return { product };
  }
  return redirect("/not-found");
};

export default function infoCardProduct({ loaderData }: Route.ComponentProps) {
  return <ProductPage product={loaderData.product} />;
}
