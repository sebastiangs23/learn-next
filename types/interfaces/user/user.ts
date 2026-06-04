export interface Address {
    id: number;
    place: string;
    number: string;
    phone: string;
    user: string;
}

export type AddressContextType = {
  address: Address[];
  addAddress: (newAddress: Omit<Address, "id">) => void;
  deleteAddress: (id: number) => void;
};