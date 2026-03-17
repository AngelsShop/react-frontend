export type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  currency: string;
  sizes: string[];
  colors: string[];
  image: string;
  imageSwiper: string[];
  description: { composition: string[]; care: string[] };
  isFavorite: boolean;
  isNew: boolean;
};
