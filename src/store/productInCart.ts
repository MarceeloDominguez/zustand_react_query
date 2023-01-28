import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../interfaces/product";

type State = {
  productInCart: Product[];
};

type Actions = {
  addProductInCart: (newItem: Product, itemInCart: Product) => void;
};

export const useProductInCart = create(
  persist<State & Actions>(
    (set) => ({
      productInCart: [],

      addProductInCart: (newItem: Product, itemInCart: Product) => {
        return itemInCart
          ? set((state) => ({
              ...state,
              productInCart: state.productInCart.map((item) =>
                item.id === newItem?.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }))
          : set((state) => ({
              ...state,
              productInCart: [
                ...state.productInCart,
                { ...newItem, quantity: 1 },
              ],
            }));
      },
    }),
    {
      name: "productCart",
    }
  )
);
