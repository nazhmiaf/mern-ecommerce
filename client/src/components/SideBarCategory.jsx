import { useSearchParams } from "react-router-dom";

const SideBarCategory = ({ categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category");

  const handleFilter = (cat) => {
    searchParams.set("category", cat);
    searchParams.set("page", 1);
    setSearchParams(searchParams);

  };

  return (
    <>
      <aside className="lg:w-64">
        <div className="sticky top-28">
          <div className="bg-base-100 shadow-lg rounded-field p-3 h-[750px] overflow-y-auto">
            <h2 className="text-lg md:text-xl font-bold mb-4">Category</h2>
            <div>
              <div
                className={`p-3 mb-2 rounded cursor-pointer transition
              ${
                activeCategory === "all" || activeCategory === null
                  ? "bg-base-200 text-base-content font-semibold"
                  : "bg-base-100 hover:text-primary hover:font-semibold duration-300 transition-all"
              }`}
                onClick={() => handleFilter("all")}
              >
                All Products
              </div>
              {categories.map((cat) => (
                <div
                  key={cat._id}
                  className={`p-3 mb-2 rounded cursor-pointer transition
              ${
                activeCategory === cat._id
                  ? "bg-base-200 text-base-content font-semibold"
                  : "bg-base-100 hover:text-primary hover:font-semibold  duration-300 transition-all"
              }`}
                  onClick={() => handleFilter(cat._id)}
                >
                  {cat.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBarCategory;
