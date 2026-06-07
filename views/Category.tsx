"use client";

import SearchBar from "@/components/searchbar/searchBar";
import CategoryItems from "@/components/categoryItems/categoryItems";
import { categoriesItems } from "@/utils/utils";

export default function CategoriesTab() {
  return (
    <section className="min-h-screen bg-white pb-20">
      <div className="sticky top-0 z-40 bg-white px-3 pt-2 pb-3">
        <SearchBar />
      </div>

      <div className="px-3">
        <h2 className="mb-3 text-lg font-semibold text-black">Categories</h2>

        <CategoryItems
          items={categoriesItems}
          itemsPerPage={16}
          rows={5}
          onItemClick={(item) => console.log(item)}
        />
      </div>
    </section>
  );
}