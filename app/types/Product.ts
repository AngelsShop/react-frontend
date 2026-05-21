export type ProductCardProps = {
  productId: string;
  variantId: string;
  title: string;
  previewImage: string;
  price: 0;
  colors: string[];
  sizes: string[];
  categoryId: string;
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
