'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 shadow-lg border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-3 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/gymbeam-logo.png" 
            alt="GymBeam Logo" 
            width={200} 
            height={55} 
            className="md:w-[265px] w-[150px] h-auto"
            priority 
          />
        </Link>

        {/* Hamburger menu na mobilných zariadeniach */}
        <button 
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-[#fb5402] hover:border-[#fb5402]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto md:items-center md:space-x-6 mt-4 md:mt-0`}>
          {user && (
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Link href="/products" className="flex items-center text-gray-700 hover:text-[#fb5402] transition duration-300 font-medium text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Produkty
              </Link>
              <Link href="/cart" className="flex items-center text-gray-700 hover:text-[#fb5402] transition duration-300 font-medium text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Košík
              </Link>
              <button
                onClick={logout}
                className="flex items-center bg-[#fb5402] hover:bg-[#e64d00] text-white font-medium py-1 md:py-2 px-3 md:px-4 rounded text-sm md:text-base transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 w-4 md:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Odhlásiť sa
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 