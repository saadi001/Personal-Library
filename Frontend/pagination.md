### creating pagination by shadcn component

```js
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const PaginationForCallManagementTable = ({
  currentPage,
  total,
  limit,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / limit);
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      // If total pages are 7 or less, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If current page is in first 4 pages
      if (currentPage <= 4) {
        for (let i = 1; i <= 7; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
      // If current page is in last 4 pages
      else if (currentPage > totalPages - 4) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      }
      // If current page is in middle
      else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // console.log(getPageNumbers());
  return (
    <Pagination className={"mt-8 text-slate-600"}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={`${
              currentPage === 1
                ? "cursor-not-allowed hover:bg-transparent text-gray-500"
                : "cursor-pointer"
            }`}
          />
        </PaginationItem>

        {getPageNumbers().map((pageNumber, i) => {
          return (
            <PaginationItem key={i}>
              {pageNumber === "ellipsis" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={currentPage === pageNumber}
                  className={"cursor-pointer"}
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              )}
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
            className={`${
              currentPage === totalPages
                ? "cursor-not-allowed hover:bg-transparent text-gray-500"
                : "cursor-pointer"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationForCallManagementTable;
```
