import { create } from "zustand";

interface ModalStore {
  authModalVisible: boolean;
  setAuthModalVisible: (authModalVisible: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  authModalVisible: false,
  setAuthModalVisible: (authModalVisible: boolean) =>
    set(() => ({ authModalVisible })),
}));
