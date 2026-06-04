import { Category } from "@/types/interfaces/categories/categories";
import { CarouselSlide } from "@/types/interfaces/adds/adds";
import {
  CategoryItem,
  Item,
} from "@/types/interfaces/categoryItems/categoryItems";

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

export const categoriesItems: CategoryItem[] = [
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
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/f2cff926-7c78-4fbf-bd6d-12b4720c1441.png?width=800",
    alt: "wearables",
  },
  {
    id: "13",
    name: "Television",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/6ed258cb-cc55-4bc5-9a82-bbf4b8680d8f.png?width=800",
    alt: "television",
  },
  {
    id: "14",
    name: "Clearance Store",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/74b9c4da-bdfb-49d5-a80e-c31071d91e22.png?width=800",
    alt: "clearance store",
  },
  {
    id: "15",
    name: "Fagrances",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/5f412a24-3674-41d5-8bb7-8a0e8eac2e9a.png?width=800",
    alt: "fragances",
  },
  {
    id: "16",
    name: "Camera",
    image:
      "https://a.nooncdn.com/mpcms/EN0001/assets/7913a408-36f8-4a80-933f-39650032b1d7.png?width=800",
    alt: "camera",
  },
];

export const bestSellingItems: Item[] = [
  {
    id: "1",
    name: "onikuma GS5 Mechanic Gaming",
    description:
      "G55 Mechanical Gaming Keyboard,61 Keys Ultral Compact Wired Keyboard with RGB Backlit,Easy to Carry on Business Trip,for PC/Mac Gamer",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z59AB83D936BA00686777Z/45/1767809152/34d4306e-b4fc-43f7-b95a-e890d188c31b.jpg",
      "https://f.nooncdn.com/p/pzsku/Z59AB83D936BA00686777Z/45/_/1724828365/f67cf3a7-c7c9-42f3-a948-d0c208cdeb46.jpg",
      "https://f.nooncdn.com/p/pzsku/Z59AB83D936BA00686777Z/45/_/1724828375/81c6e2d4-60bb-4845-bf9d-47d24fb59679.jpg",
      "https://f.nooncdn.com/p/pzsku/Z59AB83D936BA00686777Z/45/_/1724828385/f12dfa29-31bf-4aab-b032-f8e5fb9bc985.jpg",
      "https://f.nooncdn.com/p/pzsku/Z59AB83D936BA00686777Z/45/_/1724828387/4a243e97-4f4c-47ac-90b0-14481bd326a5.jpg",
      "https://f.nooncdn.com/p/pzsku/Z59AB83D936BA00686777Z/45/_/1724828718/3d92527a-af51-403f-8c4b-1e60110191c0.jpg",
      "https://f.nooncdn.com/p/pzsku/Z59AB83D936BA00686777Z/45/_/1724828719/9fd37566-4a6c-4510-a329-2f927f746076.jpg",
    ],
    price: 150,
    discount: 50,
    rate: 4.0,
  },
  {
    id: "2",
    name: "Rock Pow 60% Wired",
    description:
      "60% Wired Gaming Keyboard, RGB Backlit Ultra-Compact Mini Keyboard, Waterproof Small Compact 61 Keys Keyboard for PC/Mac Gamer, Typist, Travel, Easy to Carry on Business Trip",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z29590E34DCAACF7E634CZ/45/1746192466/dc9155b6-838e-436e-bb87-6096639786f5.jpg",
      "https://f.nooncdn.com/p/pzsku/Z29590E34DCAACF7E634CZ/45/1746192466/d1d95b09-9a7b-41ba-92b2-135495b249a3.jpg",
      "https://f.nooncdn.com/p/pzsku/Z29590E34DCAACF7E634CZ/45/1746192466/b1edb164-a753-4f10-bd87-6a250db03936.jpg",
      "https://f.nooncdn.com/p/pzsku/Z29590E34DCAACF7E634CZ/45/1746192466/2d2b10e7-c607-4cf0-967f-6a4cb5349616.jpg",
      "https://f.nooncdn.com/p/pzsku/Z29590E34DCAACF7E634CZ/45/1746192466/75726da9-6e41-4084-9308-b112d669e935.jpg",
      "https://f.nooncdn.com/p/pzsku/Z29590E34DCAACF7E634CZ/45/1746192467/1ba44b64-ddf9-4314-a1f9-db48a6bd6480.jpg",
      "https://f.nooncdn.com/p/pzsku/Z29590E34DCAACF7E634CZ/45/1746192466/7a309553-ce4c-4ba5-8362-14dff40f4d90.jpg",
    ],
    price: 190,
    discount: 63,
    rate: 4.2,
  },
  {
    id: "3",
    name: "AULA F75 75%",
    description:
      "F75 75% Gaming Keyboard,Wireless Mechanical Keyboard, Hot Swappable Creamy Keyboard, Pre-lubed Greywood Switches RGB Backlit Gaming Keyboards, 3Modes (2.4GHz/Type-C/BT5.0)White/Blue",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z4A5E2EF2E7B98FB03076Z/45/1746602072/4c7f1e61-6b43-440f-b11b-e2607d66e252.jpg",
      "https://f.nooncdn.com/p/pzsku/Z4A5E2EF2E7B98FB03076Z/45/1746602122/13d69c10-6598-42d5-a73f-19a906e78168.jpg",
      "https://f.nooncdn.com/p/pzsku/Z4A5E2EF2E7B98FB03076Z/45/1746602578/e8689fd0-ba4b-4e5f-af07-2206342a155a.jpg",
      "https://f.nooncdn.com/p/pzsku/Z4A5E2EF2E7B98FB03076Z/45/1746602578/aafe1a76-acd2-4612-814c-da72b5e5ad40.jpg",
      "https://f.nooncdn.com/p/pzsku/Z4A5E2EF2E7B98FB03076Z/45/1746602580/9d396ef2-4e3b-4703-81f9-a76039001a30.jpg",
      "https://f.nooncdn.com/p/pzsku/Z4A5E2EF2E7B98FB03076Z/45/1746602690/1c5ceab6-cd64-4c7a-9159-3247b99f4a0a.jpg",
      "https://f.nooncdn.com/p/pzsku/Z4A5E2EF2E7B98FB03076Z/45/1746602690/76e7c722-c726-4234-a4d4-0fb272363054.jpg",
    ],
    price: 299,
    discount: 20,
    rate: 4.9,
  },
  {
    id: "4",
    name: "Anker 25000 mAh Power Bank",
    description:
      "25,000mAh 165W Ultra-Fast Portable Charger for Dual Laptops, Fast Charging Battery Pack with Built-In and Retractable Cables, for iPhone 17/16 Series, Samsung, and more Black",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z47BFA7D20DBBC578F76EZ/45/_/1778042621/738f1af3-105d-422f-9db0-b9c2fca01c39.jpg",
      "https://f.nooncdn.com/p/pzsku/Z47BFA7D20DBBC578F76EZ/45/_/1778042621/db486c60-6774-410e-a983-4dabd1241c66.jpg",
      "https://f.nooncdn.com/p/pzsku/Z47BFA7D20DBBC578F76EZ/45/_/1778042621/c75f2c69-2897-4945-ba07-3ada807f5731.jpg",
      "https://f.nooncdn.com/p/pzsku/Z47BFA7D20DBBC578F76EZ/45/_/1778042621/650abc6f-7d66-426d-8e99-ced4b9bd5add.jpg",
      "https://f.nooncdn.com/p/pzsku/Z47BFA7D20DBBC578F76EZ/45/_/1778042621/43e61e5a-6075-4a75-9281-2f30d227acb0.jpg",
    ],
    price: 499,
    discount: 36,
    rate: 4.6,
  },
  {
    id: "5",
    name: "Soundcore P30i Noise Cancelling Earbuds",
    description:
      "P30i by Anker Noise Cancelling Earbuds, Strong and Smart Noise Cancelling, Powerful Bass, 45H Playtime, 2-in-1 Case and Phone Stand, IP54, Wireless Earbuds, Bluetooth 5.4, App Control Blue",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZCEA65FD3CDB265037FB5Z/45/_/1780467454/548f3781-2083-44c1-8c24-969ea423581e.jpg",
      "https://f.nooncdn.com/p/pzsku/ZCEA65FD3CDB265037FB5Z/45/_/1780467454/d5703ced-a3de-447d-aec7-aa20d12c7647.jpg",
      "https://f.nooncdn.com/p/pzsku/ZCEA65FD3CDB265037FB5Z/45/_/1780467455/a2cdbce5-e467-4536-a45f-a0e482235a98.jpg",
      "https://f.nooncdn.com/p/pzsku/ZCEA65FD3CDB265037FB5Z/45/_/1780467455/c08c3400-de96-4a73-af96-9b252d264d81.jpg",
      "https://f.nooncdn.com/p/pzsku/ZCEA65FD3CDB265037FB5Z/45/_/1780467455/f5541aaa-949d-4a32-9550-e53820f4d3d8.jpg",
    ],
    price: 179,
    discount: 53,
    rate: 4.4,
  },
  {
    id: "6",
    name: "Ugreen 6 IN 1 Power Strip",
    description:
      "6 IN 1 Power Strip Extension Plug with Multiple 3 AC Outlet Sockets, USB-C Fast Charger, 3 USB Ports, Triple UK Plug Extender, USB Charging Station and Surge Protector for Kitchen, Home Office Accessories Black",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z1959B92F26E99F697651Z/45/1762951131/8a57a83a-5f78-486c-99e7-f2a3cf4a1479.jpg",
      "https://f.nooncdn.com/p/pzsku/Z1959B92F26E99F697651Z/45/1761032727/c3d90628-b2a6-4659-95b4-7e25cc9c3eff.jpg",
      "https://f.nooncdn.com/p/pzsku/Z1959B92F26E99F697651Z/45/1761032728/5a1a39e6-7bc0-4220-a18a-1cff76a5d9f2.jpg",
      "https://f.nooncdn.com/p/pzsku/Z1959B92F26E99F697651Z/45/1761032727/cc6a3b62-9142-4d44-918d-f97d5cbceac4.jpg",
      "https://f.nooncdn.com/p/pzsku/Z1959B92F26E99F697651Z/45/1761032727/5652e5dc-9960-4934-ae4b-b38651f2b8e3.jpg",
    ],
    price: 99,
    discount: 30,
    rate: 4.8,
  },
  {
    id: "7",
    name: "Soundcore Select 4 Go Bluetooth Speaker",
    description:
      "Soundcore Select 4 Go Bluetooth Speaker by Anker, Portable, Up to 20H Playtime, IP67 Waterproof and Dustproof, Floatable, Powerful Sound, Ideal for Indoors and Outdoors Green",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZE21784FF5E5313F2CEC9Z/45/_/1780466852/6b96eae0-52e3-4b40-9093-ebc15263f658.jpg",
      "https://f.nooncdn.com/p/pzsku/ZE21784FF5E5313F2CEC9Z/45/_/1780466852/e7674e7c-6348-492f-8b5d-92e466f77450.jpg",
      "https://f.nooncdn.com/p/pzsku/ZE21784FF5E5313F2CEC9Z/45/_/1780466852/20bd115b-72b5-4e30-a751-0dc1ef846fcd.jpg",
      "https://f.nooncdn.com/p/pzsku/ZE21784FF5E5313F2CEC9Z/45/_/1780466852/71f55616-28a4-41d0-a2cd-4c33a405f4fa.jpg",
      "https://f.nooncdn.com/p/pzsku/ZE21784FF5E5313F2CEC9Z/45/_/1780466851/181790a0-d9aa-4647-9bb3-cfcd2afa4d5c.jpg",
    ],
    price: 199,
    discount: 57,
    rate: 4.6,
  },
  {
    id: "8",
    name: "Apple 20W USB-C Power Adapter",
    description:
      "20W USB-C 3-Pin Power Adapter White, compatible with USB-C enabled devices and designed for fast charging performance",
    images: [
      "https://f.nooncdn.com/p/pzsku/ZD577C6DA00C9EC2FEE80Z/45/_/1779093906/0cc20ec2-59c8-45f5-b946-2d7f5495dbb0.jpg",
      "https://f.nooncdn.com/p/pzsku/ZD577C6DA00C9EC2FEE80Z/45/_/1779093905/390fb4df-e9f2-4515-af79-7a08b1baf5d2.jpg",
      "https://f.nooncdn.com/p/pzsku/ZD577C6DA00C9EC2FEE80Z/45/_/1779093905/b0b59e95-9071-4f6d-ae31-1ebd919ccfe9.jpg",
      "https://f.nooncdn.com/p/pzsku/ZD577C6DA00C9EC2FEE80Z/45/_/1779093905/23f38374-f0ff-4fc7-be68-4878f1b0d4f5.jpg",
      "https://f.nooncdn.com/p/pzsku/ZD577C6DA00C9EC2FEE80Z/45/_/1779093906/3f031651-d6d7-4f8d-9c3f-c6d04096996d.jpg",
    ],
    price: 79,
    discount: 28,
    rate: 4.2,
  },
  {
    id: "9",
    name: "GROIC Wired Gaming Keyboard",
    description: "",
    images: [
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094903/6ba4f08c-d27b-4a6c-a5dd-1b0349f5d9e9.jpg",
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094904/0b7c659a-ba62-4b91-83ce-582a8bc6a0a7.jpg",
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094904/af393a8b-f760-4be7-b661-6542e0415689.jpg",
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094905/1a30ac6f-819c-43f2-8108-6bb7feaaa39c.jpg",
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094904/9e423774-6865-4b9e-8eba-b60d231bb807.jpg",
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094903/940739e3-b1f7-48af-9833-7ee850ff340e.jpg",
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094902/3fbbcbbb-333d-4f8c-a924-c33675630e46.jpg",
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094903/c82d8c5b-c60b-44c1-a0c6-f7138882fe95.jpg",
      "https://f.nooncdn.com/p/pzsku/Z056E12ECEEA736D374BBZ/45/_/1779094903/fb9cfaf5-78a6-4a72-b264-cc168f93e79c.jpg",
    ],
    price: 200,
    discount: 79,
    rate: 4.0,
  },
];
