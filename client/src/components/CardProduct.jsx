import React from "react";
import formatRupiah from "../lib/formatRupiah";
import { Link } from "react-router-dom";

const CardProduct = ({ item }) => {
  return (
    <Link
      to={`/product/${item._id}`}
      key={item._id}
      className="card bg-base-100 w-full shadow-md hover:shadow-xl cursor-pointer transition-all duration-300"
    >
      <figure className="h-40 md:h-48 overflow-hidden">
        <img
          src={item.images}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-3 md:p-5">
        <h2 className="card-title text-sm md:text-base">{item.name}</h2>

        <p className="text-xs font-bold md:text-sm">
          {formatRupiah(item.price)}
        </p>
        <p className="text-xs text-gray-500 ">
          {item.sold === null || item.sold === 0 ? "Be the first to buy!" : `${item.sold} sold`}
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-outline w-full btn-primary btn-sm md:btn-md">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
