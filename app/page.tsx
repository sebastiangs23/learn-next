"use client";

import BottomNav from "@/components/bottomNav/bottomNav";
import CategoryTab from "@/views/Category";
import HomeTab from "@/views/Home";

import { ToastContainer } from "react-toastify";
import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div className="relative bg-white">
      <ToastContainer toastClassName="!z-[99999]" />

      {
        currentTab === 1 ? 
        (
          <HomeTab />
        ) 
        : currentTab === 2 ? 
        (
          <CategoryTab />
        )
        : currentTab === 3 ?
        (
          <></>
        )
        : currentTab === 4 ?
        (
          <></>
        ) : null
      }

      <BottomNav changeTab={(e: number) => setCurrentTab(e)} />
    </div>
  );
}
