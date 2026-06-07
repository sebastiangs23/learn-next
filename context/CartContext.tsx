"use client";

import { createContext, useContext, useState } from "react";
import type { ItemInt } from "@/components/categoryItems/items";

export type CartItem = {
  item: ItemInt;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: ItemInt, quantity: number) => void;
  cartCount: number;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: ItemInt, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.item.id === item.id,
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.item.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem,
        );
      }

      return [...prevItems, { item, quantity }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.item.id !== itemId),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0,
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
