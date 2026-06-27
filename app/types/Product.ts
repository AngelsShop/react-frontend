export type ProductCardProps = {
  productId: string;
  variantId: string;
  title: string;
  previewImage: string;
  price: number;
  colors: string[];
  sizes: string[];
  categoryId: string;
  isFavorite: boolean;
};

export type CatalogProducts = {
  items: ProductCardProps;
  pageData: {
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type FilterProps = {
  id: string;
  name: string;
  children: string[];
};

export type ProductInfoProps = {
  id: string;
  title: string;
  previewImage: string;
  categoryId: string;
  variant: VariantType;
  variants: VariantType[];
};

export type VariantType = {
  size: number;
  images: string[];
  price: number;
  isDefault: true;
  color: string;
  description: string;
  name: string;
  productId: string;
  id: string;
};

export type ProductDELETE = {
  id: string;
  title: string;
  price: number;
  currency: string;
  sizes: string[];
  colors: string[];
  image: string;
  imageSwiper: string[];
  isNew: boolean;
  description: {
    composition: string[];
    care: string[];
  };
  isFavorite: boolean;
};
