import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bell, Calendar, Sparkles } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import VisiMisiSection from '@/components/VisiMisiSection';
import KepalaSekolahSection from '@/components/KepalaSekolahSection';
import EkstrakurikulerSection from '@/components/EkstrakurikulerSection';
import PPDBAnnouncementCard from '@/components/PPDBAnnouncementCard';
import {
  initialSchoolProfile,
  initialExtracurriculars,
  initialPPDBAnnouncements,
} from '@/lib/data';

export default function HomePage() {
  const profile = initialSchoolProfile;
  const extracurriculars = initialExtracurriculars;
  const latestAnnouncements = initialPPDBAnnouncements.slice(0, 2);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection profile={profile} />

      {/* 2. Visi & Misi Section */}
      <VisiMisiSection visi={profile.visi} misi={profile.misi} />

      {/* 3. Kepala Sekolah Section */}
      <KepalaSekolahSection profile={profile} />

      {/* 4. Ekstrakurikuler Section */}
      <EkstrakurikulerSection items={extracurriculars} />

      {/* 5. PPDB Highlight Banner & Latest Announcements */}
      <section className="py-5 md:py-7 bg-surface-container-low border-t border-surface-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-primary text-xs font-extrabold uppercase tracking-wider mb-2">
                <Bell className="w-4 h-4 text-primary" />
                Informasi PPDB Terbaru
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
                Penerimaan Peserta Didik Baru
              </h2>
              <p className="mt-2 text-base text-on-surface-variant">
                Pengumuman dan petunjuk teknis pendaftaran siswa baru SD Negeri Muara Babuat 2.
              </p>
            </div>

            <Link
              href="/ppdb"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-container transition-all self-start md:self-auto shrink-0 shadow-md"
            >
              Lihat Semua Pengumuman PPDB
              <ArrowRight className="w-4 h-4 text-secondary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestAnnouncements.map((announcement) => (
              <PPDBAnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
