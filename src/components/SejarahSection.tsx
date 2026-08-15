import React from 'react';
import Image from 'next/image';
import { BookOpen, Landmark, Calendar } from 'lucide-react';
import { SchoolProfile } from '@/lib/data';

interface SejarahSectionProps {
  profile: SchoolProfile;
}

export default function SejarahSection({ profile }: SejarahSectionProps) {
  return (
    <section className="py-5 md:py-7 bg-surface text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <div className="w-5 h-5 shrink-0 flex items-center justify-center drop-shadow-sm">
              <Image src="/images/logo-school.png" alt="Logo SDN Muara Babuat 2" width={20} height={20} className="object-contain" />
            </div>
            Rekam Jejak Kelembagaan
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Sejarah SD Negeri Muara Babuat 2
          </h2>
          <p className="mt-3 text-base text-on-surface-variant leading-relaxed">
            Perjalanan dan komitmen berkelanjutan dalam melayani pendidikan anak bangsa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-6 bg-background p-8 rounded-2xl border border-outline-variant/60 shadow-card space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold text-lg mb-2">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center drop-shadow">
                <Image src="/images/logo-school.png" alt="Logo SDN Muara Babuat 2" width={32} height={32} className="object-contain w-full h-full" />
              </div>
              <span>Pendirian & Perkembangan Sekolah</span>
            </div>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {profile.sejarah_text}
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Sebagai sekolah dasar negeri yang berlokasi di Kecamatan Muara Babuat, SD Negeri Muara Babuat 2 senantiasa menjaga nilai-nilai kebersamaan, integritas, dan semangat belajar tinggi bagi setiap peserta didik.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-primary tracking-tight mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary" />
              <span>Tahapan Perkembangan Utama</span>
            </h3>

            <div className="relative border-l-2 border-primary/20 ml-4 pl-6 space-y-8">
              {profile.sejarah_timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-primary group-hover:scale-125 transition-transform"></div>

                  <div className="bg-surface p-5 rounded-xl border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-primary/10 text-primary text-xs font-extrabold uppercase mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-base font-bold text-on-surface mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
