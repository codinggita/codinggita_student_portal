import { create } from "zustand";
import axios from "axios";

export const authStore = create((set, get) => ({
    user: JSON.parse(localStorage.getItem("user")) || null, // Get stored user
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),

    // 🔹 Register and Auto-Login
    register: async (name, email, password) => {
        try {
            const res = await axios.post("http://localhost:8080/auth/register", { name, email, password });
            const { token, User } = res.data;

            // Store token and user data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(User)); // Store user in localStorage

            set(() => ({
                user: User,  // Store actual user object
                token: token,
                isAuthenticated: true,
            }));

            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.error || "Registration failed" };
        }
    },

    // 🔹 Login
    login: async (email, password) => {
        try {
            const res = await axios.post("http://localhost:8080/auth/login", { email, password });
            const { token, User } = res.data;

            // Store token and user data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(User));

            set(() => ({
                user: User,  // Store actual user object
                token: token,
                isAuthenticated: true
            }));

            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.error || "Login failed" };
        }
    },

    // 🔹 Logout
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user"); // Remove user data
        set({ user: null, token: null, isAuthenticated: false });
    }
}));
