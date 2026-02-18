"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Don't render if there's only one page
  if (totalPages <= 1) return null;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    // { scroll: false } prevents jumping to the top of the page on click
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 disabled:opacity-20 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`h-10 w-10 rounded-xl cursor-pointer text-[10px] font-black transition-all ${
                currentPage === pageNum
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 disabled:opacity-20 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      
      <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;