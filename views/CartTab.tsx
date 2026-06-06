"use client";

import { useState } from "react";
import Location from "@/components/location/location";
import LocationModal from "@/components/modals/locationModal";

const cartImage =
  "https://a.nooncdn.com/mpcms/EN0001/assets/57fa15e9-df7d-456e-8f6d-330846baf801.png?width=2400";

type CartTabProps = {
  redirectHome: () => void;
};

export default function CartTab({ redirectHome }: CartTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {isModalOpen && <LocationModal onClose={() => setIsModalOpen(false)} />}

      <Location onOpen={setIsModalOpen} />

      <button
        type="button"
        onClick={redirectHome}
        className="flex h-[40vh] w-full items-center justify-center overflow-hidden"
      >
        <img
          src={cartImage}
          alt="Empty cart"
          draggable={false}
          className="pointer-events-none h-full w-[220%] max-w-none select-none object-cover object-center"
        />
      </button>
    </div>
  );
}