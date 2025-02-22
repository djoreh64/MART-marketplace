import { create } from "zustand";

interface IStore {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<IStore>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth) => set((state) => ({ isAuth })),
}));
