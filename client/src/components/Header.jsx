import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-base-200 py-2 hidden lg:block text-neutral-content">
      <div className="mx-0 sm:mx-64 hidden sm:block flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-info transition-all duration-300 text-xs sm:text-sm">
            Sign In
          </Link>
          <Link to="/register" className="link link-hover text-info transition-all duration-300 text-xs sm:text-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
