import { create } from "zustand";
import { IAuthStore } from "../types/authStore";

const useAuth = create<IAuthStore>((set) => ({
  user: null,
  signIn: (user) => set({ user }),
  signOut: () => set({ user: null }),
}));
export default useAuth;
