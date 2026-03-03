import { FaMemory } from "react-icons/fa";
import { HiMiniCpuChip } from "react-icons/hi2";
import { BsFillMotherboardFill } from "react-icons/bs";
import { BsFillDeviceHddFill } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { PiComputerTowerFill } from "react-icons/pi";
import { PiGraphicsCardFill } from "react-icons/pi";
import { FaMouse } from "react-icons/fa";
import { BsDeviceSsdFill } from "react-icons/bs";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import Category from "../components/Category";
import CardProduct from "../components/CardProduct";
import CardProductSkeleton from "../components/CardProductSkeleton";
import PopularProductHero from "../components/PopularProductHero";
import { FaComputer } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import customAPI from "../API/api";
import React from "react";

const HomeContent = () => {
  const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await customAPI.get("/product/");
          setProducts(res.data.data || []);
        } catch (error) {
          console.log(error);
          setProducts([]);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
  return (
    <div>
      <h1 className="my-7 font-semibold text-xl md:text-2xl">
            Best Selling Products
          </h1>
        <PopularProductHero />
        <div className="mt-5 bg-base-100 p-6 md:p-10 shadow-md rounded-box">
          <h1 className="font-semibold text-xl md:text-2xl">
            Shop by Categories
          </h1>

          <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center">
            <Category
              icon={<FaComputer className="text-fuchsia-600" />}
              label="PC Build"
            />
            <Category
              icon={<FaMemory className="text-blue-500" />}
              label="Memory RAM"
            />
            <Category
              icon={<HiMiniCpuChip className="text-cyan-500" />}
              label="CPU"
            />
            <Category
              icon={<BsFillMotherboardFill className="text-green-500" />}
              label="Motherboard"
            />
            <Category
              icon={<BsFillDeviceHddFill className="text-red-500" />}
              label="HDD"
            />
            <Category
              icon={<GiComputerFan className="text-yellow-500" />}
              label="Fan/Cooler"
            />
            <Category
              icon={<PiComputerTowerFill className="text-purple-500" />}
              label="Case"
            />
            <Category
              icon={<PiGraphicsCardFill className="text-pink-500" />}
              label="Graphics Card"
            />
            <Category
              icon={<FaMouse className="text-gray-500" />}
              label="Peripheral"
            />
            <Category
              icon={<BsDeviceSsdFill className="text-indigo-500" />}
              label="SSD"
            />
            <Category
              icon={<FaPowerOff className="text-orange-500" />}
              label="Power Supply"
            />
            <Category
              icon={<FaPuzzlePiece className="text-teal-500" />}
              label="Accessories"
            />
            <Category
              icon={<RiComputerFill className="text-emerald-600" />}
              label="Monitor"
            />
          </div>
        </div>
        <div className="mt-7"></div>
        <div className="mt-10 bg-base-100 ">
          <h1 className="font-semibold text-2xl">All Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5">
            {loading &&
              Array.from({ length: 12 }).map((_, index) => (
                <CardProductSkeleton key={index} />
              ))}
            {!loading && products.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-lg font-medium">
                  No products found
                </p>
              </div>
            )}

            {!loading &&
              products.length > 0 &&
              products.map((item) => {
              
                return <CardProduct key={item._id} item={item} />;
              })}
          </div>
        </div>
    </div>
  )
}

export default HomeContent
