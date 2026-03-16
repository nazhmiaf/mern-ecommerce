import CardProduct from "./CardProduct";
import CardProductSkeleton from "./CardProductSkeleton";
import EmptyState from "./ProductEmptyState";

const ProductGrid = ({ products, loading, error }) => {
  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!products.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-stretch">
      {loading ? (
        <div className="col-span-full flex justify-center py-10">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        products.map((item) => <CardProduct key={item._id} item={item} />)
      )}
    </div>
  );
};

export default ProductGrid;
