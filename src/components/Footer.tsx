import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-primary-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
          
          {/* Col 1: School Identity */}
          <div className="md:col-span-2 space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 shrink-0 flex items-center justify-center drop-shadow">
                <Image
                  src="/images/logo-school.png"
                  alt="Logo Resmi SDN Muara Babuat 2"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                SDN MUARA BABUAT 2
              </span>
            </div>
            <p className="text-on-primary-container/80 text-xs sm:text-sm leading-snug max-w-md">
              Website Resmi SD Negeri Muara Babuat 2. Pusat informasi kelembagaan, kegiatan akademik, profil sekolah, dan Penerimaan Peserta Didik Baru (PPDB).
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-secondary font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Institusi Pendidikan Dasar Negeri Resmi
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">
              Navigasi Halaman
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-secondary transition-colors inline-flex items-center gap-1.5">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/profil" className="text-white/80 hover:text-secondary transition-colors inline-flex items-center gap-1.5">
                  Profil Sekolah & Sejarah
                </Link>
              </li>
              <li>
                <Link href="/ppdb" className="text-white/80 hover:text-secondary transition-colors inline-flex items-center gap-1.5">
                  Pengumuman PPDB
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">
              Kontak & Lokasi
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>Kecamatan Permata Intan, Kabupaten Murung Raya, Kalimantan Tengah</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>sdnmuarababuat2@sch.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>(0528) [Nomor Telepon Official]</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/70 gap-2">
          <p>© 2026 SD Negeri Muara Babuat 2. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            Website Resmi SD Negeri Muara Babuat 2 — Kabupaten Murung Raya
          </p>
        </div>
      </div>
    </footer>
  );
}
