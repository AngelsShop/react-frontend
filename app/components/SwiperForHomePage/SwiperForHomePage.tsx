import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { CategoriesCardProps } from "~/types/Components";

import "./swiperStyleForHomePage.css";
import "swiper/css";
import "swiper/css/navigation";

type CategoriesProps = {
  categories: CategoriesCardProps[];
};

export default function SwiperForHomePage({ categories }: CategoriesProps) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide className="relative">
            <img src={category.image} alt={category.image} />
            <span className="absolute text-white text-xl backdrop-blur-[5px]  flex justify-center py-2 bottom-0 bg-[#E0BEA2]/75 w-full">
              {category.title}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
