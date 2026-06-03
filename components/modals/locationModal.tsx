"use client";
import { useAddress } from "@/context/userContext";
import { ToastContainer, toast } from 'react-toastify';
import {
  BsSearch,
  BsPlus,
  BsChevronRight,
  BsHouseDoorFill,
  BsThreeDotsVertical,
  BsUpload,
  BsPatchCheckFill,
  BsX,
  BsHouseAdd
} from "react-icons/bs";


export default function LocationModal({ onClose }: { onClose: () => void }) {
    const { address } = useAddress();

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40">
      <ToastContainer />
      <div className="fixed left-1/2 top-1/2 h-[70vh] w-[90vw] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#f7f7f9] p-4">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-2 text-xl text-black"
        >
          <BsX />
        </button>

        {/* Address tab only */}
        <div className="mb-4 rounded-full bg-white mt-3 p-1 shadow-sm">
          <div className="rounded-full bg-white py-3 text-center font-bold text-black shadow">
            Address
          </div>
        </div>

        {/* Search */}
        <div 
        onClick={() => toast("It's just a demo, search functionality is not implemented :((")}
        className="mb-3 flex h-14 items-center gap-3 rounded-xl bg-white px-4 text-black shadow-sm">
          <BsSearch className="text-xl text-gray-600" />
          <span className="text-sm text-gray-700">
            Search for your building, area...
          </span>
        </div>

        {/* Add new address */}
        <button className="mb-4 flex h-16 w-full items-center justify-between rounded-xl bg-white px-4 text-blue-600 shadow-sm">
          <div className="flex items-center gap-4">
            <BsPlus className="text-2xl" />
            <span className="font-medium">Add new address</span>
          </div>

          <BsChevronRight className="text-xl" />
        </button>

        {/* Address card */}
        <div className="overflow-hidden rounded-xl border border-blue-100 bg-white">
          <div className="flex items-center justify-between bg-blue-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                <BsHouseDoorFill className="text-lg text-blue-600" />
              </div>

              <span className="font-medium text-black">Home</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <BsHouseAdd />
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="px-4 py-3">
            <p className="text-sm leading-snug text-gray-700">
              {address.place} {address.number}
            </p>

            <div className="my-3 border-t border-dashed border-gray-200" />

            <div className="flex items-center gap-2 text-sm text-gray-800">
              <span>{address.user} {address.phone} </span>
              <BsPatchCheckFill className="text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}