"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCategory } from "@/context/CategoryContext";
import { categories } from "@/utils/utils";
import { Category } from "@/types/interfaces/categories/categories";

import LocationModal from "@/components/modals/locationModal";
import Location from "@/components/location/location";
import SearchBar from "@/components/searchbar/searchBar";

export default function Categories() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideSearchBar, setHideSearchBar] = useState(false);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHideSearchBar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {isModalOpen && <LocationModal onClose={() => setIsModalOpen(false)} />}

      <div className="relative h-[200px]">
        <img
          src="/videos/snow.gif"
          alt="background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 h-34 bg-gradient-to-b from-transparent to-white" />

        <div className="relative z-10 p-4">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category: Category) =>
              category.image ? (
                <div
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  className={`${
                    selectedCategory.id === category.id
                      ? category.itemSeletected?.background
                      : "bg-white"
                  } flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl md:h-20 md:w-20`}
                >
                  <Image
                    src={category.image}
                    alt={category.id}
                    className="h-18 w-18 object-contain md:h-20 md:w-20"
                  />
                </div>
              ) : (
                <div
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  className={`${
                    selectedCategory.id === category.id
                      ? category.itemSeletected?.background
                      : "bg-white"
                  } flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl p-4 md:h-20 md:w-20`}
                >
                  {selectedCategory.id === category.id &&
                  category.selectedTextHTML
                    ? category.selectedTextHTML
                    : category.textHTML}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <Location onOpen={setIsModalOpen} className="mt-[-6rem]" />

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          hideSearchBar
          ? "max-h-0 opacity-0 -translate-y-3"
          : "max-h-24 opacity-100 translate-y-0"
        }`}
      >
        <SearchBar />
      </div>
    </div>
  );
}