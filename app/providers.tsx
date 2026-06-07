"use client";

import { CategorySelectedProvider } from "@/context/CategoryContext";
import { AddressProvider } from "@/context/userContext";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CategorySelectedProvider>
      <AddressProvider>
        <CartProvider>
          <AuthProvider>{children}</AuthProvider>
        </CartProvider>
      </AddressProvider>
    </CategorySelectedProvider>
  );
}
