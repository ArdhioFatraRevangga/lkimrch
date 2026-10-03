import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jacques_Francois_Shadow } from 'next/font/google';
import "./globals.css";
// Jangan lupa import komponen Navbar
import Navbar from "./components/Navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jacques = Jacques_Francois_Shadow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LKI Merchandise", 
  description: "Legacy Keeps Inspiring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id" // Diubah ke 'id' karena bahasa website adalah Indonesia
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Navbar dipasang di sini */}
        <Navbar />
        
        {/* Sisa konten halaman (flex-grow akan mendorong kotak hitam ke paling bawah) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Kotak Hitam Global (Muncul di semua halaman) */}
        <div className="bg-black text-white text-center py-4 mt-auto">
          <p className="text-xs md:text-sm tracking-widest text-gray-400">
            © {new Date().getFullYear()} LKI Merchandise
          </p>
        </div>
        
      </body>
    </html>
  );
}