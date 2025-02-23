import { IFavourite } from "@api/favourites";
import { create } from "zustand";

interface IStore {
  favourites: IFavourite[];
  setFavourites: (favourites: IFavourite[]) => void;
}

export const useFavouritesStore = create<IStore>((set) => ({
  favourites: [],
  setFavourites: (favourites) => set(() => ({ favourites })),
}));
