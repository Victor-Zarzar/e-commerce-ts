import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "./app/types/ProductType";

type CartState = {
  useCartStore: any;
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: string) => void;
  isOpen: boolean;
  toggleCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
    cart: [],
    isOpen: false,
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  }),
  { name: 'cart-storage'}
  )
);
