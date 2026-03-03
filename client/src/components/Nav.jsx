import React from "react";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="navbar min-h-0 h-14 border-b border-gray-300 bg-base-100">
      <div className="mx-auto max-w-6xl w-full px-4 flex items-center justify-between">

        {/* ===== LEFT ===== */}
        <div className="flex items-center gap-4">
          {/* Logo (Desktop Only) */}
          <NavLink
            to="/"
            className="hidden lg:flex font-extrabold text-2xl"
          >
            Zan.Comp
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-x-6">
              <NavList />
            </ul>
          </div>
        </div>

        {/* ===== SEARCH ===== */}
        <div className="flex-1 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search product..."
              className="input input-bordered input-sm w-full pl-9"
            />
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>

        {/* ===== RIGHT (Desktop Only) ===== */}
        <div className="hidden lg:flex items-center">
          <NavLink className="btn btn-ghost btn-circle btn-sm" to="/cart">
            <div className="indicator">
              <BsCart3 className="text-lg" />
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