import { FaChevronDown, FaCheck } from "react-icons/fa";

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "sold", label: "Best Seller" },
];

const SortDropdown = ({ value, onChange }) => {
  const current =
    sortOptions.find((option) => option.value === value)?.label || "Newest";

  return (
    <div className="flex items-center gap-3">
      
      <p className="hidden sm:block text-sm font-semibold text-gray-500">
        Sort By
      </p>

      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-base-100 border border-base-300 
          sm:min-w-[160px] min-w-[120px] justify-between
          hover:border-primary transition-all duration-200"
        >
          <span className="text-sm font-medium">{current}</span>
          <FaChevronDown className="text-xs opacity-70" />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 
          rounded-box w-48 p-2 shadow-lg border border-base-200 z-50"
        >
          {sortOptions.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => onChange(option.value)}
                className={`flex justify-between items-center text-sm 
                ${
                  value === option.value
                    ? "bg-primary text-primary-content"
                    : "hover:bg-base-200"
                }`}
              >
                {option.label}

                {value === option.value && (
                  <FaCheck className="text-xs opacity-80" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortDropdown;