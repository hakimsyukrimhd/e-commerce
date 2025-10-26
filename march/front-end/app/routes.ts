import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),

    ...prefix("product", [
        index("routes/product.tsx"),
        route(":slug", "routes/product-details.tsx")
    ]),
  ]),
] satisfies RouteConfig;
