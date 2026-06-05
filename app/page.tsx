"use client";

import Categories from "@/components/categories/categories";
import Carrousel from "@/components/reusableComponents/carrousel";
import CategoryItems  from "@/components/categoryItems/categoryItems";
import Items from "@/components/categoryItems/items";
import BottomNav from "@/components/bottomNav/bottomNav";

import { uae, adds, categoriesItems, bestSellingItems } from "@/utils/utils";
import { ToastContainer } from 'react-toastify';

export default function Home() {

  return (
    <div className="relative bg-white">
      <ToastContainer toastClassName="!z-[99999]" />

      <Categories />
      <Carrousel  slides={uae} height={"3rem"} autoPlayDelay={4000} />
      <Carrousel  slides={adds} height={"10rem"} />
      
      <h4 className="text-black font-bold mx-4">Best picks for you.</h4>
      <Items items={bestSellingItems} />

      <h4 className="text-black font-bold mx-4">Categories</h4>
      <CategoryItems items={categoriesItems} />
      <BottomNav />
    </div>
  );
}