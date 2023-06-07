import { create } from 'zustand';

type Store = {
  isHiddenMenuOpen: boolean;
  isDonateModalOpen: boolean;
  closeHiddenMenu: () => void;
  toggleHiddenMenu: () => void;
  toggleDonateModal: () => void;
};

export const useStore = create<Store>((set) => ({
  isHiddenMenuOpen: false,
  isDonateModalOpen: false,
  closeHiddenMenu: () => set(() => ({ isHiddenMenuOpen: false })),
  toggleHiddenMenu: () => set((state) => ({ isHiddenMenuOpen: !state.isHiddenMenuOpen })),
  toggleDonateModal: () => set((state) => ({ isDonateModalOpen: !state.isDonateModalOpen })),
}));
