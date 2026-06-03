"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useCategory } from "@/context/CategoryContext";
import { categories } from "@/utils/utils";
import { Category } from "@/types/interfaces/categories/categories";

export default function Categories() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setSelectedCategory(categories[0]); // Set the first category as default on component mount
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="relative h-50">
        <img
          src="/videos/snow.gif"
          alt="background"
          className="absolute h-full inset-0 w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-34 bg-linear-to-b from-transparent to-white" />
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
                  } flex h-[72px] w-[72px] md:h-20 md:w-20 shrink-0 items-center justify-center rounded-2xl`}
                >
                  <Image
                    src={category.image}
                    alt={category.id}
                    className="h-18 w-18 md:h-20 md:w-20 object-contain"
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
                  } flex items-center align-center justify-center rounded-2xl md:w-20 w-18 md:h-20 h-18 p-4`}
                >
                  {selectedCategory.id === category.id && category.selectedTextHTML
                    ? category.selectedTextHTML
                    : category.textHTML}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
