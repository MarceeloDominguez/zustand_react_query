import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  productFavotite: number[];
};

type Actions = {
  addFavoriteProducts: (id: number) => void;
  removeFavoriteProducts: (id: number) => void;
};

export const useFavoriteProductsStore = create(
  persist<State & Actions>(
    (set) => ({
      productFavotite: [],
      addFavoriteProducts: (id: number) =>
        set((state) => ({ productFavotite: [...state.productFavotite, id] })),

      removeFavoriteProducts: (id: number) => {
        set((state) => ({
          productFavotite: state.productFavotite.filter((item) => item !== id),
        }));
      },
    }),
    {
      name: "productsFavorites",
    }
  )
);
