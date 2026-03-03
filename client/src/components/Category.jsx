const Category = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center group">
      <div className="text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110 cursor-pointer">
        {icon}
      </div>
      <p className="mt-2 text-xs sm:text-sm text-center">
        {label}
      </p>
    </button>
  );
};

export default Category;