import React from "react";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Searchbar from "./Form/FormInput";

const Nav = () => {
  return (
    <nav className="navbar min-h-0 h-14 border-b border-gray-300 bg-base-100">
      <div className="mx-auto w-full sm:px-24 px-10 flex items-center justify-between">

        {/* ===== LEFT ===== */}
        <div className="flex items-center justify-center gap-4">
          {/* Logo (Desktop Only) */}
          <NavLink
            to="/"
            className="hidden lg:flex font-extrabold text-2xl"
          >
            Zan.Comp
          </NavLink>
          <div className="hidden lg:flex">
              <NavList />
          </div>
        </div>

        {/* ===== SEARCH ===== */}
        <Searchbar/>

        {/* ===== RIGHT (Desktop Only) ===== */}
        <div className="hidden lg:flex items-center">
          <NavLink className="btn btn-ghost btn-circle btn-sm" to="/cart">
            <div className="indicator">
              <HiMiniShoppingBag className="text-2xl" />
              <span className="badge badge-primary badge-xs indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;