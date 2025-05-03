'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        // Ak je chyba 401 (Unauthorized), zobrazíme používateľsky prívetivejšiu správu
        if (response.status === 401) {
          throw new Error('Prihlásenie do účtu bolo nesprávne');
        } else {
          // Pre iné chyby zachováme pôvodné správanie
          let errorMessage = `Prihlásenie zlyhalo (stav: ${response.status})`;
          try {
            const errorData = await response.json();
            errorMessage = errorData?.msg || errorData?.message || errorMessage;
          } catch (jsonError) {
            // Ignorujeme chybu pri parsovaní JSON, použijeme pôvodnú správu
          }
          throw new Error(errorMessage);
        }
      }

      const data = await response.json();
      if (data.token) {
        login(data.token, username); // Uložíme token a username
        router.push('/products'); // Presmerujeme na produkty po úspešnom prihlásení
      } else {
        throw new Error('Neplatná odpoveď servera.');
      }
    } catch (err: any) {
      setError(err.message || 'Vyskytla sa neznáma chyba.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="bg-gray-100 p-4 border-b border-gray-200">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/gymbeam-logo.png" alt="GymBeam Logo" width={150} height={41} className="h-auto sm:w-[200px]" priority />
          </Link>
          <div className="text-black font-medium text-sm sm:text-base">
            Zavolajte nám <a href="tel:02-33-057-087"><span className="text-[#ff5500] font-bold">02 33 057 087</span></a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto p-4 flex justify-center items-center flex-grow">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-sm">
          <h1 className="text-2xl font-bold text-[#ff5500] mb-6">Prihlásenie užívateľa</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-black mb-1">
                Použivateľské meno
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-black"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                Heslo
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-black"
              />
            </div>
            
            {error && <p className="text-sm text-red-600">{error}</p>}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#ff5500] text-white font-bold rounded hover:bg-[#e64d00] transition duration-200"
            >
              {loading ? 'PRIHLASOVANIE...' : 'PRIHLÁSIŤ'}
            </button>
            
            <div className="text-center">
              <Link href="#" className="text-[#ff5500] text-sm hover:underline">
                Zabudli ste heslo?
              </Link>
            </div>
            
            <p className="text-xs text-gray-600 text-center border-t border-gray-200 pt-4 mt-4">
              Pre testovanie môžete použiť:<br/>
              Meno: <strong>mor_2314</strong><br/>
              Heslo: <strong>83r5^_</strong>
            </p>
          </form>
          
          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-[#3b5998] text-white font-medium text-sm">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              Prihlásiť sa cez Facebook
            </button>
            
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 font-medium text-sm">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Prihlásiť sa cez Google
            </button>
            
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-black text-white font-medium text-sm">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.3.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Prihlásiť sa cez Apple
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-bold text-black mb-3">Noví zákazníci</h2>
            <p className="text-sm text-gray-600 mb-4">
              Ak u nás ešte nemáte účet, môžete si {' '}
              <Link href="#" className="text-[#ff5500] hover:underline">
                vytvoriť účet
              </Link>
              {' '} tu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 