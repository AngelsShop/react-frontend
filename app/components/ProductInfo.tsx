import Container from "./Container";
import SelectInfo from "./SelectInfo";
import SwiperForInfoPage from "./SwiperForInfoPage";
import Button from "./Button";
import ColorJacket from "./ColorJacket";
import type { ProductCardProps } from "~/types/Product";

type Props = {
  product: ProductCardProps;
};

export default function ProductInfo({ product }: Props) {
  return (
    <section className="mt-28">
      <Container>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <SwiperForInfoPage product={product}></SwiperForInfoPage>
          </div>
          <div className="flex flex-col gap-5">
            <span>{product.title}</span>
            <span>{product.price}</span>
            <ColorJacket colors={product.colors} size="big"></ColorJacket>
            <SelectInfo product={product} />
            <div className="grid grid-cols-2 gap-5">
              <Button variant="brown">В корзину</Button>
              <Button variant="white">В избранное</Button>
            </div>
            <span>Подробности</span>
            <details className="border-b py-2.5">
              <summary className="list-none ">Состав</summary>
              <ul className="list-none mt-2.5">
                {product.description.composition.map((item) => {
                  return <li className="text-[14px] ">{item}</li>;
                })}
              </ul>
            </details>
            <details className="border-b py-2.5">
              <summary className="list-none ">Уход</summary>
              <ul className="list-none mt-2.5">
                {product.description.care.map((item) => {
                  return <li className="text-[14px] ">{item}</li>;
                })}
              </ul>
            </details>
          </div>
        </div>
      </Container>
    </section>
  );
}
