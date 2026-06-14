import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("authorization", "routes/authorization.tsx"),
  route("cart", "routes/cart.tsx"),
  route("catalog", "routes/catalog.tsx"),
  route("catalog/:productId", "routes/info-card-product.tsx"),
  route("contacts", "routes/contacts.tsx"),
  route("favorites", "routes/favorites.tsx"),
  route("personal", "routes/personal.tsx"),
  route("pay-delivery", "routes/pay-delivery.tsx"),
  route("registration", "routes/registration.tsx"),
  route("terms-of-return", "routes/terms-of-return.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
