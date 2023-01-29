import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../interfaces/product";

type State = {
  productInCart: Product[];
};

type Actions = {
  addProductInCart: (newItem: Product, itemInCart: Product) => void;
  removeAllFromCart: (id: number) => void;
  removeOneFromCart: (id: number, itemToDelete: Product) => void;
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

      removeAllFromCart: (id: number) =>
        set((state) => ({
          ...state,
          productInCart: state.productInCart.filter((item) => item.id !== id),
        })),

      removeOneFromCart: (id: number, itemToDelete: Product) => {
        return itemToDelete.quantity > 1
          ? set((state) => ({
              ...state,
              productInCart: state.productInCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              ),
            }))
          : set((state) => ({
              ...state,
              productInCart: state.productInCart.filter(
                (item) => item.id !== id
              ),
            }));
      },
    }),
    {
      name: "productCart",
    }
  )
);
