'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import Layout from '@/components/Layout';

const ProductDetailPage = () => {
  const params = useParams();
  const id = params.id as string; // Získame ID z parametrov URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // Ak ID ešte nie je k dispozícii, nevoláme API

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
           if (response.status === 404) {
             throw new Error('Produkt sa nenašiel.');
           } else {
             throw new Error(`Failed to fetch product (status: ${response.status})`);
           }
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message || 'Nepodarilo sa načítať detail produktu.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Závislosť na ID, aby sa fetch spustil znova pri zmene ID

  return (
    <Layout requireAuth={true}>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/products" 
            className="inline-flex items-center text-[#fb5402] hover:text-[#e64d00] mb-6 transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Späť na produkty
          </Link>

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
          
          {product && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100" style={{ boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.08), 0 6px 10px -5px rgba(0, 0, 0, 0.05)' }}>
              <div className="md:flex">
                <div className="md:w-1/2 p-6 border-r border-gray-100">
                  <div className="relative h-80 md:h-96 flex items-center justify-center">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-8"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="mb-4">
                    <span className="text-sm text-[#fb5402] font-medium uppercase">{product.category}</span>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{product.title}</h1>
                  </div>
                  
                  <div className="flex items-center mb-5">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: Math.round(product.rating.rate) }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                      {Array.from({ length: 5 - Math.round(product.rating.rate) }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating.count} hodnotení)</span>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg mb-6 shadow-inner">
                    <p className="text-3xl font-bold text-[#fb5402]">{product.price.toFixed(2)} €</p>
                    <p className="text-gray-500 text-sm mt-1">Vrátane DPH</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-900 mb-2">Popis produktu</h3>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <button className="w-full bg-[#fb5402] hover:bg-[#e64d00] text-white py-3 px-6 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                      <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        Pridať do košíka
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage; 