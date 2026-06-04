"use client";
import { useCategory } from "@/context/CategoryContext";
import { useAddress } from "@/context/userContext";
import {
  BsFillHouseDoorFill,
  BsChevronDown,
  BsSuitHeartFill,
} from "react-icons/bs";
import LocationModal from "@/components/modals/locationModal";

export default function Location({
  onOpen,
}: {
  onOpen: (value: boolean) => void;
}) {
  const { selectedCategory } = useCategory();
  const { address, addAddress, deleteAddress } = useAddress();

  const openModal = () => {
    onOpen(true);
  };

  return (
    <div className="relative px-4 mt-[-6rem] z-50">
      <div className="flex items-center justify-between p-3 ">
        <div>
          <div
            onClick={() => {
              openModal();
            }}
            className="flex items-center gap-1 font-bold cursor-pointer"
            style={{
              color: selectedCategory.itemSeletected?.color ?? "#000000",
            }}
          >
            <BsFillHouseDoorFill />
            <h3>Home</h3>
            <BsChevronDown />
          </div>

          <span className=" 2 text-black">
            {address[0]?.place} {address[0]?.number}
          </span>
        </div>

        <div className="3 flex items-center justify-center p-2 rounded-full bg-white">
          <BsSuitHeartFill
            className="text-xl"
            style={{
              color: selectedCategory.itemSeletected?.color ?? "#000000",
            }}
          />
        </div>
      </div>
    </div>
  );
}
