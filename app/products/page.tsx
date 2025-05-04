'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import Layout from '@/components/Layout';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Failed to fetch products (status: ${response.status})`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
        
        // Extrahuj unikátne kategórie
        const uniqueCategories = Array.from(new Set(data.map(product => product.category)));
        setCategories(uniqueCategories);
      } catch (err: any) {
        setError(err.message || 'Nepodarilo sa načítať produkty.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Funkcia na formátovanie textu kategórie
  const formatCategoryName = (category: string) => {
    return category.toUpperCase();
  };

  // Filter products based on search term and selected category
  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  // Funkcia na prepnutie kategórie
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // zruš filter, ak je už vybraný
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <Layout requireAuth={true}>
      <div className="bg-[#111111] py-6 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white mb-4">Produkty</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white text-sm">
              <div className="flex items-center">
                <svg className="h-10 w-10 mr-2" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.42.06a9.46,9.46,0,0,0-7.58,2.68A9.27,9.27,0,0,0,9.27.06,9.41,9.41,0,0,0,1,8.53a9.25,9.25,0,0,0,3.48,8L15.05,27.26a2.39,2.39,0,0,0,1.74.74h0a2.43,2.43,0,0,0,1.68-.68L29.16,16.63a9.39,9.39,0,0,0,3.52-8A9.45,9.45,0,0,0,24.42.06Zm2.42,13.68-10,10L7,13.9l-.16-.16a5.6,5.6,0,0,1,2.85-10c.21,0,.42-.05.63-.05A5.5,5.5,0,0,1,14.9,6.05a2.52,2.52,0,0,0,2,1.06,2.4,2.4,0,0,0,2-1.06A5.62,5.62,0,0,1,29.11,8.84,6,6,0,0,1,26.84,13.74Z" fill="currentColor"/>
                </svg>
                <div>
                <p className="text-base md:text-sm md: leading-tigh t">
                  <strong className="text-[15px]">6M+</strong>
                </p>
                <p className="text-xs md:text-sm md: leading-relaxed"> spokojných zákazníkov</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="h-10 w-10 mr-2" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.93,6.2a10.69,10.69,0,0,0,3.41,7.85A10.91,10.91,0,0,0,3.93,21.9V28H25.47V21.85A10.7,10.7,0,0,0,22.06,14a10.89,10.89,0,0,0,3.41-7.85V0H3.93ZM7.54,21.85a7.14,7.14,0,0,1,3.67-6.25L14.05,14l-2.84-1.6A7.14,7.14,0,0,1,7.54,6.15V3.62H21.85V6.15a7.12,7.12,0,0,1-3.67,6.25L15.34,14l2.79,1.6a7.12,7.12,0,0,1,3.67,6.25v2.53H7.49V21.85Z" fill="currentColor"/>
                </svg>
                <div>
                <p className="text-base md:text-sm md: leading-tigh t">
                  <strong className="text-[15px]">&lt;24 hodín</strong> 
                </p>
                <p className="text-xs md:text-sm md: leading-relaxed">rýchle dodanie</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="h-10 w-10 mr-2" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.39,5.39.5,19.44v29.1L29.39,62.59l28.9-14.05V19.44ZM7.65,27.23l18.17,8.29V52.9L7.65,44.06ZM51.14,44.06,33,52.9v-22L12.46,21.57l16.93-8.23L51.14,23.91Z" fill="currentColor"/>
                </svg>
                <div>
                <p className="text-base md:text-sm md:leading-tight">
                  <strong className="text-[15px]">Doprava zadarmo</strong> 
                </p>
                <p className="text-xs md:text-sm md: leading-relaxed">pri nákupe nad 60.00 €</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="h-10 w-10 mr-2" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.35,4.82a7.12,7.12,0,0,0-13.5,0H3.7L.75,28h27.7L25.5,4.82ZM14.6,3.47a3.46,3.46,0,0,1,2.8,1.35H11.8A3.53,3.53,0,0,1,14.6,3.47Zm-9.85,21L6.8,8.32H22.45L24.5,24.47Z" fill="currentColor"/>
                </svg>
                <div>
                <p className="text-base md:text-sm md:leading-tight">
                  <strong className="text-[15px]">5000+ produktov</strong> 
                </p>
                <p className="text-xs md:text-sm md: leading-relaxed">najširší sortiment skladom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Kategórie a vyhľadávanie */}
      <div className="border-b border-gray-200 mb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center pb-4">
            <div className="w-full overflow-hidden mb-4 md:mb-0 md:w-auto">
              <div className="flex overflow-x-auto space-x-2 pb-2 no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full whitespace-nowrap font-medium ${
                      selectedCategory === category
                        ? 'bg-[#fb5402] text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    {formatCategoryName(category)}
                  </button>
                ))}
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="flex-shrink-0 px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 whitespace-nowrap font-medium transition-colors"
                  >
                    VŠETKY PRODUKTY
                  </button>
                )}
              </div>
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Hľadať produkty..."
                className="border border-gray-300 rounded-full px-4 py-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-[#fb5402]"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <button 
                className="absolute right-0 top-0 bg-[#fb5402] hover:bg-[#e64d00] text-white rounded-full h-full px-4 transition-colors duration-300"
                onClick={() => {/* Vyhľadávanie je už implementované pri zadávaní do inputu */}}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        /* Skrytie scrollbaru, ale zachovanie funkčnosti skrolovania */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE a Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari a Opera */
        }
      `}</style>
      
      <div className="container mx-auto px-4 pb-8">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fb5402]"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Chyba! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">Nenašli sa žiadne produkty zodpovedajúce vyhľadávaniu.</p>
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
                <Link href={`/products/${product.id}`} className="block">
                  <div className="relative w-full h-48 p-4 bg-white flex items-center justify-center">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-6 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="p-5 border-t border-gray-100">
                  <Link href={`/products/${product.id}`} className="block">
                    <span className="text-xs text-[#fb5402] font-medium uppercase mb-1 block">{product.category}</span>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2" title={product.title}>
                      {product.title}
                    </h2>
                  </Link>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: Math.round(product.rating.rate) }).map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-[#fb5402]">{product.price.toFixed(2)} €</p>
                    <div className="flex space-x-2">
                      {/* Tlačidlo na pridanie do košíka */}
                      <button 
                        className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-3 py-1 rounded-md text-sm transition-colors duration-300 flex items-center"
                        onClick={() => {
                          /* Funkcionalita pridania do košíka
                          const item = {
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.image,
                            quantity: 1
                          };
                          // Tu by sa volala funkcia na pridanie produktu do košíka
                          console.log("Pridávam do košíka:", item);
                          */
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                      <Link href={`/products/${product.id}`} className="bg-[#fb5402] text-white px-3 py-1 rounded-md text-sm hover:bg-[#e64d00] transition-colors duration-300">
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage; 