"use client";

import { CategorySelectedProvider } from "@/context/CategoryContext";
import { AddressProvider } from "@/context/userContext";
import { CartProvider } from "@/context/CartContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CategorySelectedProvider>
      <AddressProvider>
        <CartProvider>{children}</CartProvider>
      </AddressProvider>
    </CategorySelectedProvider>
  );
}
