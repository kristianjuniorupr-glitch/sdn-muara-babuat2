import React from 'react';
import { Users, Award, ShieldCheck, Briefcase } from 'lucide-react';
import { TeacherStats } from '@/lib/data';

interface DataGuruSectionProps {
  stats: TeacherStats;
}

export default function DataGuruSection({ stats }: DataGuruSectionProps) {
  return (
    <section className="py-5 md:py-7 bg-surface-container-low border-y border-surface-variant text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-4 h-4 text-primary" />
            Tenaga Pendidik & Kependidikan
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Data Guru Berdasarkan Kepegawaian
          </h2>
          <p className="mt-3 text-base text-on-surface-variant">
            Statistik komposisi guru dan tenaga kependidikan SD Negeri Muara Babuat 2.
          </p>
        </div>

        {/* Statistic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: PNS */}
          <div className="bg-surface border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-elevated hover:border-primary/40 transition-all text-center group">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight font-mono mb-1">
              {stats.pns_count}
            </div>
            <div className="text-base font-bold text-on-surface">
              Guru PNS
            </div>
            <div className="mt-2 text-xs text-on-surface-variant font-medium">
              Pegawai Negeri Sipil Resmi
            </div>
          </div>

          {/* Card 2: PPPK */}
          <div className="bg-surface border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-elevated hover:border-primary/40 transition-all text-center group">
            <div className="w-12 h-12 mx-auto rounded-xl bg-secondary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight font-mono mb-1">
              {stats.pppk_count}
            </div>
            <div className="text-base font-bold text-on-surface">
              Guru PPPK
            </div>
            <div className="mt-2 text-xs text-on-surface-variant font-medium">
              Pegawai Pemerintah dengan Perjanjian Kerja
            </div>
          </div>

          {/* Card 3: Tenaga Kontrak */}
          <div className="bg-surface border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-elevated hover:border-primary/40 transition-all text-center group">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight font-mono mb-1">
              {stats.kontrak_count}
            </div>
            <div className="text-base font-bold text-on-surface">
              Tenaga Kontrak
            </div>
            <div className="mt-2 text-xs text-on-surface-variant font-medium">
              Tenaga Pendidik & Kependidikan Kontrak
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
