import { ICartItem } from "@api/cart";
import { create } from "zustand";

interface IStore {
  cartItems: ICartItem[];
  totalPrice: number;
  totalSales: number;
  setCart: (cartItems: ICartItem[]) => void;
  recalculateTotals: (cartItems: ICartItem[]) => void;
}

export const useCartStore = create<IStore>((set) => ({
  cartItems: [],
  totalPrice: 0,
  totalSales: 0,
  setCart: (cartItems) => set(() => ({ cartItems })),
  recalculateTotals: (cartItems) => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const totalSales = cartItems.reduce(
      (sum, item) =>
        sum + (item.product.originalPrice - item.product.price) * item.quantity,
      0
    );
    set({ cartItems, totalPrice, totalSales });
  },
}));
