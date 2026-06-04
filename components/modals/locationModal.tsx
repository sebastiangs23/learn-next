"use client";
import { useState } from "react";
import { useAddress } from "@/context/userContext";
import { useCategory } from "@/context/CategoryContext";
import MiniModal from "@/components/reusableComponents/modal";;
import ModalInput from "@/components/reusableComponents/modalInput";

import { toast } from "react-toastify";
import {
  BsSearch,
  BsPlus,
  BsChevronRight,
  BsHouseDoorFill,
  BsThreeDotsVertical,
  BsPatchCheckFill,
  BsX,
  BsHouseAdd,
} from "react-icons/bs";

export default function LocationModal({ onClose }: { onClose: () => void }) {
  const { address, addAddress } = useAddress();
  const { selectedCategory } = useCategory();

  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);

  const [form, setForm] = useState({
    place: "",
    number: "",
    user: "",
    phone: "",
  });

  console.log(address)

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40">
      <div className="fixed left-1/2 top-1/2 h-[70vh] w-[90vw] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#f7f7f9] p-4 overflow-auto">
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
          onClick={() =>
            toast(
              "It's just a demo, search functionality is not implemented :((",
            )
          }
          className="mb-3 flex h-14 items-center gap-3 rounded-xl bg-white px-4 text-black shadow-sm"
        >
          <BsSearch className="text-xl text-gray-600" />
          <span className="text-sm text-gray-700">
            Search for your building, area...
          </span>
        </div>

        {/* Add new address */}
        <button
          onClick={() => setIsAddAddressOpen(true)}
          className="mb-4 flex h-16 w-full items-center justify-between rounded-xl bg-white px-4 shadow-sm"
          style={{ color: selectedCategory.itemSeletected?.color }}
        >
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
                <BsHouseDoorFill
                  className="text-lg"
                  style={{ color: selectedCategory.itemSeletected?.color }}
                />
              </div>

              <span className="font-medium text-black">Home</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <BsHouseAdd />
              <BsThreeDotsVertical />
            </div>
          </div>
          
          {/* TODO: CHECK THIS LATER */}
          {address &&
            address?.map((item, index) => {
              return (
                <div className="px-4 py-3" key={index}>
                  <p className="text-sm leading-snug text-gray-700">
                    {item.place} {item.number}
                  </p>

                  <div className="my-3 border-t border-dashed border-gray-200" />

                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <span>
                      {item.user} {item.phone}
                    </span>
                    <BsPatchCheckFill className="text-green-500" />
                  </div>

                  <div className="my-3 border-t border-dashed border-black  " />
                </div>
              );
            })}
        </div>
        
        {/* Dynamic mini modal */}
        {isAddAddressOpen && (
          <MiniModal
            title="Add new address"
            cancelText="Cancel"
            acceptText="Accept"
            onCancel={() => setIsAddAddressOpen(false)}
            onAccept={() => {

              addAddress(form);

              setIsAddAddressOpen(false);
              setForm({
                place: "",
                number: "",
                user: "",
                phone: "",
              });
            }}
            acceptColor={selectedCategory.itemSeletected?.color}
          >
            <ModalInput
              label="Place"
              placeholder="Yas village, E-block"
              value={form.place}
              onChange={(value: string) => setForm({ ...form, place: value })}
            />

            <ModalInput
              label="Room / Number"
              placeholder="Room 605"
              value={form.number}
              onChange={(value: string) => setForm({ ...form, number: value })}
            />

            <ModalInput
              label="Name"
              placeholder="Sebastian"
              value={form.user}
              onChange={(value: string) => setForm({ ...form, user: value })}
            />

            <ModalInput
              label="Phone"
              placeholder="+971 52 332 8967"
              value={form.phone}
              onChange={(value: string) => setForm({ ...form, phone: value })}
            />
          </MiniModal>
        )}
      </div>
    </div>
  );
}
