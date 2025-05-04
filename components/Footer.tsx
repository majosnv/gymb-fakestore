'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter subscribe section */}
      <div className="container mx-auto px-4 py-6 border-b border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-lg mb-4 md:mb-0 md:mr-4">
            Dobrá energia aj do vášho e-mailu?
          </p>
          <div className="w-full md:w-auto flex">
            <input
              type="email"
              placeholder="Zadajte svoj e-mail ..."
              className="px-4 py-2 w-full md:w-80 text-black bg-white rounded-l-md focus:outline-none"
            />
            <button className="bg-[#fb5402] hover:bg-[#e64d00] text-white px-4 py-2 rounded-r-md font-bold transition-colors">
              ODOSLAŤ
            </button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Links */}
          <div>
            <nav className="flex flex-col space-y-2">
              <Link href="/contact" className="hover:text-[#fb5402]">Kontakt</Link>
              <Link href="/blog" className="hover:text-[#fb5402]">Blog</Link>
              <Link href="/obchodne-podmienky" className="hover:text-[#fb5402]">Obchodné podmienky</Link>
              <Link href="/ochrana-osobnych-udajov" className="hover:text-[#fb5402]">Ochrana osobných údajov</Link>
              <Link href="/reklamacny-poriadok" className="hover:text-[#fb5402]">Reklamačný poriadok</Link>
              <Link href="/pridaj-sa-do-timu" className="hover:text-[#fb5402]">Pridaj sa do tímu</Link>
              <Link href="/velkoobchod" className="hover:text-[#fb5402]">Veľkoobchod</Link>
              <Link href="/faq" className="hover:text-[#fb5402]">Najčastejšie otázky</Link>
              <Link href="/recenzie" className="hover:text-[#fb5402]">Overovanie recenzií</Link>
              <Link href="/dorucenie" className="hover:text-[#fb5402]">Doručenie a platba</Link>
              <Link href="/predajna-kosice" className="hover:text-[#fb5402]">Predajňa Košice</Link>
              <Link href="/aplikacia" className="hover:text-[#fb5402]">Mobilná aplikácia</Link>
              <Link href="/cookies" className="hover:text-[#fb5402]">Nastavenie cookies</Link>
            </nav>
          </div>

          {/* Column 2: Social links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Sledujte nás:</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/GymBeamSk" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#fb5402] p-2 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/gymbeamsk/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#fb5402] p-2 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCFWF-YVqwOYb4O4sImMqAyg" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#fb5402] p-2 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@gymbeam.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#fb5402] p-2 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5 text-black hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Quality / Certificates */}
          <div>
            <h3 className="text-lg font-medium mb-4">Záruka kvality:</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-dark rounded p-1 w-16 h-16 flex items-center justify-center">
                <Image 
                  src="/1.svg" 
                  alt="ISO 9001 certifikát" 
                  width={50} 
                  height={50}
                  className="object-contain" 
                />
              </div>
              <div className="bg-dark rounded p-1 w-16 h-16 flex items-center justify-center">
                <Image 
                  src="/2.svg" 
                  alt="IFS certifikát" 
                  width={50} 
                  height={50}
                  className="object-contain" 
                />
              </div>
              <div className="bg-dark rounded p-1 w-16 h-16 flex items-center justify-center">
                <Image 
                  src="/3.svg" 
                  alt="BIO certifikát" 
                  width={50} 
                  height={50}
                  className="object-contain" 
                />
              </div>
              <div className="bg-dark rounded p-1 w-16 h-16 flex items-center justify-center">
                <Image 
                  src="/4.svg" 
                  alt="Certifikát kvality" 
                  width={50} 
                  height={50}
                  className="object-contain" 
                />
              </div>
            </div>
            <div className="mt-6">
              <a href="https://obchody.heureka.sk/gymbeam-sk/recenze/" target="_blank" rel="noopener noreferrer" className="block">
                <Image 
                  src="/heureka.png" 
                  alt="Heureka recenzie GymBeam - 97% spokojnosť" 
                  width={130} 
                  height={160}
                  className="rounded-md" 
                />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-lg font-medium mb-4">Kontaktujte nás:</h3>
            <div className="space-y-2">
              <p className="font-medium">GymBeam GmbH</p>
              <p>Unter den Linden 21,</p>
              <p>10117 Berlín, Germany</p>
              <div className="pt-4">
                <p><a href="tel:0233057087" className="hover:text-[#fb5402]">02 33 057 087</a></p>
                <p><a href="mailto:info@gymbeam.sk" className="hover:text-[#fb5402]">info@gymbeam.sk</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Country links */}
      <div className="container mx-auto px-4 py-4 text-xs border-t border-gray-800 text-gray-400">
        <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center">
          <a href="https://gymbeam.com" className="hover:text-white">GymBeam.com</a>
          <span>|</span>
          <a href="https://gymbeam.de" className="hover:text-white">GymBeam.de</a>
          <span>|</span>
          <a href="https://gymbeam.at" className="hover:text-white">GymBeam.at</a>
          <span>|</span>
          <a href="https://gymbeam.ba" className="hover:text-white">GymBeam.ba</a>
          <span>|</span>
          <a href="https://gymbeam.bg" className="hover:text-white">GymBeam.bg</a>
          <span>|</span>
          <a href="https://gymbeam.cz" className="hover:text-white">GymBeam.cz</a>
          <span>|</span>
          <a href="https://gymbeam.gr" className="hover:text-white">GymBeam.gr</a>
          <span>|</span>
          <a href="https://gymbeam.hr" className="hover:text-white">GymBeam.hr</a>
          <span>|</span>
          <a href="https://gymbeam.hu" className="hover:text-white">GymBeam.hu</a>
          <span>|</span>
          <a href="https://gymbeam.pl" className="hover:text-white">GymBeam.pl</a>
          <span>|</span>
          <a href="https://gymbeam.ro" className="hover:text-white">GymBeam.ro</a>
          <span>|</span>
          <a href="https://gymbeam.rs" className="hover:text-white">GymBeam.rs</a>
          <span>|</span>
          <a href="https://gymbeam.si" className="hover:text-white">GymBeam.si</a>
          <span>|</span>
          <a href="https://gymbeam.ua" className="hover:text-white">GymBeam.ua</a>
          <span>|</span>
          <a href="https://gymbeam.it" className="hover:text-white">GymBeam.it</a>
          <span>|</span>
          <a href="https://gymbeam.sk" className="hover:text-white">GymBeam.sk</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 