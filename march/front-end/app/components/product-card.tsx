import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`}>
      <div className="mb-5 p-3 bg-white rounded-xl h-70 box-border">
        <img src={product.imageUrl} alt="" className="w-full h-4/5 rounded-2xl" />
        <h1 className="text-gray-600 font-poppins font-semibold">{product.name}</h1>
        <div className="flex justify-center mt-1">
          <p className="text-orange-500 font-poppins font-medium text-lg">Rp {product.price.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </Link>
  );
}
