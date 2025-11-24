import { create } from "zustand";

interface ShowEntryState {
  showEntry: boolean;
  setShowEntry: (show: boolean) => void;
}

export const useShowEntry = create<ShowEntryState>()((set) => ({
  showEntry: true,
  setShowEntry: (show: boolean) => set({ showEntry: show }),
}));

export default useShowEntry;
