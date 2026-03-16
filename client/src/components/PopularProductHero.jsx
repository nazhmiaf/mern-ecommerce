import customAPI from "../API/api";
import { useEffect, useState, useMemo } from "react";
import CardProduct from "./CardProduct";
import CardProductSkeleton from "./CardProductSkeleton";
import { useLoaderData, useNavigation } from "react-router-dom";

export const loader = async ({ request }) => {
  const { data } = customAPI.get("/product");
  console.log(request);
  const products = data.data;

  return { products };
};

const PopularProductHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chunk, setChunk] = useState(6);

  const { products } = useLoaderData();
  const navigation = useNavigation();

  const loading = navigation.state === "loading";

  useEffect(() => {
    const updateChunk = () => {
      if (window.innerWidth < 768) {
        setChunk(2);
      } else {
        setChunk(6);
      }
    };

    updateChunk();
    window.addEventListener("resize", updateChunk);

    return () => window.removeEventListener("resize", updateChunk);
  }, []);

  // ✅ Chunk products based on screen
  const chunkProducts = useMemo(() => {
    const result = [];
    for (let i = 0; i < products.length; i += chunk) {
      result.push(products.slice(i, i + chunk));
    }
    return result;
  }, [products, chunk]);

  // ✅ Reset index kalau chunk berubah
  useEffect(() => {
    if (currentIndex >= chunkProducts.length) {
      setCurrentIndex(0);
    }
  }, [chunkProducts.length, currentIndex]);

  const nextSlide = () => {
    if (chunkProducts.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % chunkProducts.length);
  };

  const prevSlide = () => {
    if (chunkProducts.length === 0) return;
    setCurrentIndex(
      (prev) => (prev - 1 + chunkProducts.length) % chunkProducts.length,
    );
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <CardProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!loading && products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 text-lg font-medium">No products found</p>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {chunkProducts.map((group, index) => (
            <div key={index} className="min-w-full">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-6">
                {group.map((item) => (
                  <CardProduct key={item._id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (FIX klik issue) */}
        {chunkProducts.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={prevSlide}
              className="btn btn-circle shadow-md pointer-events-auto"
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className="btn btn-circle shadow-md pointer-events-auto"
            >
              ❯
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularProductHero;
