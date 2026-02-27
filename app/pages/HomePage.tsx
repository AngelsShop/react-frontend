import { categories } from "data/categories";
import CategoryCard from "~/components/CategoryCard";
import Header from "~/components/Header";
import Newsletter from "~/components/Newsletter";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-24 items-center">
      <section>
        <div className="relative text-white ">
          <div className="grid grid-cols-3">
            <img src="/images/homePage/wall1.png" alt="" />
            <img src="/images/homePage/wall2.png" alt="" />
            <img src="/images/homePage/wall3.png" alt="" />
          </div>
          <div className="absolute inset-0 flex flex-col gap-y-5 items-center justify-center">
            <h1 className="text-5xl">Новая коллекция</h1>
            <hr className="w-28" />
            <a href="" className="flex ">
              <span className="text-base uppercase">Смотреть Новинки </span>
              <img src="/images/homePage/sparrow.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-12">Категории</h2>
        <div className="flex gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </section>
      <section>
        <Newsletter />
      </section>
    </div>
  );
}
