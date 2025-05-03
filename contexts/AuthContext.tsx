'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (token: string, username?: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Načítanie stavu z localStorage

  useEffect(() => {
    // Skúsi načítať token z localStorage pri štarte
    try {
      const storedToken = localStorage.getItem('authToken');
      if (storedToken) {
        // Tu by v reálnej app bola validácia tokenu na serveri
        setUser({ token: storedToken });
      }
    } catch (error) {
        console.error("Failed to access localStorage:", error)
    } finally {
        setIsLoading(false);
    }

  }, []);

  const login = (token: string, username?: string) => {
    const newUser: User = { token, username };
    setUser(newUser);
    try {
      localStorage.setItem('authToken', token);
    } catch (error) {
        console.error("Failed to save token to localStorage:", error)
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('authToken');
    } catch (error) {
        console.error("Failed to remove token from localStorage:", error)
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 