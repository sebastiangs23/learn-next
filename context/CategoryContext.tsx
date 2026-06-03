"use client";

import { createContext, useContext, useState } from "react";
import { CategorySelected } from "@/types/interfaces/categories/categories";
import type { Category } from "@/types/interfaces/categories/categories";
import { categories } from "@/utils/utils";

//1.- Create the context
const CategorySelectedContext = createContext<CategorySelected | undefined>(
  undefined,
);

//2.- Create the provider will send 
//    {
//      selectedCategory: categories[0],
//      setSelectedCategory: function
//    }
export function CategorySelectedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
   const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  return (
    <CategorySelectedContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategorySelectedContext.Provider>
  );
}

//3.- Custom Hook will return the context
export function useCategory() {
  const context = useContext(CategorySelectedContext);

  if (!context) {
    throw new Error("useCategory must be used inside CategoryProvider");
  }

  return context;
}

// Explanation of the flow:
// Provider value={{ selectedCategory, setSelectedCategory }}
//                  ↓
// useContext reads that value
//                  ↓
// useCategory returns it
//                  ↓
// component destructures it