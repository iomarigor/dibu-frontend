import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profile: null,
  setProfile: (profile) => set((state) => ({ ...state, profile })),
}));
