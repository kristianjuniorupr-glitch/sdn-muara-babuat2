import React from 'react';
import { Target, Sparkles, BookOpenCheck, Rocket, Trees, CheckCircle2 } from 'lucide-react';

interface VisiMisiSectionProps {
  visi: string;
  misi: string[];
}

export default function VisiMisiSection({ visi, misi }: VisiMisiSectionProps) {
  // Modern icons for Misi points
  const misiIcons = [
    <Sparkles className="w-5 h-5 text-secondary shrink-0" key="1" />,
    <BookOpenCheck className="w-5 h-5 text-secondary shrink-0" key="2" />,
    <Rocket className="w-5 h-5 text-secondary shrink-0" key="3" />,
    <Trees className="w-5 h-5 text-secondary shrink-0" key="4" />,
  ];

  return (
    <section className="py-5 md:py-7 bg-surface text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-4 h-4 text-primary" />
            Visi & Misi Sekolah
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Landasan Pembelajaran & Tujuan Mulia
          </h2>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Pedoman utama SD Negeri Muara Babuat 2 dalam mencetak generasi penerus bangsa yang unggul dan berkarakter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* VISI Card (Highlight Content Card - Deep Emerald) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary via-[#043d2e] to-primary-container text-white p-8 sm:p-10 rounded-3xl shadow-institutional flex flex-col justify-between relative overflow-hidden border border-white/10">
            <div className="absolute -right-8 -bottom-8 opacity-10 text-white pointer-events-none">
              <Target className="w-64 h-64" />
            </div>

            <div>
              <div className="inline-block px-3.5 py-1.5 rounded-md bg-secondary text-primary font-extrabold text-xs tracking-widest uppercase mb-6 shadow-sm">
                VISI UTAMA
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-white mb-6">
                &ldquo;{visi}&rdquo;
              </h3>
            </div>

            <div className="pt-6 border-t border-white/15 text-xs text-on-primary-container/80 flex items-center justify-between font-medium">
              <span>SD Negeri Muara Babuat 2</span>
              <span className="text-secondary font-bold">Visi Kelembagaan Resmi</span>
            </div>
          </div>

          {/* MISI Card (Matching Theme Color - Deep Emerald Palette with Modern Icons) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-primary via-[#043d2e] to-primary-container text-white border border-white/10 p-8 sm:p-10 rounded-3xl shadow-institutional flex flex-col justify-between">
            <div>
              <div className="inline-block px-3.5 py-1.5 rounded-md bg-secondary text-primary font-extrabold text-xs tracking-widest uppercase mb-6 shadow-sm">
                MISI SEKOLAH
              </div>

              <div className="space-y-4">
                {misi.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {misiIcons[index % misiIcons.length]}
                    </div>
                    <div className="flex-1 text-sm sm:text-base text-white font-medium leading-relaxed pt-1">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex items-center gap-2 text-xs text-on-primary-container/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
              <span>Seluruh kegiatan belajar mengajar dirancang selaras dengan Visi & Misi kelembagaan di atas.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
