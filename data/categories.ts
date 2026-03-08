export type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  currency: string;
  sizes: string[];
  colors: string[];
  image: string;
  description: { composition: string; lining: string };
  isFavorite: boolean;
  isNew: boolean;
};

export type FilterProps = {
  id: string;
  title: string;
  type: string;
  options: string[];
};

export const categories = [
  { id: 1, title: "Куртки", image: "../public/images/categories/куртки.png" },
  { id: 2, title: "Пальто", image: "../public/images/categories/пальто.png" },
  { id: 3, title: "Шубы", image: "../public/images/categories/шубы.png" },
  { id: 4, title: "Парки", image: "../public/images/categories/парки.png" },
];

export const products: ProductCardProps[] = [
  {
    id: 1,
    title: "Белая куртка",
    price: 2900,
    currency: "руб",
    sizes: ["XXS", "XS", "S", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/white-jacket.png",
    isNew: true,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 2,
    title: "Синее пальто",
    price: 3150,
    currency: "руб",
    sizes: ["XS", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/blue-coat.png",
    isNew: false,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 3,
    title: "Бежевая шуба",
    price: 4200,
    currency: "руб",
    sizes: ["XS", "S", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/beige-fur.png",
    isNew: false,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 4,
    title: "Синяя парка",
    price: 2900,
    currency: "руб",
    sizes: ["XXS", "XS", "S", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/blue-parka.png",
    isNew: true,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 5,
    title: "Белая куртка",
    price: 2900,
    currency: "руб",
    sizes: ["XXS", "XS", "S", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/white-jacket.png",
    isNew: true,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 6,
    title: "Синее пальто",
    price: 3150,
    currency: "руб",
    sizes: ["XS", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/blue-coat.png",
    isNew: false,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 7,
    title: "Белая куртка",
    price: 2900,
    currency: "руб",
    sizes: ["XXS", "XS", "S", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/white-jacket.png",
    isNew: true,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 8,
    title: "Синее пальто",
    price: 3150,
    currency: "руб",
    sizes: ["XS", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/blue-coat.png",
    isNew: false,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 9,
    title: "Бежевая шуба",
    price: 4200,
    currency: "руб",
    sizes: ["XS", "S", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/beige-fur.png",
    isNew: false,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 10,
    title: "Синяя парка",
    price: 2900,
    currency: "руб",
    sizes: ["XXS", "XS", "S", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/blue-parka.png",
    isNew: true,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 11,
    title: "Белая куртка",
    price: 2900,
    currency: "руб",
    sizes: ["XXS", "XS", "S", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/white-jacket.png",
    isNew: true,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
  {
    id: 12,
    title: "Синее пальто",
    price: 3150,
    currency: "руб",
    sizes: ["XS", "M", "L"],
    colors: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
    image: "/images/catalog/blue-coat.png",
    isNew: false,
    description: {
      composition: "70% хлопок, 30% полиэстер",
      lining: "100% полиэстер",
    },
    isFavorite: false,
  },
];

export const categoriesCatalog = [
  { id: 1, title: "New", slug: "new", parentId: null },
  { id: 2, title: "Bestsellers", slug: "bestsellers", parentId: null },
  { id: 3, title: "Верхняя одежда", slug: "outerwear", parentId: null },

  { id: 4, title: "Шубы", slug: "fur-coats", parentId: 3 },
  { id: 5, title: "Тренчи", slug: "trench-coats", parentId: 3 },
  { id: 6, title: "Пальто", slug: "coats", parentId: 3 },
  { id: 7, title: "Пуховики и жилеты", slug: "puffer-jackets", parentId: 3 },

  { id: 8, title: "Костюмы", slug: "suits", parentId: null },
  { id: 9, title: "Жакеты", slug: "jackets", parentId: null },
  { id: 10, title: "Платья", slug: "dresses", parentId: null },
  { id: 11, title: "Рубашки и блузы", slug: "shirts-blouses", parentId: null },
  { id: 12, title: "Юбки", slug: "skirts", parentId: null },
  { id: 13, title: "Футболки и топы", slug: "tshirts-tops", parentId: null },
  { id: 14, title: "Аксессуары", slug: "accessories", parentId: null },
  { id: 15, title: "Sale", slug: "sale", parentId: null },
  { id: 16, title: "Summer", slug: "summer", parentId: null },
  { id: 17, title: "Посмотреть всё", slug: "all", parentId: null },
];

export const filters = [
  {
    id: "size",
    title: "Размер",
    type: "select",
    options: ["XXS", "XS", "S", "M", "L", "XL"],
  },
  {
    id: "color",
    title: "Цвет",
    type: "color",
    options: ["#EDEDED", "#2F3E5C", "#E0BEA2"],
  },
];
