import { NavLink } from "react-router";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { FaShoppingCart, FaBars} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white w-full box-border">
      <div className="flex flex-row pt-5 pb-4">
        <div className="logo basis-3/5 pl-35 flex flex-row">
          <NavLink to="/">
            <div className="basis-1/2 font-bold text-[25px]">
              <span>
                Aur<span className="text-blue-500">Books </span>
              </span>
            </div>
          </NavLink>
          <div className="basis-1/2 pl-18 pt-2">
            <nav className=" flex justify-evenly">
              <NavLink to="/" className="hover:underline">Home</NavLink>
              <NavLink to="/product" className="hover:underline">Product</NavLink>
              <NavLink to="/about" className="hover:underline">About Us</NavLink>
            </nav>
          </div>
        </div>
        <div className="searchBar basis-1/5">
          <div className="w-full bg-gray-200 h-full rounded-4xl flex justify-between">
            <input type="text" placeholder="Cari disini" className="focus:outline-none pl-4" />
            <MagnifyingGlassIcon className="w-8 h-5 opacity-30 mt-2" />
          </div>
        </div>
        <div className="hamburgerOptiion basis-1/5 flex pt-2">
        <FaShoppingCart className="w-12 h-5 ml-9"/>
        <FaBars className="w-12 h-5"/>
        </div>
      </div>
    </div>
  );
}
