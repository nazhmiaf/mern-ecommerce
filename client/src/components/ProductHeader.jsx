import SortDropdown from "./SortDropdown";
import { FaChevronDown } from "react-icons/fa";

const ProductHeader = ({ sort, onSortChange }) => {
  return (
    <>
      <div className="flex items-center mb-2 justify-between sm:justify-end">

        {/* Mobile Category */}
        <div className="dropdown sm:hidden block dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="w-40 flex justify-between bg-base-100 btn"
          >
            <span>Category</span>
            <FaChevronDown />
          </div>

          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
          >
            <li><a>All</a></li>
          </ul>
        </div>

        <SortDropdown value={sort} onChange={onSortChange} />

      </div>

      <h2 className="text-md md:text-lg font-bold mb-6">
        All Products
      </h2>
    </>
  );
};

export default ProductHeader;