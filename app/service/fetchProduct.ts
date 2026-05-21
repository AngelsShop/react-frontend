const API_key = `https://angels-shop.ru/api/v1/product`;

export async function getProductById(productId: string) {
  try {
    const res = await fetch(`${API_key}/${productId}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("такого продукта не существует");
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
}
