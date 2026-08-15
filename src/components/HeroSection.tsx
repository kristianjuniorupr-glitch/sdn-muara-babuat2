import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, School, UserCheck, Award, ArrowUpRight, Sparkles } from 'lucide-react';
import { SchoolProfile } from '@/lib/data';

interface HeroSectionProps {
  profile: SchoolProfile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden border-b border-primary-container">
      {/* 1. Full-Width Background Imagery - Featuring Generated School Frontage with 'SDN MUARA BABUAT 2' Sign */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero-school.jpg"
          alt="Foto Kegiatan dan Gedung SD Negeri Muara Babuat 2"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          quality={80}
          className="object-cover object-center scale-105"
        />
        {/* Adjusted Lighter Gradient Overlays for high contrast and clear image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10"></div>
      </div>

      {/* 2. Hero Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-6 lg:py-8">
        <div className="max-w-3xl space-y-3 text-left">
          
          {/* Official Badge with School Logo */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/50 border border-white/25 text-white text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg">
            <div className="w-7 h-7 shrink-0 flex items-center justify-center drop-shadow">
              <Image
                src="/images/logo-school.png"
                alt="Logo SDN Muara Babuat 2"
                width={28}
                height={28}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="text-secondary font-bold">Portal Informasi Resmi SD Negeri Muara Babuat 2</span>
          </div>

          {/* Headline - Full-width high impact, unbroken typography */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight drop-shadow-lg">
            Selamat Datang di <br />
            <span className="text-secondary drop-shadow-xl">
              SD Negeri Muara Babuat 2
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-white leading-relaxed font-medium max-w-2xl drop-shadow-md">
            Membangun generasi yang berkarakter, berprestasi, dan siap menghadapi masa depan melalui pendidikan dasar yang inklusif, inovatif, dan terpercaya.
          </p>

          {/* CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/ppdb"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-primary font-extrabold text-base shadow-2xl hover:bg-yellow-400 hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group"
            >
              Informasi PPDB 2026/2027
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </Link>
            
            <Link
              href="/profil"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/40 hover:bg-black/55 text-white font-bold text-base border border-white/30 hover:border-white/50 backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Profil Sekolah
              <ChevronRight className="w-5 h-5 text-secondary shrink-0" />
            </Link>
          </div>

          {/* Key Feature Badges Grid */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/25">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-secondary text-primary flex items-center justify-center font-bold shrink-0 shadow-md">
                <School className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-[11px] text-white/80 font-medium uppercase tracking-wider">Status Sekolah</div>
                <div className="text-sm font-bold text-white leading-snug">Negeri Resmi</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-secondary text-primary flex items-center justify-center font-bold shrink-0 shadow-md">
                <UserCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-[11px] text-white/80 font-medium uppercase tracking-wider">Tenaga Pengajar</div>
                <div className="text-sm font-bold text-white leading-snug">Terakreditasi</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-secondary text-primary flex items-center justify-center font-bold shrink-0 shadow-md">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-[11px] text-white/80 font-medium uppercase tracking-wider">Pendidikan</div>
                <div className="text-sm font-bold text-white leading-snug">Inklusif & Modern</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
