import React from "react";
import formatRupiah from "../lib/formatRupiah";
import { Link } from "react-router-dom";
import { MdDiscount } from "react-icons/md";

const CardProduct = ({ item }) => {
  return (
    <Link
      to={`/product/${item._id}`}
      className="card bg-base-100 w-full hover:shadow-lg hover:shadow-md hover:-translate-y-1 cursor-pointer h-72 transition-all duration-300"
    >
      {/* IMAGE */}
      <figure className="h-40 md:h-44 lg:h-36 overflow-hidden">
        <img
          src={item.images}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* BODY */}
      <div className="card-body p-3 md:p-4 lg:p-3">
        <h2 className="card-title text-sm md:text-base lg:text-sm line-clamp-2">
          {item.name}
        </h2>
        <div className="flex bg-red-100 px-2 border border-red-500 rounded-md w-fit justify-center items-center gap-1">
          <MdDiscount className="text-red-500"/>
          <p className="text-xs md:text-sm font-bold text-red-500">
            {formatRupiah(item.price)}
          </p>
        </div>

        <p className="text-xs text-gray-500">
          {item.sold === null || item.sold === 0
            ? "Be the first to buy!"
            : `${item.sold} sold`}
        </p>

        <div className="card-actions justify-end mt-2">
          <button
            onClick={(e) => e.preventDefault()}
            className="btn btn-outline w-full btn-primary btn-xs md:btn-sm lg:btn-xs"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
