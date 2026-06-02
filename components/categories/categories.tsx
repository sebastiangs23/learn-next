"use client";
import Image from "next/image";
import { useState } from "react";
import { categories } from "@/utils/utils";
import { Category } from "@/types/interfaces/categories/categories";
import snowVid from "@/public/videos/snow.gif";

export default function Categories() {
  return (
    <div className="sticky top-0 z-50">
      <div className="relative h-64 overflow-hidden">
        <img
          src="/videos/snow.gif"
          alt="background"
          className="absolute h-full inset-0 w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white" />

        <div className="relative z-10 p-4">

          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category: Category) =>
              category.image ? (
                <div key={category.id} className="flex h-[72px] w-[72px] md:h-20 md:w-20 shrink-0 items-center justify-center rounded-2xl bg-white">
                  <Image src={category.image} alt={category.id} className="h-18 w-18 md:h-20 md:w-20  object-contain" />
                </div>
              ) : (
                <div
                  key={category.id}
                  className="flex items-center align-center justify-center border border-solid rounded-2xl md:w-20 w-18 md:h-20 h-18 p-4 bg-white"
                >
                  <span className={` text-black leading-none ${category.className}`}>{category.id}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
