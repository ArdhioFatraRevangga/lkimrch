export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-gray-50 pb-20">
      
      {/* 1. Header Section yang Lebih Menonjol */}
      <div className="bg-black text-white text-center py-16 md:py-24 px-6 relative overflow-hidden">
        {/* Elemen dekoratif blur di background header (opsional, memberi kesan modern) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <h1 className="text-3xl md:text-5xl font-black tracking-widest uppercase font-serif mb-4 relative z-10">
          Hubungi Kami
        </h1>
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed relative z-10">
          Punya pertanyaan seputar produk, pesanan, atau ingin menjalin kerja sama? Tim LKI Merch siap membantu Anda.
        </p>
      </div>

      {/* 2. Container Cards Kontak (Dibuat Grid 3 Kolom) */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 md:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Customer Service */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
              <img src="/assets/wa.png" alt="WhatsApp" className="w-7 h-7 object-contain" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-3">Customer Service</h3>
            <p className="text-sm text-gray-500 flex-grow mb-8 leading-relaxed">
              Customer Support kami terkait pertanyaan atau informasi mengenai produk dan penjualan, (Order / pemesanan, Produk, dll).
            </p>
            <a 
              href="https://wa.me/628133300078" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-black text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Chat CS Sekarang</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Card 2: Admin */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
              <img src="/assets/wa.png" alt="WhatsApp" className="w-7 h-7 object-contain" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-3">Admin (Kritik & Saran)</h3>
            <p className="text-sm text-gray-500 flex-grow mb-8 leading-relaxed">
              Admin khusus untuk memberikan kritik, saran, dan masukan agar kami menjadi lebih baik. Siap melayani 24/7.
            </p>
            <a 
              href="https://wa.me/628133300078" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-black text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Hubungi Admin</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl">✉</span>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-3">Partnership</h3>
            <p className="text-sm text-gray-500 flex-grow mb-8 leading-relaxed">
              Kirimkan email kepada tim kami untuk keperluan penawaran kerja sama, Sponsorship, dan peluang bisnis lainnya.
            </p>
            <a 
              href="mailto:lkimerch22@gmail.com"
              className="w-full bg-black text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Kirim Email</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>
      </div>

      {/* 3. Section Identity & Sosial Media (Gambar Bawah) */}
      <div className="max-w-6xl mx-auto px-6 mt-20 md:mt-24">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-widest border-b-2 border-black pb-2 inline-block">
            Our Identity
          </h2>
        </div>
        
        {/* 4 Kotak Gambar dengan efek hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-center bg-gray-200 group">
            <img src="/assets/PROFIL-SOSMED-ALL.png" alt="Profil Sosmed" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-center bg-white p-6 md:p-8 group">
            <img src="/assets/legacy-hitam.png" alt="Legacy Hitam" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-center bg-white p-6 md:p-8 group">
            <img src="/assets/keep-Inspiring.png" alt="Keep Inspiring" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-center bg-gray-200 group">
            <img src="/assets/banner-sosmed.png" alt="Banner Sosmed" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>

    </section>
  );
}