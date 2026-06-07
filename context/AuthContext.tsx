"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  users: User[];
  login: (email: string) => boolean;
  signup: (name: string, email: string) => boolean;
  logout: () => void;
  updateUserName: (name: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const isValidEmail = (email: string) => {
  return email.includes("@") && email.endsWith(".com");
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [users, setUsers] = useState<User[]>(() => {
    if (typeof window === "undefined") return [];

    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const login = (email: string) => {
    if (!isValidEmail(email)) {
      toast("Please enter a valid email with @ and .com");
      return false;
    }

    const existingUser = users.find((u) => u.email === email);

    if (!existingUser) {
      toast("User not found. Please sign up first.");
      return false;
    }

    setUser(existingUser);
    localStorage.setItem("user", JSON.stringify(existingUser));
    toast("Logged in successfully");

    return true;
  };

  const signup = (name: string, email: string) => {
    if (!isValidEmail(email)) {
      toast("Please enter a valid email with @ and .com");
      return false;
    }

    const emailExists = users.some((u) => u.email === email);

    if (emailExists) {
      toast("This email is already registered");
      return false;
    }

    const newUser = { name, email };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    setUser(newUser);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    toast("Account created successfully");

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast("Signed out successfully");
  };

  const updateUserName = (name: string) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      name,
    };

    const updatedUsers = users.map((savedUser) =>
      savedUser.email === user.email ? updatedUser : savedUser,
    );

    setUser(updatedUser);
    setUsers(updatedUsers);

    localStorage.setItem("user", JSON.stringify(updatedUser));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast("Name updated successfully");
  };

  return (
    <AuthContext.Provider value={{ user, users, login, signup, updateUserName, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
