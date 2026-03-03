import { useEffect, useState } from "react";
import customAPI from "../API/api";
import TabList from "../components/TabList";
import HeroCarousel from "../components/HeroCarousel";
import Category from "../components/Category";


const ProductPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await customAPI.get("/product");
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const categoryCount = product.cate
 
  return (
    <>
      <HeroCarousel />
      <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-20 xl:px-64 min-h-dvh">
        <TabList />
      </div>
    </>
  );
};

export default ProductPage;
