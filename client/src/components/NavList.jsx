import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/about",
    text: "About",
  },
  {
    id: 2,
    url: "/products",
    text: "Products",
  },
  {
    id: 3,
    url: "/order",
    text: "Order",
  },
];

const NavList = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavList;
