export default function ProductDescriptionCard({ product }) {
  return (
    <div className="bg-white mt-6 p-3 rounded-xl border border-gray-300">
      <h1 className="border-b-2 border-gray-300 font-semibold text-gray-600">Deskripsi Produk</h1>
      <p className="text-left mt-2">
        {product.description} <br /> <br />
        {product.description} <br />
        <br /> {product.description} <br />
        <br /> {product.description}
      </p>
    </div>
  );
}
