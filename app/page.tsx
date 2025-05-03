'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Image from "next/image";

export default function HomePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Počkáme, kým sa načíta stav autentifikácie
    if (!isLoading) {
      if (user) {
        router.replace('/products'); // Ak je prihlásený, presmeruj na produkty
      } else {
        router.replace('/login'); // Ak nie je prihlásený, presmeruj na login
      }
    }
  }, [user, isLoading, router]);

  // Zobrazíme loading indikátor, kým prebieha presmerovanie
  return (
    <div className="flex justify-center items-center h-screen">
      Načítavam...
    </div>
  );
}
