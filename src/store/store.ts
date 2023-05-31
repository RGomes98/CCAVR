import { create } from 'zustand';

type Store = {
  isHiddenMenuOpen: boolean;
  closeHiddenMenu: () => void;
  toggleHiddenMenu: () => void;

  isDonateModalOpen: boolean;
  toggleDonateModal: () => void;
};

export const useStore = create<Store>((set) => ({
  isHiddenMenuOpen: false,
  closeHiddenMenu: () => set(() => ({ isHiddenMenuOpen: false })),
  toggleHiddenMenu: () => set((state) => ({ isHiddenMenuOpen: !state.isHiddenMenuOpen })),

  isDonateModalOpen: false,
  toggleDonateModal: () => set((state) => ({ isDonateModalOpen: !state.isDonateModalOpen })),
}));
