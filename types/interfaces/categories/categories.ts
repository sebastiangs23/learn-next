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
    text1?: string;
    text2?: string;
    background?: string;
  };
}