"use client";

import { useState } from "react";
import BottomNav from "@/components/bottomNav/bottomNav";
import CategoryTab from "@/views/Category";
import HomeTab from "@/views/Home";
import CartTab from "@/views/CartTab";
import LoginTab from "@/views/LoginTab";
import ItemDetails from "@/components/categoryItems/itemDetails";
import type { ItemInt } from "@/components/categoryItems/items";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(1);
  const [selectedItem, setSelectedItem] = useState<ItemInt | null>(null);

  return (
    <main className="min-h-screen bg-[#20383d] md:flex md:justify-center">
      <div className="relative min-h-screen w-full bg-white pb-16 md:h-screen md:max-w-[430px] md:overflow-y-auto md:shadow-2xl">
        <ToastContainer toastClassName="!z-[99999]" />

        {selectedItem ? (
          <ItemDetails
            item={selectedItem}
            onBack={() => setSelectedItem(null)}
          />
        ) : currentTab === 1 ? (
          <HomeTab onItemClick={setSelectedItem} />
        ) : currentTab === 2 ? (
          <CategoryTab />
        ) : currentTab === 3 ? (
          <LoginTab />
        ) : currentTab === 4 ? (
          <CartTab redirectHome={() => setCurrentTab(1)} />
        ) : null}

        <BottomNav
          currentTab={currentTab}
          changeTab={(tab) => {
            setSelectedItem(null);
            setCurrentTab(tab);
          }}
        />
      </div>
    </main>
  );
}