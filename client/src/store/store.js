import { create } from "zustand";
import axios from "../lib/axios"; // Use the Axios instance

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  login: async ({email,password}) => {
    set({ loading: true });
    try {
      const res = await axios.post("/users/login", { email,password });
      set({ user: res.data, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || "Login failed", loading: false });
    }
  },

  checkAuth: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("/check-auth"); // Example endpoint to check if the user is authenticated
      set({ user: res, loading: false });
    } catch (err) {
      set({ user: null, loading: false });
    }
  },

  logout: () => {
    axios.post("/logout");
    set({ user: null });
  },
}));

export default useAuthStore;
