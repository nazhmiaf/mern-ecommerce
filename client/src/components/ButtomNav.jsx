import { NavLink } from "react-router-dom";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import { AiFillProduct } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-base-100 border-t border-gray-200 lg:hidden z-50">
      <div className="flex justify-around items-center h-14 text-sm">
        <NavLink to="/" className="flex flex-col items-center">
          <AiFillHome  className="text-xl" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/product" className="flex flex-col items-center">
          <AiFillProduct className="text-xl" />
          <span>Product</span>
        </NavLink>

        <NavLink to="/cart" className="flex flex-col items-center relative">
          <div className="relative">
            <HiMiniShoppingBag className="text-2xl translate-y-1" />
            <span className="absolute -top-2 -right-2 badge translate-y-1 shadow-lg badge-primary badge-xs">
              8
            </span>
          </div>
          <span className="mt-1">Cart</span>
        </NavLink>
        <NavLink to="/login" className="flex flex-col items-center">
          <FaUser className="text-xl" />
          <span>Masuk</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
