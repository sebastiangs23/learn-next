import { Category } from "@/types/interfaces/categories/categories";
import now_now from "../public/images/now-now.png";

export const categories: Category[] = [
  {
    id: "noon",
    itemSeletected: {
      text1: "",
      text2: "",
      background: "bg-[#feee00]",
    },
    textHTML: (
      <div className="flex flex-col items-center leading-none">
        <span className="text-[1.4rem] text-black font-bold leading-none">
          noon
        </span>
      </div>
    ),
    selectedTextHTML: (
      <div className="flex flex-col items-center leading-none">
        <span className="text-[1.4rem] text-black font-bold leading-none">
          noon
        </span>
      </div>
    ),
    image: null,
  },
  {
    id: "noon food",
    itemSeletected: {
      text1: "text-[#feee00]",
      text2: "text-white",
      background: "bg-[#D70568]",
    },
    textHTML: (
      <div className="flex flex-col items-center leading-none font-bold">
        <span className="text-[1.5rem] text-black leading-none">nood</span>
        <span className="text-[1.2rem] text-[#D70568] leading-none">FOOD</span>
      </div>
    ),
    selectedTextHTML: (
      <div className="flex flex-col items-center leading-none font-bold">
        <span className="text-[1.5rem] text-[#feee00] leading-none">nood</span>
        <span className="text-[1.2rem] text-white leading-none">FOOD</span>
      </div>
    ),
    image: null,
  },
  {
    id: "now-now",
    image: now_now,
    textHTML: `<>`,
    itemSeletected: {
      text1: "",
      background: "bg-[#FF5000]",
    },
  },
  {
    id: "home instant services",
    itemSeletected: {
      text1: "",
      background: "bg-[#feee00]",
    },
    textHTML: (
      <div className=" font-bold">
        <div className="card__container">
          <span className="card__child text-[0.95rem] font-bold text-black">instant</span>
          <span className="card__child text-[0.95rem] font-bold text-black">home</span>
        </div>

        <span className="text-[0.95rem] font-bold text-black">services</span>
      </div>
    ),
    selectedTextHTML: (
      <div className=" font-bold">
        <div className="card__container">
          <span className="card__child text-[0.95rem] font-bold text-black">instant</span>
          <span className="card__child text-[0.95rem] font-bold text-black">home</span>
        </div>

        <span className="text-[0.95rem] font-bold text-black">services</span>
      </div>
    ),
    image: null,
  },
  {
    id: "pay",
    image: null,
    itemSeletected: {
      text1: "",
      background: "bg-[#532ADB]",
    },
    textHTML: (
      <div className="flex flex-col items-center leading-none font-bold">
        <span className="text-[1.4rem] bg-gradient-to-r from-[#5031D6] to-[#5453D1] bg-clip-text text-transparent leading-none">
          pay
        </span>
      </div>
    ),
    selectedTextHTML: (
      <div className="flex flex-col items-center font-bold">
        <span className="text-[1.4rem] text-white">pay</span>
      </div>
    ),
  },
];
