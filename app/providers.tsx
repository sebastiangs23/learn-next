"use client";

import { CategorySelectedProvider } from "@/context/CategoryContext";
import { AddressProvider } from "@/context/userContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CategorySelectedProvider>
      <AddressProvider>{children}</AddressProvider>
    </CategorySelectedProvider>
  );
}