"use client";
import { useCategory } from "@/context/CategoryContext";
import {
  BsFillHouseDoorFill,
  BsChevronDown,
  BsSuitHeartFill,
} from "react-icons/bs";

export default function Location() {
  const { selectedCategory } = useCategory();

  return (
    <div className="relative px-4 mt-[-6rem] z-50">
      <div className="flex items-center justify-between p-3 ">
        <div>
          <div className="flex items-center gap-1 font-bold" style={{ color: selectedCategory.itemSeletected?.color ?? "#000000" }}>
            <BsFillHouseDoorFill />
            <h3>Home</h3>
            <BsChevronDown  />
          </div>

          <span className=" 2 text-black">
            Yas Island, Abu Dhabi
          </span>
        </div>

        <div className="3 flex items-center justify-center p-2 rounded-full bg-white">
          <BsSuitHeartFill className="text-xl" style={{ color: selectedCategory.itemSeletected?.color ?? "#000000" }} />
        </div>
      </div>
    </div>
  );
}
