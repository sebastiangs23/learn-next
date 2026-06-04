"use client";

import { useState } from "react";
import Categories from "@/components/categories/categories";
import Location from "@/components/location/location";
import SearchBar from "@/components/searchbar/searchBar";
import LocationModal from "@/components/modals/locationModal";

import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <ToastContainer toastClassName="!z-[99999]" />

      <Categories />
      <Location onOpen={setIsModalOpen} />
      <SearchBar />

      {isModalOpen && (
        <LocationModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}