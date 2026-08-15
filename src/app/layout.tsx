import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'SD Negeri Muara Babuat 2 — Website Resmi Sekolah',
  description: 'Website resmi SD Negeri Muara Babuat 2. Informasi profil sekolah, kelembagaan, visi & misi, kepala sekolah, guru, siswa, serta pengumuman PPDB.',
  keywords: ['SDN Muara Babuat 2', 'SD Negeri Muara Babuat 2', 'PPDB SDN Muara Babuat 2', 'Sekolah Dasar Murung Raya'],
  openGraph: {
    title: 'SD Negeri Muara Babuat 2 — Website Resmi Sekolah',
    description: 'Website resmi SD Negeri Muara Babuat 2. Informasi profil sekolah, kelembagaan, visi & misi, kepala sekolah, guru, siswa, serta pengumuman PPDB.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${plusJakartaSans.className} min-h-screen flex flex-col bg-background text-on-surface antialiased`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
