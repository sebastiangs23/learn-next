"use client";

import { useRef, useState } from "react";
import { CategoryItem } from "@/types/interfaces/categoryItems/categoryItems"


interface CategoryItemsGridProps {
  items: CategoryItem[];
  itemsPerPage?: number;
  rows?: number;
  onItemClick?: (item: CategoryItem) => void;
}

export default function CategoryItems({
  items,
  itemsPerPage = 8,
  rows = 2,
  onItemClick,
}: CategoryItemsGridProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activePage, setActivePage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const page = Math.round(container.scrollLeft / container.clientWidth);
    setActivePage(page);
  };

  const goToPage = (page: number) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollTo({
      left: container.clientWidth * page,
      behavior: "smooth",
    });

    setActivePage(page);
  };

  const pages = Array.from({ length: totalPages }, (_, pageIndex) =>
    items.slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage),
  );

  return (
    <div className="w-full bg-white px-3 py-2 mb-16">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((pageItems, pageIndex) => (
          <div
            key={pageIndex}
            className="grid min-w-full snap-start grid-cols-4 gap-x-3 gap-y-4"
          >
            {pageItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onItemClick?.(item)}
                className="flex flex-col items-center justify-start"
              >
                <div className="flex h-22 w-22 items-center justify-center rounded-2xl bg-[#f7f7f7]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    draggable={false}
                    className="h-full w-full object-contain"
                  />
                </div>

                <span className="mt-1 line-clamp-2 min-h-[28px] text-center text-[11px] font-semibold leading-[13px] text-[#404553]">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-3 flex justify-center">
          <div className="flex h-[4px] w-[42px] overflow-hidden rounded-full bg-[#e5e5e5]">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-full flex-1 transition-all ${
                  activePage === index ? "bg-[#404553]" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}