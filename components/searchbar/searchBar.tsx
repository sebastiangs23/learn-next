"use client";

import { BsSearch, BsCamera } from "react-icons/bs";
import { useCategory } from "@/context/CategoryContext";

export default function SearchBar() {
  const { selectedCategory } = useCategory();

  return (
    <div
      className="relative z-50 p-4"
      onClick={() => console.log("SearchBar clicked")}
    >
      <div className="flex h-12 items-center rounded-2xl border border-gray-300 bg-white px-4">
        <BsSearch
          className="mr-3 text-lg"
          style={{ color: selectedCategory.itemSeletected?.color ?? "#000000" }}
        />
        <div className="flex flex-1 items-center overflow-hidden text-black">
          <span className="mr-1 text-[1rem]">Search</span>

          <div className="search-word-container">
            <span className="search-word">Fragrances</span>
            <span className="search-word">PS5</span>
            <span className="search-word">iPhone</span>
          </div>
        </div>

        <div className="mx-4 h-8 w-px bg-gray-300" />

        <BsCamera
          className="text-2xl text-black"
          style={{ color: selectedCategory.itemSeletected?.color ?? "#000000" }}
        />
      </div>
    </div>
  );
}
