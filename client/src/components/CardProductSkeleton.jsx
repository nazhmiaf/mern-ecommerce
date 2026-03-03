import React from "react";

const CardProductSkeleton = () => {
  return (
    <div className="card bg-base-100 w-full ">
      <figure className="h-40 md:h-48 overflow-hidden">
        <div className="skeleton w-full h-full"></div>
      </figure>
      <div className="card-body p-3 md:p-5">
        <div className="skeleton h-4 w-3/4"></div>
        <div className="space-y-2 mt-2">
          <div className="skeleton h-3 w-full"></div>
          <div className="skeleton h-3 w-5/6"></div>
        </div>
        <div className="card-actions justify-end mt-4">
          <div className="skeleton h-8 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProductSkeleton;