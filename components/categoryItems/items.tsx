"use client";

import { useEffect, useState } from "react";
import { BsHeartFill, BsPlusLg, BsStarFill } from "react-icons/bs";
import { useCategory } from "@/context/CategoryContext";

export interface ItemInt {
  id: string;
  name: string;
  description?: string;
  images: string[];
  price: number;
  discount?: number;
  rate: number;
}

interface ItemsProps {
  items: ItemInt[];
  onItemClick?: (item: ItemInt) => void;
}

const EXPRESS_TOMORROW_IMAGE =
  "https://f.nooncdn.com/mpcms/EN0001/assets/98a1e128-4336-4bd8-980d-2dc0fb200aec.png";

const DELIVERY_ICON =
  "https://f.nooncdn.com/mpcms/EN0001/assets/77701d64-1162-4836-93f9-584b39add4fd.png";

function ProductCard({
  item,
  onItemClick,
  isFavorite,
  onToggleFavorite,
}: {
  item: ItemInt;
  onItemClick?: (item: ItemInt) => void;
  isFavorite: boolean;
  onToggleFavorite: (itemId: string) => void;
}) {
  const { selectedCategory } = useCategory();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const finalPrice = item.discount
    ? item.price - (item.price * item.discount) / 100
    : item.price;

  useEffect(() => {
    if (item.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) =>
        prevIndex === item.images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [item.images.length]);

  return (
    <div
      onClick={() => onItemClick?.(item)}
      className="relative w-[125px] shrink-0 cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm"
    >
      <div className="relative h-[155px] w-full overflow-hidden rounded-xl bg-[#f7f7f7]">
        <img
          src={item.images[activeImageIndex]}
          alt={item.name}
          draggable={false}
          className="h-full w-full object-cover transition-all duration-500 ease-in-out"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(item.id);
          }}
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/95 shadow-sm"
        >
          <BsHeartFill
            className="text-[13px]"
            style={{color: isFavorite ? selectedCategory.itemSeletected?.color : "#7e859b" }}
          />
        </button>

        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
          {item.images.slice(0, 4).map((_, index) => (
            <span
              key={index}
              className={`h-[4px] rounded-full transition-all ${
                activeImageIndex === index
                  ? "w-[10px] bg-[#404553]"
                  : "w-[4px] bg-[#d9d9d9]"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-md"
        >
          <BsPlusLg className="text-[17px] font-bold text-[#404553]" />
        </button>
      </div>

      <div className="px-[6px] pb-2 pt-[6px]">
        <h3 className="line-clamp-2 min-h-[32px] text-[11px] font-medium leading-[15px] text-[#404553]">
          {item.name}
        </h3>

        <div className="mt-[5px] flex items-center gap-[4px]">
          <div className="flex items-center gap-[2px] rounded-sm bg-[#38ae04] px-[4px] py-[1px]">
            <BsStarFill className="text-[8px] text-white" />
            <span className="text-[10px] font-semibold leading-none text-white">
              {item.rate.toFixed(1)}
            </span>
          </div>

          <span className="text-[10px] leading-none text-[#7e859b]">(11)</span>
        </div>

        <div className="mt-[6px] flex items-end gap-[3px]">
          <span className="text-[10px] font-bold leading-none text-[#404553]">
            AED
          </span>

          <span className="text-[13px] font-extrabold leading-none text-[#404553]">
            {finalPrice.toFixed(2)}
          </span>

          {item.discount && (
            <>
              <span className="text-[10px] leading-none text-[#7e859b] line-through">
                {item.price}
              </span>

              <span className="text-[10px] font-bold leading-none text-[#38ae04]">
                {item.discount}%
              </span>
            </>
          )}
        </div>

        <div className="mt-[6px] flex items-center gap-[3px]">
          <img
            src={DELIVERY_ICON}
            alt="delivery"
            className="h-[10px] w-[12px] object-contain"
          />

          <p className="truncate text-[9.5px] font-medium leading-none text-[#404553]">
            Free Delivery over <span className="font-bold">AED 1...</span>
          </p>
        </div>

        <div className="mt-[6px]">
          <img
            src={EXPRESS_TOMORROW_IMAGE}
            alt="express tomorrow"
            className="h-[18px] w-[96px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default function Items({ items, onItemClick }: ItemsProps) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (itemId: string) => {
    setFavoriteIds((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  return (
    <div className="flex gap-3 overflow-x-auto px-3 py-4 [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          onItemClick={onItemClick}
          isFavorite={favoriteIds.includes(item.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
