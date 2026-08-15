import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { StudentStats } from '@/lib/data';

interface DataMuridSectionProps {
  stats: StudentStats;
}

export default function DataMuridSection({ stats }: DataMuridSectionProps) {
  const classItems = [
    { label: 'Kelas 1', count: stats.kelas_1 },
    { label: 'Kelas 2', count: stats.kelas_2 },
    { label: 'Kelas 3', count: stats.kelas_3 },
    { label: 'Kelas 4', count: stats.kelas_4 },
    { label: 'Kelas 5', count: stats.kelas_5 },
    { label: 'Kelas 6', count: stats.kelas_6 },
  ];

  return (
    <section className="py-5 md:py-7 bg-surface text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            Peserta Didik
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Data Peserta Didik (Kelas 1 - 6)
          </h2>
          <p className="mt-3 text-base text-on-surface-variant">
            Rincian jumlah murid aktif per jenjang kelas SD Negeri Muara Babuat 2.
          </p>
        </div>

        {/* Total Callout Banner */}
        <div className="max-w-md mx-auto mb-10 bg-gradient-to-r from-primary to-primary-container text-white p-6 rounded-2xl shadow-institutional text-center flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center font-bold">
              <School className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-xs text-on-primary-container uppercase font-extrabold tracking-wider">
                Total Keseluruhan Murid
              </div>
              <div className="text-sm text-white/80">
                Kelas 1 s/d Kelas 6
              </div>
            </div>
          </div>
          <div className="text-3xl font-extrabold font-mono text-secondary">
            {stats.total}
          </div>
        </div>

        {/* Class Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {classItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-background border border-outline-variant/60 rounded-xl p-5 text-center shadow-card hover:shadow-elevated hover:border-primary/40 transition-all group"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary transition-colors">
                {item.label}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">
                {item.count}
              </div>
              <div className="text-[11px] text-on-surface-variant/80 mt-1">
                Peserta Didik
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
