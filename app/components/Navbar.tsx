"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  // State untuk mengontrol apakah menu HP terbuka atau tertutup
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk toggle (buka/tutup) menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fungsi untuk menutup menu otomatis saat link diklik (di HP)
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // 1. Mengubah bg-white menjadi bg-black dan border ke abu-abu gelap
    <nav className="sticky top-0 z-50 bg-black shadow-sm border-b border-gray-800">
      
      {/* Container Utama (Selalu Terlihat) */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        
        {/* Kiri: Logo Utama */}
        <div>
          <Link href="/" onClick={closeMenu}>
            <img 
              src="/assets/logo-lkimerch-putih.png" 
              alt="Logo LKI" 
              className="h-8 md:h-10 w-auto" 
            />
          </Link>
        </div>

        {/* Tengah: Menu Navigasi (Hanya muncul di PC) */}
        {/* 2. Mengubah teks aktif dan hover menjadi putih */}
        <div className="hidden md:flex gap-8 md:gap-12 text-sm tracking-wide">
          <Link href="/" className={`${pathname === '/' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'} transition-colors`}>
            Home
          </Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'} transition-colors`}>
            Tentang Kami
          </Link>
          <Link href="/how-to-order" className={`${pathname === '/how-to-order' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'} transition-colors`}>
            How to order
          </Link>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'} transition-colors`}>
            Contact Us
          </Link>
        </div>

        {/* Kanan: Ikon Sosial Media (Hanya muncul di PC) */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a href="https://www.instagram.com/lkimerch" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/ig.png" alt="Instagram" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://wa.me/628133300078" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/wa.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/shoope_putih.png" alt="Shopee" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://www.tiktok.com/@lki.merch" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/tiktok_putih.png" alt="TikTok" className="w-5 h-5 object-contain" />
          </a>
        </div>

        {/* Tombol Hamburger (Hanya muncul di HP) */}
        {/* 3. Mengubah warna tombol hamburger menjadi putih */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden flex items-center justify-center p-2 text-white focus:outline-none"
        >
          {/* SVG Ikon Garis Tiga (Hamburger) atau Silang (X) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              // Ikon X saat menu terbuka
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Ikon Garis Tiga saat menu tertutup
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Menu Dropdown Mobile (Muncul saat tombol Hamburger diklik) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col absolute w-full left-0 top-full shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm tracking-wide">
            <Link href="/" onClick={closeMenu} className={`${pathname === '/' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
              Home
            </Link>
            <Link href="/about" onClick={closeMenu} className={`${pathname === '/about' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
              Tentang Kami
            </Link>
            <Link href="/contact" onClick={closeMenu} className={`${pathname === '/contact' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
              Contact Us
            </Link>
            <Link href="/how-to-order" onClick={closeMenu} className={`${pathname === '/how-to-order' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
              How To Order
            </Link>
          </div>
          
          {/* Sosial Media di Dalam Menu Mobile */}
          {/* 4. Menggunakan ikon versi putih karena background menu sekarang hitam/gelap */}
          <div className="flex items-center gap-6 px-6 py-4 border-t border-gray-800 bg-gray-900">
            <a href="https://www.instagram.com/lkimerch" target="_blank" rel="noopener noreferrer">
              <img src="/assets/ig.png" alt="Instagram" className="w-5 h-5 object-contain" />
            </a>
            <a href="https://wa.me/628133300078" target="_blank" rel="noopener noreferrer">
              <img src="/assets/wa.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
            </a>
            <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer">
              <img src="/assets/shoope_putih.png" alt="Shopee" className="w-5 h-5 object-contain" />
            </a>
            <a href="https://www.tiktok.com/@lki.merch" target="_blank" rel="noopener noreferrer">
              <img src="/assets/tiktok_putih.png" alt="TikTok" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>
      )}
      
    </nav>
  );
}