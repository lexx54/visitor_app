import { create } from "zustand";
import { IAuthStore } from "../types/authStore";

const useAuth = create<IAuthStore>((set) => ({
  user: null,
  signIn: (user) => {
    localStorage.setItem("userAuth", JSON.stringify(user));
    set({ user });
  },
  signOut: () => {
    localStorage.removeItem("userAuth");
    set({ user: null });
  },
}));
export default useAuth;
