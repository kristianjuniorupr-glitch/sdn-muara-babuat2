import React from 'react';
import Image from 'next/image';
import { User, ShieldCheck, Quote } from 'lucide-react';
import { SchoolProfile } from '@/lib/data';

interface KepalaSekolahSectionProps {
  profile: SchoolProfile;
}

export default function KepalaSekolahSection({ profile }: KepalaSekolahSectionProps) {
  return (
    <section className="py-5 md:py-7 bg-surface-container-low border-y border-surface-variant text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Pimpinan Sekolah
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Sambutan Kepala Sekolah
          </h2>
        </div>

        {/* Card Container */}
        <div className="bg-surface border border-outline-variant/60 rounded-2xl shadow-institutional p-4 sm:p-5 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
            
            {/* Image (Focal Point) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-48 h-60 sm:w-60 sm:h-72 rounded-xl overflow-hidden shadow-lg border-4 border-primary/20 bg-surface-container shrink-0">
                <Image
                  src={profile.headmaster_photo}
                  alt={`Foto Kepala Sekolah ${profile.headmaster_name}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Headmaster Info Badge */}
              <div className="mt-4 text-center">
                <h3 className="text-lg sm:text-xl font-extrabold text-on-surface tracking-tight">
                  {profile.headmaster_name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                  Kepala Sekolah SD Negeri Muara Babuat 2
                </p>
                <div className="inline-block mt-2 px-3 py-1 rounded-md bg-surface-container text-on-surface-variant font-mono text-xs border border-outline-variant">
                  NIP: {profile.headmaster_nip}
                </div>
              </div>
            </div>

            {/* Speech / Information Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20 text-primary flex items-center justify-center mb-2">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <h4 className="text-xl font-extrabold text-primary leading-snug">
                Pendidikan Berkualitas untuk Masa Depan Cerah Putera-Puteri Bangsa
              </h4>

              <p className="text-base text-on-surface-variant leading-relaxed italic">
                &ldquo;{profile.headmaster_speech}&rdquo;
              </p>

              <div className="pt-4 border-t border-outline-variant/40 text-xs text-on-surface-variant flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span>SD Negeri Muara Babuat 2 — Murung Raya, Kalimantan Tengah</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
