import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";

import "../style.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import type { ProductCardProps } from "~/types/Product";

type Props = {
  product: ProductCardProps;
};

export default function SwiperForInfoPage({ product }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div className="grid grid-cols-[100px_1fr] gap-2.5 h-125">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        direction="vertical"
      >
        {product.imageSwiper.map((el) => {
          return (
            <SwiperSlide>
              <img src={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        direction="vertical"
      >
        {product.imageSwiper.map((el) => {
          return (
            <SwiperSlide>
              <img src={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
