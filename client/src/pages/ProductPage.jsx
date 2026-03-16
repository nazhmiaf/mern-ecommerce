import customAPI from "../API/api";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import SideBarCategory from "../components/SideBarCategory";
import ProductHeader from "../components/ProductHeader";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const sort = url.searchParams.get("sort") || "newest";
  const page = url.searchParams.get("page") || 1;
  const category = url.searchParams.get("category");

  let productURL = `/product?sort=${sort}&page=${page}&limit=`;

  if (category && category !== "all") {
    productURL += `&category=${category}`;
  }

  let categories = [];
  let products = [];
  let error = null;
  let pagination = {};

  try {
    const productResponse = await customAPI.get(productURL);
    products = productResponse.data.data || [];
    pagination = productResponse.data.pagination || {};
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

  return {
    products,
    sort,
    categories,
    error,
    category: category || "all",
    pagination,
  };
};

const ProductPage = () => {
  const { products, sort, categories, error, pagination } = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  const loading = navigation.state === "loading";

  const handleSortChange = (value) => {
    navigate(`/product?sort=${value}`);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 min-h-dvh">
        <div className="mt-10 flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <SideBarCategory categories={categories} />
          </div>

          {/* Main */}
          <main className="flex-1 w-full px-2 sm:px-0">
            <ProductHeader
              sort={sort}
              onSortChange={handleSortChange}
              categories={categories}
            />

            <div className="flex flex-col items-center">
              <ProductGrid
                products={products}
                loading={loading}
                error={error}
              />

              <div className="flex justify-center w-full">
                <Pagination />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;