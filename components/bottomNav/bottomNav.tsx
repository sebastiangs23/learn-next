"use client";

import { useCategory } from "@/context/CategoryContext";
import { useCart } from "@/context/CartContext";
import {
  BsHouseDoorFill,
  BsGrid,
  BsPersonCircle,
  BsCart3,
} from "react-icons/bs";

type BottomNavProps = {
  currentTab: number;
  changeTab: (tab: number) => void;
};

export default function BottomNav({ currentTab, changeTab }: BottomNavProps) {
  const { selectedCategory } = useCategory();
  const { cartCount } = useCart();

  const activeColor = selectedCategory.itemSeletected?.color ?? "#2563eb";
  const inactiveColor = "#404553";

  const getColor = (tab: number) => {
    return currentTab === tab ? activeColor : inactiveColor;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:left-1/2 md:right-auto md:w-[430px] md:-translate-x-1/2">
      <div className="flex h-16 items-center justify-around">
        <button
          onClick={() => changeTab(1)}
          className="flex flex-col items-center"
          style={{ color: getColor(1) }}
        >
          <BsHouseDoorFill className="text-2xl" />
          <span className="text-xs font-bold">Home</span>
        </button>

        <button
          onClick={() => changeTab(2)}
          className="flex flex-col items-center"
          style={{ color: getColor(2) }}
        >
          <BsGrid className="text-2xl" />
          <span className="text-xs font-bold">Categories</span>
        </button>

        <button
          onClick={() => changeTab(3)}
          className="flex flex-col items-center"
          style={{ color: getColor(3) }}
        >
          <BsPersonCircle className="text-2xl" />
          <span className="text-xs font-bold">Account</span>
        </button>

        <button
          onClick={() => changeTab(4)}
          className="flex flex-col items-center"
          style={{ color: getColor(4) }}
        >
          <div className="relative">
            <BsCart3 className="text-2xl" />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </div>

          <span className="text-xs font-bold">Cart</span>
        </button>
      </div>
    </nav>
  );
}