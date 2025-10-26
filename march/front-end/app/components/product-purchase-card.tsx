import { Link } from "react-router";
import { FaCartArrowDown, FaFacebookSquare, FaLine, FaWhatsapp } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { FaSquareTwitter, FaTwitter } from "react-icons/fa6";

export default function PurchaseProductCard({ product, minusClick, plusClick, quantity }) {
  return (
    <div className="flex gap-4 flex-row h-100">
      <div className="basis-2/5 bg-white p-5  flex justify-center rounded-xl border border-gray-300">
        <img src={product.imageUrl} alt="" className="h-full rounded-xl" />
      </div>
      <div className="basis-3/5 bg-white rounded-xl border border-gray-300">
        <div className="p-3">
          <h1 className="font-poppins text-3xl font-medium text-gray-600">{product.name}</h1>
          <div className="border-t-2 border-gray-300 pt-2">
            <p className="text-xl font-medium text-orange-500">Rp {product.price.toLocaleString("id-ID")}</p>
            <p className="mt-2 text-gray-600">Quantity</p>
            <div className="flex mt-1 h-9">
              <button onClick={minusClick} className="border w-12 hover:bg-gray-200 cursor-pointer">
                -
              </button>
              <p className="border-t border-b w-14 flex justify-center items-center">{quantity}</p>
              <button onClick={plusClick} className="border w-12 hover:bg-gray-200 cursor-pointer">
                +
              </button>
            </div>
            <div className="mt-4 flex h-12 gap-2">
              <Link to="#" className="w-full bg-black p-2 flex justify-center items-center rounded-lg gap-2">
                <FaWhatsapp className="text-white text-xl" />
                <p className=" text-white">Pesan Sekarang</p>
              </Link>
              <Link to="#" className="w-full bg-black p-2 flex justify-center items-center rounded-lg gap-2">
                <FaCartArrowDown className="text-white text-xl" />
                <p className=" text-white">Tambah Ke Keranjang</p>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-center text-gray-600">Anda juga dapat belanja melalui marketplace</p>
            <div className="flex justify-center mt-1 gap-2">
              <Link to="#" className="">
                <SiShopee className="text-red-500 text-2xl border border-gray-300 h-10 w-13 p-2" />
              </Link>
              <Link to="#" className="">
                <SiShopee className="text-red-500 text-2xl border border-gray-300 h-10 w-13 p-2" />
              </Link>
              <Link to="#" className="">
                <SiShopee className="text-red-500 text-2xl border border-gray-300 h-10 w-13 p-2" />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-gray-600">Bagikan :</p>
        <div className="flex flex-row border-t border-gray-300 h-10">
          <Link to="#" className="basis-1/4 grow border-r border-gray-300 flex justify-center">
            <FaWhatsapp className="text-green-600 text-2xl h-10 w-13 p-2" />
          </Link>
          <Link to="#" className="basis-1/4 grow border-r border-gray-300 flex justify-center">
            <FaLine className="text-green-600 text-2xl h-10 w-13 p-2" />
          </Link>
          <Link to="#" className="basis-1/4 grow border-r border-gray-300 flex justify-center">
            <FaFacebookSquare className="text-blue-600 text-2xl h-10 w-13 p-2" />
          </Link>
          <Link to="#" className="basis-1/4 grow flex justify-center">
            <FaTwitter className="text-blue-500 text-2xl h-10 w-13 p-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
