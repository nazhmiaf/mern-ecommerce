import { FaMemory } from "react-icons/fa";
import { HiMiniCpuChip } from "react-icons/hi2";
import { BsFillMotherboardFill } from "react-icons/bs";
import { BsFillDeviceHddFill } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { PiComputerTowerFill } from "react-icons/pi";
import { PiGraphicsCardFill } from "react-icons/pi";
import { BsKeyboardFill } from "react-icons/bs";
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
import { useLoaderData, useNavigation, useSearchParams } from "react-router-dom";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const sort = url.searchParams.get("sort") || "newest";
  const page = url.searchParams.get("page") || 1;
  const category = url.searchParams.get("category");

  let productURL = `/product?sort=${sort}&page=${page}&limit=50`;

  if (category && category !== "all") {
    productURL += `&category=${category}`;
  }

  let categories = [];
  let products = [];
  let error = null;

  try {
    const productResponse = await customAPI.get(productURL);
    products = productResponse.data.data || [];
  } catch (err) {
    console.log("Product error :", err);
    error = "Failed to load products.";
  }

  try {
    const categoryResponse = await customAPI.get("/category");
    categories = categoryResponse.data.data || [];
  } catch (err) {
    console.log("Product error :", err);
    error = "Failed to load categories.";
  }

  return { products, sort, categories, error, category: category || "all" };
};

const categoryIcons = {
  "PC Builds": <FaComputer className="text-fuchsia-600" />,
  RAM: <FaMemory className="text-blue-500" />,
  CPU: <HiMiniCpuChip className="text-cyan-500" />,
  Motherboard: <BsFillMotherboardFill className="text-green-500" />,
  HDD: <BsFillDeviceHddFill className="text-red-500" />,
  "Fan/Cooler": <GiComputerFan className="text-yellow-500" />,
  Casing: <PiComputerTowerFill className="text-purple-500" />,
  "VGA": <PiGraphicsCardFill className="text-pink-500" />,
  Peripheral: <BsKeyboardFill className="text-gray-500" />,
  SSD: <BsDeviceSsdFill className="text-indigo-500" />,
  "PSU": <FaPowerOff className="text-orange-500" />,
  Accessories: <FaPuzzlePiece className="text-teal-500" />,
  Monitor: <RiComputerFill className="text-emerald-600" />,
};

const HomeContent = () => {
  const { products, sort, categories, error, category } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams()
  const navigation = useNavigation();

  const handleParams = (cat) => {
    searchParams.set('category', cat)
    setSearchParams(searchParams)
  }

  const loading = navigation.state === "loading";

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
          {categories.map((cat) => (
            <Category
              key={cat._id}
              icon={categoryIcons[cat.name]}
              label={cat.name}
              onClick={() => handleParams(cat._id)} 
              params={cat._id}
            />
          ))}
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
  );
};

export default HomeContent;
