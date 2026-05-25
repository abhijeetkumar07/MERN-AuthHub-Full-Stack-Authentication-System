import { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import api from "../utils/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const { data } = await api.get("/auth/me");
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const login = async (payload) => {
    const { data } = await api.post("/auth/login", payload);
    setUser(data.user);
    toast.success("Welcome back to AuthVerse");
    return data.user;
  };

  const register = async (payload) => {
    const { data } = await api.post("/auth/register", payload);
    setUser(data.user);
    toast.success("Your AuthVerse identity is live");
    return data.user;
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
    toast.success("Signed out securely");
  };

  const updateProfile = async (payload) => {
    const { data } = await api.put("/auth/profile", payload);
    setUser(data.user);
    toast.success("Profile updated");
    return data.user;
  };

  const value = useMemo(() => ({
    user,
    loading,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout,
    updateProfile,
    refreshUser: fetchProfile,
  }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
