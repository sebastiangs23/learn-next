import { Category } from "@/types/interfaces/categories/categories";
import { CarouselSlide } from "@/types/interfaces/adds/adds";
import { categoryItems } from "@/types/interfaces/categoryItems/categoryItems";

import now_now from "../public/images/now-now.png";

export const categories: Category[] = [
  {
    id: "noon",
    itemSeletected: {
      color: "#feee00",
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
    id: "noon-food",
    itemSeletected: {
      color: "#D70568",
      background: "bg-[#D70568]",
    },
    textHTML: (
      <div className="flex flex-col items-center leading-none font-bold">
        <span className="text-[1.3rem] text-black leading-none">nood</span>
        <span className="text-[1rem] text-[#D70568] leading-none">FOOD</span>
      </div>
    ),
    selectedTextHTML: (
      <div className="flex flex-col items-center leading-none font-bold">
        <span className="text-[1.3rem] text-[#feee00] leading-none">nood</span>
        <span className="text-[1rem] text-white leading-none">FOOD</span>
      </div>
    ),
    image: null,
  },
  {
    id: "now-now",
    image: now_now,
    textHTML: `<>`,
    itemSeletected: {
      color: "#FF5000",
      background: "bg-[#FF5000]",
    },
  },
  {
    id: "home-instant-services",
    itemSeletected: {
      color: "#feee00",
      background: "bg-[#feee00]",
    },
    textHTML: (
      <div className=" font-bold">
        <div className="card__container">
          <span className="card__child text-[0.95rem] font-bold text-black">
            instant
          </span>
          <span className="card__child text-[0.95rem] font-bold text-black">
            home
          </span>
        </div>

        <span className="text-[0.95rem] font-bold text-black">services</span>
      </div>
    ),
    selectedTextHTML: (
      <div className=" font-bold">
        <div className="card__container">
          <span className="card__child text-[0.95rem] font-bold text-black">
            instant
          </span>
          <span className="card__child text-[0.95rem] font-bold text-black">
            home
          </span>
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
      color: "#532adb",
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

export const uae: CarouselSlide[] = [
  {
    id: "1",
    type: "image",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/f66850f5-723f-41fd-84e8-29cb365f8c95.png?width=800",
    alt: "uae"
  },
  {
    id: "2",
    type: "image",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/f66850f5-723f-41fd-84e8-29cb365f8c95.png?width=800",
    alt: "uae1"
  }
]

export const adds: CarouselSlide[] = [
  {
    id: "1",
    type: "video",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/1f148cdc-34a8-48c5-81ff-d4c4b789f173.mp4",
    alt: "soccer"
  },
  {
    id: "2",
    type: "image",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/e2e674e5-588b-4f7c-a86d-1eac28057c77.gif?width=800",
    alt: "grocery"
  },
  {
    id: "3",
    type: "video",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/49ee5f2b-350e-422c-bb64-d45c4cf0fec2.mp4",
    alt: "kibsons"
  },
  {
    id: "4",
    type: "image",
    src: "https://a.nooncdn.com/mp-onsite/images/img_eltd22qa-en_mb_uae-hero-01.gif?width=800",
    alt: "box"
  }
];

export const categoriesItems: categoryItems[] = [
  {
    id: "1",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/99f91df4-3b3a-4d7f-a801-c5705f77d6ab.png?width=800",
    alt: "deals"
  },
  {
    id: "2",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/ef486639-7b0a-404d-bea6-8520db7e7fc9.png?width=800",
    alt: "gaming"
  },
  {
    id: "3",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/0947a871-ee20-4c4f-9aa5-e75e70626b69.png?width=800",
    alt: "sports"
  },
  {
    id: "4",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/3e923962-d5ee-4c1b-9aa3-66fe51da7baa.png?width=800",
    alt: "gift cards"
  }
]