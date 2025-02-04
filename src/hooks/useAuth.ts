import { create } from "zustand";
import api from "../services/api";

interface AuthState {
  user: { email: string; role: string } | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: true,

  checkAuth: async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const { data } = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        set({ user: data });
      }
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (email: string, password: string) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      set({ user: data.user });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
