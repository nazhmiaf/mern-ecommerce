import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-base-100 border-t border-gray-200 lg:hidden z-50">
      <div className="flex justify-around items-center h-14 text-sm">
        <NavLink to="/" className="flex flex-col items-center">
          <AiOutlineHome className="text-xl" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/products" className="flex flex-col items-center">
          <MdOutlineMenu className="text-xl" />
          <span>Menu</span>
        </NavLink>

        <NavLink to="/cart" className="flex flex-col items-center relative">
          <div className="relative">
            <BsCart3 className="text-xl" />
            <span className="absolute -top-2 -right-2 badge shadow-lg badge-primary badge-xs">
              8
            </span>
          </div>
          <span className="mt-1">Cart</span>
        </NavLink>
        <NavLink to="/login" className="flex flex-col items-center">
          <HiOutlineUser className="text-xl" />
          <span>Masuk</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
