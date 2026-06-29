import { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Container from "~/components/Container";
import ProductCard from "~/components/ProductCard";
import { loadForCatalogPage } from "~/service/fetchCatalog";
import {
  addFavorite,
  deleteFavorite,
  loadListFavorites,
} from "~/service/fetchFavorites";
import type { ProductCardProps } from "~/types/Product";

export default function Favorites() {
  const [listFavorites, setListFavorites] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    (async () => {
      const data = await loadListFavorites();
      if (data?.error === 401) {
        const notify = () =>
          toast.info("Авторизуйтесь для доступа к избранным товарам", {
            toastId: "favorites-auth",
          });
        notify();
      }
      if (data?.value) {
        setListFavorites(data.value.items);
      }
    })();
  }, []);

  async function onFavorite(product: ProductCardProps) {
    if (!product.isFavorite) {
      await addFavorite(product.variantId);
    } else {
      await deleteFavorite(product.variantId);
    }
    await loadForCatalogPage();
  }

  return (
    <div className="mt-28">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      <Container>
        <div className="flex flex-col gap-5">
          <h3>Избранное</h3>
          {listFavorites.length > 0 ? (
            <div className="grid grid-cols-3 gap-x-3.5 gap-y-7">
              {listFavorites.map((product) => (
                <ProductCard
                  key={product.variantId}
                  product={product}
                  onFavorite={() => onFavorite(product)}
                ></ProductCard>
              ))}{" "}
            </div>
          ) : (
            <div>Здесь пока пусто</div>
          )}
        </div>
      </Container>
    </div>
  );
}
