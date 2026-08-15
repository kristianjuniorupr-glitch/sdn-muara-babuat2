import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, FileText, Download, Share2, Tag, Pin } from 'lucide-react';
import { initialPPDBAnnouncements } from '@/lib/data';
import ShareButton from '@/components/ShareButton';

interface DetailPPDBPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return initialPPDBAnnouncements.map((a) => ({
    id: a.id,
  }));
}

export default function DetailPPDBPage({ params }: DetailPPDBPageProps) {
  const announcement = initialPPDBAnnouncements.find((a) => a.id === params.id);

  if (!announcement) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 bg-surface text-on-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/ppdb"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-container transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Daftar Pengumuman PPDB
          </Link>
        </div>

        {/* Detail Article Card */}
        <article className="bg-background border border-outline-variant/60 rounded-2xl p-6 sm:p-10 shadow-card">
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-on-surface-variant mb-4">
            <span className="px-3 py-1 rounded bg-primary/10 text-primary font-bold">
              {announcement.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-secondary" />
              Dipublikasikan: {announcement.publish_date}
            </span>
            {announcement.is_pinned && (
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/20 text-primary font-bold">
                <Pin className="w-3.5 h-3.5 fill-primary" />
                Pengumuman Penting
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">
            {announcement.title}
          </h1>

          {/* Summary Quote Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-surface border-l-4 border-primary text-sm sm:text-base text-on-surface italic leading-relaxed mb-8">
            {announcement.summary}
          </div>

          {/* Body Content */}
          <div
            className="prose prose-emerald max-w-none text-on-surface leading-relaxed space-y-4 text-sm sm:text-base [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-primary [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-on-surface [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mt-1"
            dangerouslySetInnerHTML={{ __html: announcement.content }}
          />

          {/* Attachment Box if document exists */}
          {announcement.attachment_name && (
            <div className="mt-10 pt-6 border-t border-outline-variant/60">
              <h3 className="text-base font-bold text-on-surface mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Lampiran Dokumen Resmi
              </h3>
              
              <div className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold shrink-0">
                    PDF
                  </div>
                  <div>
                    <div className="text-sm font-bold text-on-surface">
                      {announcement.attachment_name}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      Format PDF • Dokumen Resmi PPDB SDN Muara Babuat 2
                    </div>
                  </div>
                </div>

                <a
                  href={announcement.attachment_url || '#'}
                  download
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4 text-secondary" />
                  Unduh Dokumen
                </a>
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="mt-10 pt-6 border-t border-outline-variant/60 flex items-center justify-between">
            <Link
              href="/ppdb"
              className="inline-flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Pengumuman
            </Link>

            <ShareButton title={announcement.title} />
          </div>

        </article>

      </div>
    </div>
  );
}
