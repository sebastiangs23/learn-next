"use client";

import { useContext, createContext, useState } from "react";
import type { Address, AddressContextType } from "@/types/interfaces/user/user";

export const AddressContext = createContext<AddressContextType | undefined>(
  undefined,
);

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<Address>({
    id: 1,
    place: "Yas Island, Abu Dhabi",
    number: "Apt A123",
    phone: "+971523328967",
    user: "Sebastián Gómez",
  });

  const addAddress = (newAddress: Omit<Address, "id">) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      ...newAddress,
    }));
  };

  const deleteAddress = (id: number) => {
    console.log("delete address", id);
  };

  return (
    <AddressContext.Provider value={{ address, addAddress, deleteAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error("useAddress must be used within an AddressProvider");
  }

  return context;
};