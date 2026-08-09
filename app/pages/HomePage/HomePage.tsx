import { categories } from "data/categories";
import CategoryCard from "~/components/CategoryCard";
import Container from "~/components/Container";
import SwiperForHomePage from "~/components/SwiperForHomePage/SwiperForHomePage";
import Newsletter from "~/components/Newsletter";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-24 items-center">
      <section>
        <div className="relative text-white ">
          <div>
            <div className="grid grid-cols-3 max-sm:hidden">
              <img src="/images/homePage/wall1.webp" alt="" />
              <img src="/images/homePage/wall2.webp" alt="" />
              <img src="/images/homePage/wall3.webp" alt="" />
            </div>
            <div className="hidden max-sm:block">
              <img src="/images/homePage/wall1.webp" alt="" />
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col gap-y-5 items-center justify-center">
            <h1 className="text-5xl max-sm:text-3xl">Новая коллекция</h1>
            <hr className="w-28" />
            <a href="" className="flex ">
              <span className="text-base uppercase">Смотреть Новинки </span>
              <img src="/images/homePage/sparrow.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <Container>
          <h2 className="mb-12">Категории</h2>
          <div>
            <div className="flex gap-4 max-sm:hidden">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  image={category.image}
                />
              ))}
            </div>
            <div className="hidden max-sm:grid">
              <SwiperForHomePage categories={categories}></SwiperForHomePage>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Newsletter />
        </Container>
      </section>
    </div>
  );
}
