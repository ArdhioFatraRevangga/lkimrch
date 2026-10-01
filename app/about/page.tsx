export default function About() {
  return (
    <section id="about" className="w-full font-sans">
      
      {/* 1. Bagian Hitam (Teks Cerita LKI) */}
      <div className="bg-black text-white py-24 px-6 md:px-8 w-full flex flex-col items-center justify-center">
        
        {/* Container Teks dibuat rata tengah (text-center) dan dibatasi lebarnya (max-w-3xl) */}
        <div className="max-w-3xl flex flex-col gap-6 text-sm md:text-base text-gray-200 font-serif leading-relaxed text-center tracking-wide">
          
          <p className="text-lg md:text-xl tracking-widest text-white mb-8">
            LKI — Legacy Keeps Inspiring
          </p>

          <p>~Shine with Pride~</p>

          <p>
            LKI Merch bukan sekadar brand clothing. LKI adalah sebuah mahakarya yang kami ciptakan dengan hati, semangat, dan tujuan yang besar.
          </p>

          <p>
            Kami pernah terjatuh. Kami pernah gagal. Kami pernah berada dalam masa yang membuat kami mempertanyakan banyak hal. Namun, dari setiap kesulitan tersebut, kami belajar untuk percaya bahwa Tuhan selalu memiliki rencana yang lebih baik bagi mereka yang tidak berhenti berusaha.<br />
            Terkadang, kehidupan tidak berubah secara instan. Perubahan akan datang pada waktu yang tepat, melalui orang yang tepat, doa yang tepat, dan kesempatan yang tepat.
          </p>

          <p>
            LKI Merch adalah perjalanan hidup kami yang kami wujudkan menjadi sebuah brand clothing.<br />
            Setiap produknya membawa kisah tentang kegagalan, keberanian, keyakinan, dan kekuatan untuk bangkit kembali.<br />
            Kami mengerjakan setiap karya dengan sepenuh hati. Bukan hanya untuk menciptakan produk yang terlihat menarik, tetapi juga untuk menyampaikan pesan yang memiliki arti.
          </p>

          <p>
            Jangan mudah menyerah.<br />
            Jangan kehilangan harapan.<br />
            Masa lalu tidak menentukan masa depanmu.
          </p>

          <p>
            Nilai hidupmu tidak ditentukan oleh kegagalan, keadaan, ataupun penilaian orang lain. Kamu sendirilah yang menentukan seberapa jauh kamu ingin bangkit, berkembang, dan melangkah.<br />
            Berdiri sejak tahun 2017, LKI akan terus membawa cahaya, inspirasi, dan manfaat bagi banyak orang.<br />
            Melalui kreativitas, clothing, dan karya yang bermakna, kami akan terus bersinar sekaligus membantu orang lain menemukan cahaya dalam dirinya.
          </p>

          <p className="mt-8">
            Ini bukan hanya merchandise.<br />
            Ini adalah kisah perjalanan kami.<br />
            Ini adalah kebangkitan kami.<br />
            Ini adalah warisan yang terus kami bangun.
          </p>
        </div>
      </div>

      {/* 2. Bagian Putih (Kotak Placeholder) */}
      <div className="bg-white w-full py-16 px-8 flex flex-col items-center">
        
        {/* Dua Kotak Atas */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-200 w-full h-64 md:h-80 rounded-sm"></div>
          <div className="bg-gray-200 w-full h-64 md:h-80 rounded-sm"></div>
        </div>

        {/* Satu Kotak Tengah Bawah */}
        <div className="w-full max-w-2xl">
          <div className="bg-gray-200 w-full h-64 md:h-72 rounded-sm"></div>
        </div>

      </div>

      {/* 3. Footer Area (Bagian Putih) */}
      <footer className="bg-white px-8 pb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        
        {/* Kiri: Logo Legacy */}
        <div className="text-black">
          <div className="inline-block text-center leading-none">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ fontFamily: 'impact, sans-serif'}}>
              LEGACY
            </h1>
            <p className="text-sm md:text-base font-bold tracking-widest uppercase border-t-2 border-black pt-1 mt-1">
              Keeps Inspiring
            </p>
          </div>
        </div>

        {/* Kanan: Info LKI & Sosmed */}
        <div className="text-right flex flex-col items-center md:items-end text-black">
          <h3 className="text-3xl font-black font-serif tracking-wide mb-2">
            LKI Merchandise
          </h3>
          <p className="text-md text-gray-600 lowercase mb-4">find us</p>
          
          {/* Ikon Sosial Media Footer */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="https://www.instagram.com/lkimerch" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="/assets/ig-hitam.png" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
            <a href="https://wa.me/628133300078" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="/assets/wa-hitam.png" alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
            <a href="https://shopee.co.id/toko_kamu" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="/assets/shoope.png" alt="Shopee" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
            <a href="https://www.tiktok.com/@lki.merch" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <img src="/assets/tiktok.png" alt="TikTok" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
          </div>
        </div>
      </footer>

      {/* 4. Bottom Black Bar */}
      <div className="bg-black text-white text-center py-4">
        <p className="text-sm tracking-widest">LKI Merchandise</p>
      </div>

    </section>
  );
}