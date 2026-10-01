"use client";
import { useState, useRef } from 'react';

export default function Home() {
  // Daftar gambar untuk slider
  const slides = [
    "/assets/wa1.jpeg",
    "/assets/wa5.jpeg",
    "/assets/wa4.jpeg",
    "/assets/wa2.jpeg",
    "/assets/wa3.jpeg"
  ];

  // State untuk melacak gambar mana yang sedang aktif
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Fitur Video ---
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  // -------------------

  // Fungsi ke gambar sebelumnya
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Fungsi ke gambar selanjutnya
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* Hero Section */}

      {/* 1. Video Banner */}
      <div className="w-full h-[550px] md:h-[600px] mb-4 relative overflow-hidden bg-gray-900 group">
        <video
          ref={videoRef}
          src="/assets/banner-produksi.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        
        {/* Tombol Play/Pause */}
        <button
          onClick={togglePlay}
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-black/40 hover:bg-black/80 text-white p-3 md:p-4 rounded-full transition-all z-10 opacity-70 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? (
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Announcement Section */}
      <div className="px-6 md:px-8 mb-8 md:mb-18 max-w-2xl text-center md:text-left mx-auto md:mx-0">
        <h2 className="text-2xl md:text-2xl font-black mb-3 md:mb-6 font-serif tracking-widest uppercase">
          Announcement !!
        </h2>
        <p className="text-lg md:text-xl font-bold font-serif leading-snug">
          Belanja langsung melalui website resmi <br className="hidden md:block" />
          LKI Merch jauh lebih hemat & murah dibanding di Online Shop lain!<br className="hidden md:block" />
        </p>
      </div>

      {/* 2. Banner Slider (Diperbarui dengan animasi geser halus) */}
      <div className="w-full h-[400px] md:h-[600px] mb-8 md:mb-12 relative group overflow-hidden bg-gray-100">
        
        {/* Container untuk semua gambar (berjajar ke samping dan digeser) */}
        <div 
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Banner LKI ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Panah Kiri */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition opacity-75 group-hover:opacity-100 z-10"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Panah Kanan */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition opacity-75 group-hover:opacity-100 z-10"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indikator Titik */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentIndex === slideIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* --- KATEGORI: Best Seller --- */}
      <div className="px-4 md:px-8 mb-4">
        <h3 className="text-lg md:text-xl font-serif font-bold border-b border-black inline-block pb-1">Best Seller</h3>
      </div>
      
      {/* Grid Layout untuk Best Seller */}
      {/* Di HP: 2 Kolom, Di PC: 3 Kolom */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-4 md:px-8 mb-8 md:mb-12">
        {/* Kotak 1 */}
        <div className="bg-gray-200 aspect-[3/4] md:aspect-square overflow-hidden rounded-sm">
          <img 
            src="/assets/TS-harder.png" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Kotak 2 */}
        <div className="bg-gray-200 aspect-[3/4] md:aspect-square overflow-hidden rounded-sm">
          <img 
            src="/assets/TS-strager.png" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Kotak 3 (Khusus kotak ini, di HP akan memanjang 2 kolom) */}
        <div className="bg-gray-200 aspect-[3/4] md:aspect-square col-span-2 md:col-span-1 overflow-hidden rounded-sm">
          <img 
            src="/assets/LS-jersey-bast.png" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* --- KATEGORI: T-Shirt --- */}
      <div className="px-4 md:px-8 mb-4">
        <h3 className="text-lg md:text-xl font-serif font-bold border-b border-black inline-block pb-1">T-Shirt</h3>
      </div>
      {/* Grid 4 Kolom dengan Foto */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4 md:px-8 mb-4 md:mb-6">
        {/* Foto 1 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-harder.png" 
            alt="T-Shirt Bunny Grey" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 2 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-strager.png" 
            alt="T-Shirt Lighter" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 3 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/LS-jersey-bast.png" 
            alt="T-Shirt Gundam Black" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 4 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-musc.png" 
            alt="T-Shirt Muscle" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      {/* Grid 2 Kolom Besar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 px-4 md:px-8 mb-8 md:mb-12">
        <div className="bg-gray-200 aspect-[4/3]"></div>
        <div className="bg-gray-200 aspect-[4/3]"></div>
      </div>

      {/* --- KATEGORI: Jersey --- */}
      <div className="px-4 md:px-8 mb-4">
        <h3 className="text-lg md:text-xl font-serif font-bold border-b border-black inline-block pb-1">Jersey</h3>
      </div>
      {/* Grid 4 Kolom dengan Foto */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4 md:px-8 mb-4 md:mb-6">
        {/* Foto 1 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-harder.png" 
            alt="T-Shirt Bunny Grey" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 2 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-strager.png" 
            alt="T-Shirt Lighter" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 3 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/LS-jersey-bast.png" 
            alt="T-Shirt Gundam Black" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 4 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-musc.png" 
            alt="T-Shirt Muscle" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      {/* Grid 2 Kolom Besar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 px-4 md:px-8 mb-8 md:mb-12">
        <div className="bg-gray-200 aspect-[4/3]"></div>
        <div className="bg-gray-200 aspect-[4/3]"></div>
      </div>

      {/* --- KATEGORI: T-Shirt Band / Jersey --- */}
      <div className="px-4 md:px-8 mb-4">
        <h3 className="text-lg md:text-xl font-serif font-bold border-b border-black inline-block pb-1">T-Shirt Band / Jersey </h3>
      </div>
      {/* Grid 4 Kolom dengan Foto */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4 md:px-8 mb-4 md:mb-6">
        {/* Foto 1 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-harder.png" 
            alt="T-Shirt Bunny Grey" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 2 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-strager.png" 
            alt="T-Shirt Lighter" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 3 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/LS-jersey-bast.png" 
            alt="T-Shirt Gundam Black" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Foto 4 */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="/assets/TS-musc.png" 
            alt="T-Shirt Muscle" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* --- INSTAGRAM FEED SECTION --- */}
      <div className="px-4 md:px-8 mb-4 flex items-center gap-2">
        <img src="/assets/ig-hitam.png" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
        <h3 className="text-xl md:text-3xl font-serif font-black tracking-wide">LKI Merch</h3>
      </div>
      {/* 8 Kotak Instagram (4 Kolom, 2 Baris) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-4 md:px-8 mb-16 md:mb-24">
        <div className="bg-gray-200 aspect-square"></div>
        <div className="bg-gray-200 aspect-square"></div>
        <div className="bg-gray-200 aspect-square"></div>
        <div className="bg-gray-200 aspect-square"></div>
        <div className="bg-gray-200 aspect-square"></div>
        <div className="bg-gray-200 aspect-square"></div>
        <div className="bg-gray-200 aspect-square"></div>
        <div className="bg-gray-200 aspect-square"></div>
      </div>

      {/* Footer Area */}
      <footer className="px-6 md:px-8 pb-8 md:pb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        {/* Kiri: Logo Legacy */}
        <div>
          <div className="inline-block text-center leading-none">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ fontFamily: 'impact, sans-serif' }}>
              LEGACY
            </h1>
            <p className="text-xs md:text-sm font-bold tracking-widest uppercase border-t-2 border-black pt-1 mt-1">
              Keeps Inspiring
            </p>
          </div>
        </div>

        {/* Kanan: Info LKI & Sosmed */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <h3 className="text-2xl md:text-3xl font-black font-serif tracking-wide mb-1 md:mb-2">
            LKI Merchandise
          </h3>
          <p className="text-sm md:text-md text-gray-600 lowercase mb-4">find us</p>

          {/* Ikon Sosial Media Footer */}
          <div className="flex items-center gap-3 md:gap-4 text-sm font-medium">
            <a href="https://www.instagram.com/lkimerch" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="/assets/ig-hitam.png" alt="Instagram" className="w-5 h-5 object-contain" />
            </a>
            <a href="https://wa.me/628133300078" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="/assets/wa-hitam.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
            </a>
            <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="/assets/shoope.png" alt="Shopee" className="w-5 h-5 object-contain" />
            </a>
            <a href="https://www.tiktok.com/@lki.merch" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="/assets/tiktok.png" alt="TikTok" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom Black Bar */}
      <div className="bg-black text-white text-center py-3 md:py-4">
        <p className="text-xs md:text-sm tracking-widest">LKI Merchandise</p>
      </div>

    </div>
  );
}