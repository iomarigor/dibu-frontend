import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSessionStore = create(
  persist(
    (set) => ({
      isAuth: false,
      token: null,
      setSession: (token, isAuth) =>
        set((state) => ({ ...state, token, isAuth })),
    }),
    { name: "session", blacklist: ["profile"], whitelist: ["isAuth", "token"] }
  )
);
