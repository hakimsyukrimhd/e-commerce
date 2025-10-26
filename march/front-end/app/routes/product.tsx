import { useState } from "react";
import type { Route } from "../+types/root";
import ProductCard from "~/components/product-card";
import CategoryCard from "~/components/category-card";

export async function clientLoader() {
  const resProduct = await fetch("http://localhost:3000/product?offset=0&limit=10");
  const products = await resProduct.json();
  const resCat = await fetch("http://localhost:3000/category");
  const categories = await resCat.json();
  const result = {
    products: products.data,
    categories: categories.data,
  };
  return result;
}

export default function ProductPage({ loaderData }: Route.ComponentProps) {
  const { products, categories } = loaderData;

  const [category, setCategory] = useState(categories);
  const [product, setProduct] = useState(products);
  const [page, setPage] = useState(1);

  async function handleCategoryClick(catId) {
    const resCategory = await fetch(`http://localhost:3000/category/${catId}`);
    const productCategory = await resCategory.json();
    setProduct(productCategory.data);
  }

  async function handlePrevClick() {
    const res = await fetch(`http://localhost:3000/product?offset=${page * 10 - 20}&limit=10`);
    const product = await res.json();
    setProduct(product.data);
    setPage(page - 1);
  }

  async function handleNextClick() {
    const res = await fetch(`http://localhost:3000/product?offset=${page * 10}&limit=10`);
    const product = await res.json();
    setProduct(product.data);
    setPage(page + 1);
  }

  return (
    <div className="box-border">
      <div className="flex gap-2">{category && category.map((c) => <CategoryCard key={c.id} category={c} handleCategoryClick={handleCategoryClick} />)}</div>
      <div className="grid grid-cols-5 gap-2">{product && product.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      <div className="flex justify-center">
        <button onClick={handlePrevClick} className="hover:bg-blue-300 mr-2">
          Prev
        </button>
        <p>{page}</p>
        <button onClick={handleNextClick} className="hover:bg-blue-300 ml-2">
          Next
        </button>
      </div>
    </div>
  );
}
