import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, FileText, Pin } from 'lucide-react';
import { PPDBAnnouncement } from '@/lib/data';

interface PPDBAnnouncementCardProps {
  announcement: PPDBAnnouncement;
}

export default function PPDBAnnouncementCard({ announcement }: PPDBAnnouncementCardProps) {
  return (
    <div className="bg-surface border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-elevated hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group relative">
      
      {announcement.is_pinned && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/20 text-primary font-bold text-xs">
          <Pin className="w-3.5 h-3.5 text-primary fill-primary" />
          <span>Disematkan</span>
        </div>
      )}

      <div>
        <div className="flex items-center gap-3 text-xs font-semibold text-on-surface-variant mb-3">
          <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-bold">
            {announcement.category}
          </span>
          <span className="flex items-center gap-1 text-on-surface-variant/80">
            <Calendar className="w-3.5 h-3.5 text-secondary" />
            {announcement.publish_date}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-on-surface tracking-tight group-hover:text-primary transition-colors leading-snug mb-3">
          <Link href={`/ppdb/${announcement.id}`}>
            {announcement.title}
          </Link>
        </h3>

        <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
          {announcement.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-outline-variant/40 flex items-center justify-between">
        {announcement.attachment_name ? (
          <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
            <FileText className="w-4 h-4 text-secondary" />
            <span className="truncate max-w-[160px]">{announcement.attachment_name}</span>
          </div>
        ) : (
          <span className="text-xs text-on-surface-variant">Pengumuman Resmi</span>
        )}

        <Link
          href={`/ppdb/${announcement.id}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary-container transition-colors"
        >
          Baca Selengkapnya
          <ArrowRight className="w-3.5 h-3.5 text-secondary" />
        </Link>
      </div>

    </div>
  );
}
