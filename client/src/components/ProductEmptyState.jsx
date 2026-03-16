const ProductEmptyState = () => {
  return (
    <div className="col-span-full text-center py-16">
      <p className="text-gray-500 text-lg font-medium">
        No products found
      </p>

      <p className="text-sm text-gray-400 mt-2">
        Try selecting another category
      </p>
    </div>
  );
};

export default ProductEmptyState;