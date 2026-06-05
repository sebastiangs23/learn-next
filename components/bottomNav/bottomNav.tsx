"use client";

import { useState, useEffect } from "react";
import { useCategory } from "@/context/CategoryContext";
import {
  BsHouseDoorFill,
  BsGrid,
  BsPersonCircle,
  BsCart3,
} from "react-icons/bs";

type BottomNavProps = {
  changeTab: (tab: number) => void;
};

export default function BottomNav({changeTab} : BottomNavProps) {
  const { selectedCategory } = useCategory();
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    changeTab(currentTab)
  }, [currentTab]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-around">
        <button onClick={() => setCurrentTab(1)} className="flex flex-col items-center" style={{color: selectedCategory.itemSeletected?.color}} >
          <BsHouseDoorFill className="text-2xl" />
          <span className="text-xs font-bold">Home</span>
        </button>

        <button onClick={() => setCurrentTab(2)} className="flex flex-col items-center" style={{color: selectedCategory?.itemSeletected?.color}} >
          <BsGrid className="text-2xl" />
          <span className="text-xs font-bold">Categories</span>
        </button>

        <button onClick={() => setCurrentTab(3)} className="flex flex-col items-center" style={{color: selectedCategory?.itemSeletected?.color}} >
          <BsPersonCircle className="text-2xl" />
          <span className="text-xs font-bold">Account</span>
        </button>

        <button onClick={() => setCurrentTab(4)} className="flex flex-col items-center" style={{color: selectedCategory?.itemSeletected?.color}} >
          <BsCart3 className="text-2xl" />
          <span className="text-xs font-bold">Cart</span>
        </button>
      </div>
    </nav>
  );
}
