import { create } from "zustand";

interface IStore {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  user: any;
  setUser: (user: any) => void;
}

export const useAuthStore = create<IStore>((set) => ({
  isAuth: false,
  user: null,
  setIsAuth: (isAuth) => set(() => ({ isAuth })),
  setUser: (user) => set(() => ({ user })),
}));
