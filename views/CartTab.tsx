"use client";

import { useState } from "react";
import Location from "@/components/location/location";
import LocationModal from "@/components/modals/locationModal";
import { useCart } from "@/context/CartContext";

const cartImage =
  "https://a.nooncdn.com/mpcms/EN0001/assets/57fa15e9-df7d-456e-8f6d-330846baf801.png?width=2400";

type CartTabProps = {
  redirectHome: () => void;
};

export default function CartTab({ redirectHome }: CartTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useCart();

  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen bg-white pb-20">
      {isModalOpen && <LocationModal onClose={() => setIsModalOpen(false)} />}

      <Location onOpen={setIsModalOpen} />

      {isCartEmpty ? (
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
      ) : (
        <div className="px-4 py-4">
          <h2 className="mb-4 text-xl font-bold text-black">Cart</h2>

          <div className="flex flex-col gap-3">
            {cartItems.map((cartItem) => {
              const finalPrice = cartItem.item.discount
                ? cartItem.item.price -
                  (cartItem.item.price * cartItem.item.discount) / 100
                : cartItem.item.price;

              return (
                <div
                  key={cartItem.item.id}
                  className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
                >
                  <img
                    src={cartItem.item.images[0]}
                    alt={cartItem.item.name}
                    className="h-20 w-20 rounded-xl object-contain bg-gray-50"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="line-clamp-2 text-sm font-medium text-black">
                        {cartItem.item.name}
                      </h3>

                      {cartItem.item.description && (
                        <p className="line-clamp-1 text-xs text-gray-500">
                          {cartItem.item.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-black">
                          AED
                        </span>{" "}
                        <span className="text-base font-bold text-black">
                          {finalPrice.toFixed(2)}
                        </span>
                      </div>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                        QTY {cartItem.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl bg-gray-50 p-4">
            <div className="flex items-center justify-between text-black">
              <span className="font-medium">Total items</span>
              <span className="font-bold">
                {cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}