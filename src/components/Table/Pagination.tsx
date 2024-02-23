interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="justify-center flex">
      {pages.map((page, index) => (
        <button
          className={`${
            page === currentPage && "bg-white text-black text-xl"
          } my-2 mx-1 px-1 rounded-sm`}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
