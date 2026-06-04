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
    alt: "uae",
  },
  {
    id: "2",
    type: "image",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/f66850f5-723f-41fd-84e8-29cb365f8c95.png?width=800",
    alt: "uae1",
  },
];

export const adds: CarouselSlide[] = [
  {
    id: "1",
    type: "video",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/1f148cdc-34a8-48c5-81ff-d4c4b789f173.mp4",
    alt: "soccer",
  },
  {
    id: "2",
    type: "image",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/e2e674e5-588b-4f7c-a86d-1eac28057c77.gif?width=800",
    alt: "grocery",
  },
  {
    id: "3",
    type: "video",
    src: "https://a.nooncdn.com/mpcms/EN0001/assets/49ee5f2b-350e-422c-bb64-d45c4cf0fec2.mp4",
    alt: "kibsons",
  },
  {
    id: "4",
    type: "image",
    src: "https://a.nooncdn.com/mp-onsite/images/img_eltd22qa-en_mb_uae-hero-01.gif?width=800",
    alt: "box",
  },
];

export const categoriesItems: categoryItems[] = [
  {
    id: "1",
    name: "Mobiles",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/f4d00f29-592e-4fba-a757-4a952927d7ca.png?width=800",
    alt: "Mobiles",
  },
  {
    id: "2",
    name: "Gaming",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/ef486639-7b0a-404d-bea6-8520db7e7fc9.png?width=800",
    alt: "gaming",
  },
  {
    id: "3",
    name: "Sports & Fitness",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/0947a871-ee20-4c4f-9aa5-e75e70626b69.png?width=800",
    alt: "sports",
  },
  {
    id: "4",
    name: "Personal care",
    image:
    "https://a.nooncdn.com/mpcms/EN0001/assets/9eaafade-31b2-4404-862c-ebefda9eca09.png?width=800",
    alt: "personal care",
  },
  {
    id: "5",
    name: "Global Store",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/75dfd592-2737-4ef8-9437-9f73a58c4eba.gif?width=800",
    alt: "global store",
  },
  {
    id: "6",
    name: "Grocery",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/4e542ac8-9bbe-42b9-ba6d-729221063044.png?width=800",
    alt: "grocery",
  },
  {
    id: "7",
    name: "Digital Cards",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/4e542ac8-9bbe-42b9-ba6d-729221063044.png?width=800",
    alt: "digital cards",
  },
  {
    id: "8",
    name: "Laptops & Desktops",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/1d223bf2-9d6f-4351-afb6-29c578f63eb8.png?width=800",
    alt: "laptops and desktop",
  },
  {
    id: "9",
    name: "Health & Nutrition",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/1d223bf2-9d6f-4351-afb6-29c578f63eb8.png?width=800",
    alt: "health and nutrition",
  },
  {
    id: "10",
    name: "Deals",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/99f91df4-3b3a-4d7f-a801-c5705f77d6ab.png?width=800",
    alt: "deals",
  },
  {
    id: "11",
    name: "Gift Cards",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/3e923962-d5ee-4c1b-9aa3-66fe51da7baa.png?width=800",
    alt: "gift cards",
  },
  {
    id: "12",
    name: "Wearables",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/f2cff926-7c78-4fbf-bd6d-12b4720c1441.png?width=800",
    alt: "wearables"
  },
  {
    id: "13",
    name: "Television",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/6ed258cb-cc55-4bc5-9a82-bbf4b8680d8f.png?width=800",
    alt: "television"
  },
  {
    id: "14",
    name: "Clearance Store",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/74b9c4da-bdfb-49d5-a80e-c31071d91e22.png?width=800",
    alt: "clearance store"
  },
  {
    id: "15",
    name: "Fagrances",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/5f412a24-3674-41d5-8bb7-8a0e8eac2e9a.png?width=800",
    alt: "fragances"
  },
  {
    id: "16",
    name: "Camera",
    image: "https://a.nooncdn.com/mpcms/EN0001/assets/7913a408-36f8-4a80-933f-39650032b1d7.png?width=800",
    alt: "camera"
  }
];
