import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "~/components/Container";
import ProductCard from "~/components/ProductCard";
import ProductInfo from "~/components/ProductInfo";
import { useProducts } from "~/service/fetchCatalog";
import { addFavorite, deleteFavorite } from "~/service/fetchFavorites";
import { getProductById } from "~/service/fetchProduct";
import type { ProductCardProps, ProductInfoProps } from "~/types/Product";

type Props = {
  product: ProductInfoProps;
};

export default function ProductPage() {
  const { products, isLoading, refetch } = useProducts();
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductInfoProps>();

  useEffect(() => {
    (async () => {
      if (productId) {
        const data = await getProductById(productId);
        setProduct(data);
      }
    })();
  }, []);

  async function onFavorite(product: ProductCardProps) {
    if (!product.isFavorite) {
      await addFavorite(product.variantId);
    } else {
      await deleteFavorite(product.variantId);
    }
    refetch();
  }

  return (
    <div className="flex flex-col gap-16">
      {product ? (
        <>
          <ProductInfo product={product} />
          <section>
            <Container>
              <div className="flex flex-col gap-7">
                <h3>Вам может понравится</h3>
                <div className="grid grid-cols-4 max-sm:grid-cols-2 justify-between gap-3.5">
                  {isLoading ? (
                    <p>Грузим</p>
                  ) : (
                    products
                      .filter((el) => el.productId !== product.id)
                      .slice(0, 4)
                      .map((jacket) => (
                        <ProductCard
                          onFavorite={() => onFavorite(jacket)}
                          key={jacket.productId}
                          product={jacket}
                        />
                      ))
                  )}
                </div>
              </div>
            </Container>
          </section>
        </>
      ) : (
        <Container>
          <div>Загружаем страницу</div>
        </Container>
      )}
    </div>
  );
}
