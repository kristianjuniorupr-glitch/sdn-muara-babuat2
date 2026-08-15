import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { School, Landmark, Users, GraduationCap } from 'lucide-react';
import SejarahSection from '@/components/SejarahSection';
import DataGuruSection from '@/components/DataGuruSection';
import DataMuridSection from '@/components/DataMuridSection';
import {
  initialSchoolProfile,
  initialTeacherStats,
  initialStudentStats,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Profil SD Negeri Muara Babuat 2 — Sejarah, Guru & Siswa',
  description: 'Profil resmi SD Negeri Muara Babuat 2. Informasi sejarah berdirinya sekolah, data statistik guru PNS, PPPK, serta data siswa kelas 1-6.',
};

export default function ProfilPage() {
  const profile = initialSchoolProfile;
  const teacherStats = initialTeacherStats;
  const studentStats = initialStudentStats;

  return (
    <div className="space-y-0">
      
      {/* Page Header Hero */}
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
            <span>Kelembagaan Resmi Sekolah</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Profil SD Negeri Muara Babuat 2
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Informasi lengkap mengenai sejarah berdirinya sekolah, statistik tenaga pendidik, dan jumlah peserta didik aktif.
          </p>

          {/* Quick Stats Summary Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Status Sekolah</div>
              <div className="text-sm font-extrabold text-primary mt-1">Negeri (Pemerintah)</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Kecamatan</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">Permata Intan</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Kabupaten</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">Murung Raya</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Provinsi</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">Kalimantan Tengah</div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. Sejarah Sekolah Section */}
      <SejarahSection profile={profile} />

      {/* 2. Data Guru & Tenaga Kependidikan Section */}
      <DataGuruSection stats={teacherStats} />

      {/* 3. Data Murid Kelas 1 - 6 Section */}
      <DataMuridSection stats={studentStats} />

    </div>
  );
}
