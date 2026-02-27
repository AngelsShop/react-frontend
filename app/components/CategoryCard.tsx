type CategoriesCardProps = {
  title: string;
  image: string;
};

export default function CategoryCard({ title, image }: CategoriesCardProps) {
  return (
    <div className="relative flex justify-center">
      <img src={image} alt="" />
      <span className="absolute text-white text-xl backdrop-blur-[5px]  flex justify-center py-2 bottom-0 bg-[#E0BEA2]/75 w-full">
        {title}
      </span>
    </div>
  );
}
