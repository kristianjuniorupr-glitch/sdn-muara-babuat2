import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Bell, Search, Filter, HelpCircle, PhoneCall, Download } from 'lucide-react';
import PPDBAnnouncementCard from '@/components/PPDBAnnouncementCard';
import { initialPPDBAnnouncements } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pengumuman PPDB SD Negeri Muara Babuat 2 — Pendaftaran Siswa Baru',
  description: 'Portal resmi informasi Penerimaan Peserta Didik Baru (PPDB) SD Negeri Muara Babuat 2. Jadwal, syarat pendaftaran, dokumen, dan pengumuman hasil seleksi.',
};

export default function PPDBPage() {
  const announcements = initialPPDBAnnouncements;

  return (
    <div className="space-y-0">
      
      {/* PPDB Header Hero */}
      <section className="bg-white text-on-surface py-8 lg:py-10 border-b border-outline-variant/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-wide mb-4 border border-primary/20">
            <div className="w-6 h-6 shrink-0 flex items-center justify-center drop-shadow-sm">
              <Image
                src="/images/logo-school.png"
                alt="Logo SDN Muara Babuat 2"
                width={24}
                height={24}
                className="object-contain w-full h-full"
              />
            </div>
            <span>Portal Informasi PPDB Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Penerimaan Peserta Didik Baru (PPDB)
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Informasi resmi jadwal, syarat pendaftaran, berkas administrasi, dan hasil seleksi calon siswa SD Negeri Muara Babuat 2.
          </p>
        </div>
      </section>

      {/* Announcements List Section */}
      <section className="py-4 md:py-5 bg-surface text-on-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-outline-variant/60">
            <div>
              <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">
                Daftar Pengumuman & Petunjuk PPDB
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Pilih pengumuman untuk melihat rincian informasi dan mengunduh berkas formulir.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container text-xs font-bold text-primary border border-outline-variant">
              <span>Menampilkan {announcements.length} Pengumuman Aktif</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {announcements.map((announcement) => (
              <PPDBAnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>

          {/* Help Box Section */}
          <div className="mt-16 bg-surface-container-low border border-outline-variant/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-secondary flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface">
                  Butuh Bantuan Pendaftaran PPDB?
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  Sekretariat PPDB SD Negeri Muara Babuat 2 melayani konsultasi langsung setiap hari kerja pukul 08.00 - 12.00 WIB.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="tel:052800000"
                className="w-full md:w-auto px-5 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-secondary" />
                Hubungi Panitia PPDB
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
