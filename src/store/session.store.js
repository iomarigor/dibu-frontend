import { create } from "zustand";

export const sessionStore = create((set) => ({
  session: null,
  setSession: (status) => set((status) => ({ session: !status.session })),
  removeSession: () => set({ session: null }),
}));
