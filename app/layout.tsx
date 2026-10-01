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
  title: "LKI Merchandise", // Diubah agar sesuai nama tokomu
  description: "Legacy Keeps Inspiring",
};

// Mengubah tipe prop children menjadi standar React
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Navbar dipasang di sini */}
        <Navbar />
        
        {/* Sisa konten halaman */}
        {children}
      </body>
    </html>
  );
}