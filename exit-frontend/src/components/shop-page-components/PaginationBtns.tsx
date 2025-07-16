import type { ProductsData } from "../../types/types"

type PaginationBtnsProps = {
    productsData: ProductsData | null,
    currentPage: number,
    handlePageChange: (page:number)=>void
}

const PaginationBtns = ({productsData, currentPage, handlePageChange} : PaginationBtnsProps) => {
  return (
    <div className="flex items-center gap-2 justify-end">
       <button
    onClick={() => handlePageChange(1)}
    className={`p-2 px-4 cursor-pointer rounded-md border-1 ${
      currentPage === 1
        ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
        : "border-[rgba(var(--color-gray-rgb),0.26)]"
    }`}
  >
    1
  </button>

  {currentPage > 2 && <p className="px-1">...</p>}

  {currentPage > 1 &&
    currentPage < (productsData?.metaPagination.pageCount || 1) && (
      <button
        onClick={() => handlePageChange(currentPage)}
        className={`p-2 px-4 cursor-pointer rounded-md bg-[var(--color-accent)] text-white`}
      >
        {currentPage}
      </button>
    )}

  {currentPage + 1 < (productsData?.metaPagination.pageCount || 1) && (
    <button
      onClick={() => handlePageChange(currentPage + 1)}
      className="p-2 px-4 cursor-pointer rounded-md border-1 border-[rgba(var(--color-gray-rgb),0.26)]"
    >
      {currentPage + 1}
    </button>
  )}

  {currentPage + 2 < (productsData?.metaPagination.pageCount || 1) && (
    <p className="px-1">...</p>
  )}

  {productsData?.metaPagination.pageCount !== 1 && (
    <button
      onClick={() =>
        handlePageChange(productsData?.metaPagination.pageCount || 1)
      }
      className={`p-2 px-4 cursor-pointer rounded-md border-1 ${
        currentPage === productsData?.metaPagination.pageCount
          ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
          : "border-[rgba(var(--color-gray-rgb),0.26)]"
      }`}
    >
      {productsData?.metaPagination.pageCount}
    </button>
  )}
    </div>
  )
}

export default PaginationBtns
