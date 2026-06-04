"use client";

import { useState } from "react";
import Categories from "@/components/categories/categories";
import Location from "@/components/location/location";
import SearchBar from "@/components/searchbar/searchBar";
import LocationModal from "@/components/modals/locationModal";
import Carrousel from "@/components/reusableComponents/carrousel";

import { uae, adds } from "@/utils/utils";
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <ToastContainer toastClassName="!z-[99999]" />

      {isModalOpen && (
        <LocationModal onClose={() => setIsModalOpen(false)} />
      )}

      <Categories />
      <Location onOpen={setIsModalOpen} />
      <SearchBar />
      <Carrousel  slides={uae} height={"3rem"} autoPlayDelay={4000} />
      <Carrousel  slides={adds} height={"10rem"} />
    </div>
  );
}