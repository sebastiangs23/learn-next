import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface CategoryTextPart {
  text: string;
  className?: string;
  selectedClassName?: string;
}

export interface Category {
  id: string;
  image: StaticImageData | null;
  textHTML?: ReactNode;
  selectedTextHTML?: ReactNode;
  itemSeletected?: {
    color: string;
    background?: string;
  };
}

export interface CategorySelected {
  selectedCategory: Category;
  setSelectedCategory: (categoryId: Category) => void;
}