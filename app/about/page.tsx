export default function About() {
  return (
    <section id="about" className="w-full font-sans bg-black">

      {/* 1. HERO SECTION (Judul Besar) */}
      <div className="w-full bg-white text-black py-20 px-6 flex flex-col items-center justify-center text-center">
        <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
          Our Story
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-serif mb-4" style={{ fontFamily: 'impact, sans-serif' }}>
          LKI — Legacy Keeps Inspiring
        </h1>
        <p className="text-lg md:text-2xl font-serif italic text-gray-600">
          ~Shine with Pride~
        </p>
      </div>

      {/* 2. THE MANIFESTO - BAGIAN ATAS (Teks Cerita) */}
      <div className="bg-black text-white pt-20 md:pt-32 pb-16 px-6 md:px-12 w-full flex flex-col items-center">
        <div className="max-w-4xl w-full flex flex-col gap-12 md:gap-16">

          {/* Paragraf Pembuka */}
          <p className="text-xl md:text-3xl font-serif leading-relaxed text-center md:text-left font-medium">
            LKI Merch bukan sekadar brand clothing. LKI adalah sebuah mahakarya yang kami ciptakan dengan hati, semangat, dan tujuan yang besar.
          </p>

          {/* Grid Layout untuk memecah teks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-gray-400 text-sm md:text-base leading-relaxed tracking-wide">

            <div className="flex flex-col gap-6">
              <p>
                Kami pernah terjatuh. Kami pernah gagal. Kami pernah berada dalam masa yang membuat kami mempertanyakan banyak hal. Namun, dari setiap kesulitan tersebut, kami belajar untuk percaya bahwa Tuhan selalu memiliki rencana yang lebih baik bagi mereka yang tidak berhenti berusaha.
              </p>
              <p>
                Terkadang, kehidupan tidak berubah secara instan. Perubahan akan datang pada waktu yang tepat, melalui orang yang tepat, doa yang tepat, dan kesempatan yang tepat.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p>
                LKI Merch adalah perjalanan hidup kami yang kami wujudkan menjadi sebuah brand clothing. Setiap produknya membawa kisah tentang kegagalan, keberanian, keyakinan, dan kekuatan untuk bangkit kembali.
              </p>
              <p>
                Kami mengerjakan setiap karya dengan sepenuh hati. Bukan hanya untuk menciptakan produk yang terlihat menarik, tetapi juga untuk menyampaikan pesan yang memiliki arti.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. FULL WIDTH BANNER KUTIPAN */}
      <div
        className="w-full relative h-[400px] md:h-[550px] flex items-center px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage: "url('/assets/banner-sosmed.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay Hitam Transparan agar teks lebih terbaca */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten Teks Kutipan (Tetap Rata Kiri dengan Garis) */}
        {/* Tambahkan relative dan z-10 di sini agar teksnya putih menyala */}
        <div className="relative z-10 my-8 md:my-12 border-l-4 border-white pl-6 md:pl-10 py-2">
          <p className="text-2xl md:text-5xl font-black uppercase tracking-tight leading-snug text-white">
            Jangan mudah menyerah.<br />
            Jangan kehilangan harapan.<br />
            Masa lalu tidak menentukan masa depanmu.
          </p>
        </div>
      </div>

      {/* 4. THE MANIFESTO - BAGIAN BAWAH (Penutup Cerita & Kesimpulan) */}
      <div className="bg-black text-white pt-16 pb-20 md:pb-32 px-6 md:px-12 w-full flex flex-col items-center">
        <div className="max-w-3xl w-full text-gray-300 text-sm md:text-base leading-relaxed tracking-wide space-y-6 mb-16 md:mb-24">
          <p>
            Nilai hidupmu tidak ditentukan oleh kegagalan, keadaan, ataupun penilaian orang lain. Kamu sendirilah yang menentukan seberapa jauh kamu ingin bangkit, berkembang, dan melangkah.
          </p>
          <p>
            Berdiri sejak tahun 2017, LKI akan terus membawa cahaya, inspirasi, dan manfaat bagi banyak orang. Melalui kreativitas, clothing, dan karya yang bermakna, kami akan terus bersinar sekaligus membantu orang lain menemukan cahaya dalam dirinya.
          </p>
        </div>

        {/* Kesimpulan Puitis (Dipindah ke Background Hitam) */}
        <div className="max-w-3xl text-center">
          <p className="text-xl md:text-3xl font-serif font-bold leading-tight text-white">
            Ini bukan hanya merchandise.<br />
            Ini adalah kisah perjalanan kami.<br />
            Ini adalah kebangkitan kami.<br />
            Ini adalah warisan yang terus kami bangun.
          </p>
        </div>
      </div>

      {/* 5. VISUAL ASSETS (Bagian Putih Bawah) */}
      <div className="bg-white w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">

        {/* Galeri Visual (2 Logo) */}
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Logo 1 */}
            <div className="h-36 md:h-52 flex items-center justify-center group p-6">
              <img
                src="/assets/legacy-hitam.png"
                alt="Legacy Hitam"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Logo 2 */}
            <div className="h-46 md:h-72 flex items-center justify-center group p-6">
              <img
                src="/assets/logo-lki-merch-hitam.png"
                alt="Logo LKI Merch"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

          </div>
        </div>

      </div>
      {/* 6. FOOTER */}
      <footer className="bg-white px-8 md:px-12 pb-12 pt-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-t border-gray-100">

        {/* Kiri: Logo Legacy */}
        <div className="text-black">
          <div className="inline-block text-center leading-none">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ fontFamily: 'impact, sans-serif' }}>
              LEGACY
            </h1>
            <p className="text-sm md:text-base font-bold tracking-widest uppercase border-t-2 border-black pt-1 mt-1">
              Keeps Inspiring
            </p>
          </div>
        </div>

        {/* Kanan: Info LKI & Sosmed */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end text-black">
          <h3 className="text-2xl md:text-3xl font-black font-serif tracking-wide mb-2">
            LKI Merchandise
          </h3>
          <p className="text-sm md:text-md text-gray-500 lowercase mb-4">find us</p>

          <div className="flex items-center gap-5 text-sm font-medium">
            <a href="https://www.instagram.com/lkimerch" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src="/assets/ig-hitam.png" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
            <a href="https://wa.me/628133300078" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src="/assets/wa-hitam.png" alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
            <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src="/assets/shoope.png" alt="Shopee" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
            <a href="https://www.tiktok.com/@lki.merch" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src="/assets/tiktok.png" alt="TikTok" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
          </div>
        </div>
      </footer>

    </section>
  );
}