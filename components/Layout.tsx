'use client';

import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation'; // Použijeme useRouter z next/navigation
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  requireAuth?: boolean; // Voliteľný parameter na vynútenie prihlásenia
}

const Layout = ({ children, requireAuth = false }: LayoutProps) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  // Presunieme všetky useEffect na najvyššiu úroveň funkcie
  useEffect(() => {
    if (!isLoading) {
      // Redirect na login ak potrebujeme prihlásenie a používateľ nie je prihlásený
      if (requireAuth && !user) {
        router.push('/login');
      }
      
      // Redirect na produkty ak je používateľ prihlásený a je na login stránke
      if (user && typeof window !== 'undefined' && window.location.pathname === '/login') {
        router.push('/products');
      }
    }
  }, [user, isLoading, requireAuth, router]);

  // Počas načítavania stavu zobrazíme loading indikátor
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Načítavam...</div>;
  }

  // Ak stránka vyžaduje prihlásenie a používateľ nie je prihlásený,
  // zobrazíme loading indikátor, kým presmerovanie prebehne
  if (requireAuth && !user) {
    return <div className="flex justify-center items-center h-screen">Presmerovávam na prihlásenie...</div>;
  }

  // Ak je používateľ prihlásený a snaží sa dostať na /login,
  // zobrazíme loading indikátor, kým presmerovanie prebehne
  if (user && typeof window !== 'undefined' && window.location.pathname === '/login') {
    return <div className="flex justify-center items-center h-screen">Presmerovávam na produkty...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {user && <Header />} {/* Zobrazíme Header len ak je používateľ prihlásený */} 
      <main className="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 