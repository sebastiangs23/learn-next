"use client";

import { useRef, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { useCategory } from "@/context/CategoryContext";
import { useCart } from "@/context/CartContext";
import type { ItemInt } from "@/components/categoryItems/items";

type ItemDetailsProps = {
  item: ItemInt;
  onBack?: () => void;
};

export default function ItemDetails({ item, onBack }: ItemDetailsProps) {
  const { selectedCategory } = useCategory();
  const { addToCart } = useCart();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const finalPrice = item.discount
    ? item.price - (item.price * item.discount) / 100
    : item.price;

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveImage(index);
  };

  const goToImage = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });

    setActiveImage(index);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Back */}
      <div className="flex items-center p-4">
        <button
          type="button"
          onClick={onBack}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
        >
          <BsChevronLeft className="text-xl text-black" />
        </button>
      </div>

      {/* Image carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex h-[320px] w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
      >
        {item.images.map((image, index) => (
          <div
            key={index}
            className="flex min-w-full snap-center items-center justify-center px-6"
          >
            <img
              src={image}
              alt={`${item.name}-${index}`}
              draggable={false}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Carousel dots */}
      <div className="mb-4 flex justify-center gap-1">
        {item.images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToImage(index)}
            className={`h-2 rounded-full transition-all ${
              activeImage === index ? "w-4 bg-black" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Store header */}
      <div className="mx-3 rounded-t-2xl bg-blue-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-blue-600">HYPERX</span>

          <button className="text-sm font-medium text-blue-600">
            Visit Store →
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="mx-3 rounded-b-2xl bg-white px-4 py-3 shadow-sm">
        <h1 className="text-[15px] font-medium leading-5 text-black">
          {item.name}
        </h1>

        {item.description && (
          <p className="mt-1 text-sm leading-5 text-gray-600">
            {item.description}
          </p>
        )}

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-black">
            {item.rate.toFixed(1)}
          </span>

          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <BsStarFill
                key={index}
                className={`text-sm ${
                  index < Math.round(item.rate)
                    ? "text-[#38ae04]"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <span className="text-sm font-medium text-blue-600 underline">
            21 Ratings
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span className="text-sm font-bold text-black">AED</span>

          <span className="text-2xl font-bold text-black">
            {finalPrice.toFixed(2)}
          </span>

          {item.discount && (
            <>
              <span className="text-sm text-gray-400 line-through">
                {item.price}
              </span>

              <span className="text-sm font-bold text-green-600">
                {item.discount}% OFF
              </span>
            </>
          )}
        </div>
      </div>

      {/* Bottom add to cart */}
      <div className="fixed bottom-16 left-0 right-0 z-50 flex gap-2 border-t border-gray-200 bg-white p-3 md:left-1/2 md:right-auto md:w-[430px] md:-translate-x-1/2">
        <div className="flex w-20 items-center justify-between rounded-xl border border-gray-200 px-2">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="text-lg font-bold text-black"
          >
            -
          </button>

          <div className="flex flex-col items-center">
            <span className="text-[10px] text-gray-400">QTY</span>
            <span className="text-sm text-black">{quantity}</span>
          </div>

          <button
            type="button"
            onClick={increaseQuantity}
            className="text-lg font-bold text-black"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={() => addToCart(item, quantity)}
          className="flex-1 rounded-xl bg-blue-600 py-4 text-sm font-bold text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
