import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
  const { pagination } = useLoaderData();

  const { totalPages } = pagination;
  const page = Number(pagination.page); 

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (number) => {
    const searchParams = new URLSearchParams(search);

    searchParams.set("page", number);

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="join mt-10">
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`btn join-item bg-base-100 ${
            pageNumber === page ? "bg-base-200" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;