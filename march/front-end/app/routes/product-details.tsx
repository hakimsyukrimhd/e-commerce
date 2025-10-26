import { useState } from "react";
import type { Route } from "../+types/root";
import PurchaseProductCard from "~/components/product-purchase-card";
import ProductDescriptionCard from "~/components/product-description-card";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const resProduct = await fetch(`http://localhost:3000/product/${params.slug}`);
  const product = await resProduct.json();
  return product.data;
}

export default function ProductDetails({ loaderData }: Route.ComponentProps) {
  const product = loaderData;

  const [quantity, setQuantity] = useState(1);

  function quantityPlusClick() {
    setQuantity(quantity + 1);
  }

  function quantityMinusClick() {
    if (quantity === 1) return 1;
    setQuantity(quantity - 1);
  }

  return (
    <div>
      <PurchaseProductCard product={product} minusClick={quantityMinusClick} plusClick={quantityPlusClick} quantity={quantity} />
      <ProductDescriptionCard product={product} />
    </div>
  );
}
