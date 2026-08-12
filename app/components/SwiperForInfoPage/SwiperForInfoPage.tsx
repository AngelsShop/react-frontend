import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";

import "./swiperStyleForInfoPage.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import type { ProductDELETE } from "~/types/Product";

type Props = {
  product: ProductDELETE;
};

export default function SwiperForInfoPage({ product }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="grid sm:grid-cols-[1fr_100px] gap-2.5 h-125">
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        direction="horizontal"
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
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          320: { direction: "horizontal" },
          640: {
            direction: "vertical",
          },
        }}
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
