"use client";

import { useState } from "react";
import Location from "@/components/location/location";
import LocationModal from "@/components/modals/locationModal";
import { useCart } from "@/context/CartContext";
import { BsTrash } from "react-icons/bs";

const cartImage =
  "https://a.nooncdn.com/mpcms/EN0001/assets/57fa15e9-df7d-456e-8f6d-330846baf801.png?width=2400";

type CartTabProps = {
  redirectHome: () => void;
};

export default function CartTab({ redirectHome }: CartTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart } = useCart();

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
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">Cart</h2>

            <button
              type="button"
              onClick={clearCart}
              className="text-sm font-bold text-red-500"
            >
              Clear cart
            </button>
          </div>

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
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="line-clamp-2 text-sm font-medium text-black">
                        {cartItem.item.name}
                      </h3>

                      <button
                        type="button"
                        onClick={() => removeFromCart(cartItem.item.id)}
                        className="shrink-0 text-red-500"
                      >
                        <BsTrash />
                      </button>
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
                {cartItems.reduce(
                  (total, cartItem) => total + cartItem.quantity,
                  0,
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
