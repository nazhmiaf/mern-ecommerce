import React from "react";
import { useParams } from "react-router-dom";
import customAPI from "../API/api";
import placeholder from "../assets/images/placeholder.jpg";
import formatRupiah from "../lib/formatRupiah";

const DetailProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [qty, setQty] = React.useState(1);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await customAPI.get(`/product/${id}`);
        setProduct(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold">Product Not Found</h1>
      </div>
    );
  }

  const image = product.images?.[0] || placeholder;
  const sold = product.sold ?? 0;

  return (
    <div className="min-h-dvh bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-12 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* IMAGE SECTION */}
          <div className="bg-base-200/40 rounded-box p-4 sm:p-6 flex items-center justify-center">
            <img
              src={image}
              alt={product.name}
              className="rounded-xl w-full object-contain max-h-64 sm:max-h-80 lg:max-h-[420px] transition duration-300 hover:scale-105"
            />
          </div>

          {/* INFO SECTION */}
          <div className="flex flex-col">
            {/* TITLE */}
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold leading-snug">
              {product.name}
            </h1>

            {/* CATEGORY */}
            <div className="mt-2">
              <span className="badge badge-outline badge-primary text-[11px] sm:text-xs">
                {product.category}
              </span>
            </div>

            {/* PRICE */}
            <p className="text-xl sm:text-2xl font-bold text-primary mt-4">
              {formatRupiah(product.price)}
            </p>

            {/* META INFO */}
            <div className="flex items-center gap-6 mt-2 text-xs sm:text-sm text-gray-500">
              <span>Stock: {product.stock}</span>
              {sold === 0 ? (
                <span className="text-green-500 font-medium">
                  Be the first buyer!
                </span>
              ) : (
                <span>{sold} sold</span>
              )}
            </div>

            <div className="divider my-6"></div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-sm font-semibold mb-2">Description</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* QUANTITY */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Quantity</p>

              <div className="join">
                <button
                  className="btn btn-sm join-item"
                  onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                >
                  −
                </button>

                <button className="btn btn-sm join-item no-animation min-w-[60px]">
                  {qty}
                </button>

                <button
                  className="btn btn-sm join-item"
                  onClick={() =>
                    setQty((prev) => (prev < product.stock ? prev + 1 : prev))
                  }
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS DESKTOP */}
            <div className="hidden sm:flex mt-10 gap-4">
              <button className="btn btn-primary flex-1">Add to Cart</button>

              <button className="btn btn-outline flex-1">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY BUY BAR (MOBILE ONLY) */}
      <div className="fixed w-full  flex mb-24 bg-base-100 border-t p-4 sm:hidden">
        <button className="btn btn-primary w-full">Add to Cart</button>
        <button className="btn btn-outline btn-accent">Buy Now</button>
      </div>
    </div>
  );
};

export default DetailProduct;
