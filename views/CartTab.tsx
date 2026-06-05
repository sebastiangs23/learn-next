"use client";

import { useState } from "react";
import Location from "@/components/location/location";
import LocationModal from "@/components/modals/locationModal";
import Image from "next/image";
const cartImage =
  "https://a.nooncdn.com/mpcms/EN0001/assets/57fa15e9-df7d-456e-8f6d-330846baf801.png?width=2400";

export default function CartTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {isModalOpen && <LocationModal onClose={() => setIsModalOpen(false)} />}

      <Location onOpen={setIsModalOpen} />
      <div className="flex h-[40vh] w-full items-center justify-center overflow-hidden">
        <img
          src="https://a.nooncdn.com/mpcms/EN0001/assets/57fa15e9-df7d-456e-8f6d-330846baf801.png?width=2400"
          alt="Empty cart"
          className="h-full w-[220%] max-w-none object-cover object-center"
        />
      </div>
    </div>
  );
}
