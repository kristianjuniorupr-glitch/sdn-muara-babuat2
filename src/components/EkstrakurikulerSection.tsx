import React from 'react';
import Image from 'next/image';
import { Activity, Calendar, Compass, Trophy, BookOpenCheck, HeartPulse, ChevronRight, Sparkles } from 'lucide-react';
import { Extracurricular } from '@/lib/data';

interface EkstrakurikulerSectionProps {
  items: Extracurricular[];
}

export default function EkstrakurikulerSection({ items }: EkstrakurikulerSectionProps) {
  // Map icon names to modern Lucide components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-primary" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-primary" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-5 h-5 text-primary" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-primary" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-primary" />;
      default:
        return <Activity className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="py-5 md:py-7 bg-surface text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Activity className="w-4 h-4 text-primary" />
            Pengembangan Bakat & Karakter
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Kegiatan Ekstrakurikuler
          </h2>
          <p className="mt-3 text-base text-on-surface-variant leading-relaxed">
            Wadah kegiatan siswa SD Negeri Muara Babuat 2 untuk mengembangkan minat, bakat, kedisiplinan, serta keterampilan sosial.
          </p>
        </div>

        {/* Responsive Card Grid with Images & Modern Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-background border border-outline-variant/60 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Extracurricular Image Header */}
                <div className="relative w-full h-44 overflow-hidden bg-surface-container">
                  <Image
                    src={item.image_url}
                    alt={`Kegiatan Ekstrakurikuler ${item.title}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Modern Icon Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-secondary text-primary shadow-lg flex items-center justify-center font-bold border border-white/20">
                    {renderIcon(item.icon_name)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-on-surface tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Schedule Footer */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs font-semibold text-primary">
                  <div className="flex items-center gap-1.5 truncate">
                    <Calendar className="w-4 h-4 text-secondary shrink-0" />
                    <span className="truncate">{item.schedule}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
