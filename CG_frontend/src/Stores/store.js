import { create } from "zustand";
import axios from "axios";





export const authStore = create((set, get) => ({

    user: null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),


    // 🔹 Register and Auto-Login
    register: async (name, email, password) => {
        try {
            const res = await axios.post("http://localhost:8080/auth/register", { name, email, password });
            const { token, user } = res.data;

            // Store token and update state
            localStorage.setItem("token", token);
            set({ user, token, isAuthenticated: true });

            return { success: true };
        } catch (error) {
            
            return { success: false, message: error.response?.data?.error || "Registration failed" };
        }
    },

    login: async (email, password) => {
        try {
            const res = await axios.post("http://localhost:8080/auth/login", { email, password });
            const { token, user } = res.data;

            // Store token and update state
            localStorage.setItem("token", token);
            set({ user, token, isAuthenticated: true });

            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.error || "Registration failed" };
        }
    },


    // 🔹 Logout
    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, token: null, isAuthenticated: false });
    }


}))