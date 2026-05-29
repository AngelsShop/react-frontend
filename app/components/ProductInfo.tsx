import Container from "./Container";
import SelectInfo from "./SelectInfo";
import SwiperForInfoPage from "./SwiperForInfoPage";
import Button from "./Button";
import ColorJacket from "./ColorJacket";
import type { ProductInfoProps } from "~/types/Product";
import { useEffect, useState } from "react";
import { productsDELETE } from "data/categories";
import { useProductVariant } from "~/service/fetchCatalog";

type Props = {
  product: ProductInfoProps;
};

export default function ProductInfo({ product }: Props) {
  const uniqColors = new Set(product.variants.map((element) => element.color));
  const { productVariants } = useProductVariant(product.id);
  const [productDefault, setProductDefault] = useState(product.variant);

  function changeProductOfColor(color: string) {
    const currentVariant = productVariants.find((item) => item.color === color);
    if (currentVariant) {
      setProductDefault(currentVariant);
      console.log(productDefault);
    }
  }

  return (
    <section className="mt-28">
      <Container>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <SwiperForInfoPage product={productsDELETE[0]}></SwiperForInfoPage>
          </div>
          <div className="flex flex-col gap-5">
            <span>{product.title}</span>
            <span>{productDefault.price}</span>
            <ColorJacket
              changeProductOfColor={changeProductOfColor}
              colors={uniqColors}
              size="big"
              choosenColor={productDefault.color}
            ></ColorJacket>
            <SelectInfo product={productDefault} />
            <div className="grid grid-cols-2 gap-5">
              <Button variant="brown">В корзину</Button>
              <Button variant="white">В избранное</Button>
            </div>
            <span>Подробности</span>
            <details className="border-b py-2.5">
              <summary className="list-none ">Состав</summary>
              {/* <ul className="list-none mt-2.5">
                {product.description.composition.map((item) => {
                  return <li className="text-[14px] ">{item}</li>;
                })}
              </ul> */}
            </details>
            <details className="border-b py-2.5">
              <summary className="list-none ">Уход</summary>
              {/* <ul className="list-none mt-2.5">
                {product.description.care.map((item) => {
                  return <li className="text-[14px] ">{item}</li>;
                })}
              </ul> */}
            </details>
          </div>
        </div>
      </Container>
    </section>
  );
}
