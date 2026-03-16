import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "About", path: "/about" },
];

const NavList = () => {
  return (
    <nav className="flex items-center justify-center gap-8">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `relative text-sm md:text-base transition-all duration-300
            ${
              isActive
                ? "text-primary font-semibold"
                : "text-gray-500 font-medium hover:text-base-content"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavList;