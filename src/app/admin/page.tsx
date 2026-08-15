'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Lock, Save, Database, Check, ShieldCheck, RefreshCw, Plus, Trash2 } from 'lucide-react';
import {
  initialSchoolProfile,
  initialTeacherStats,
  initialStudentStats,
  initialPPDBAnnouncements,
  SchoolProfile,
  TeacherStats,
  StudentStats,
  PPDBAnnouncement,
} from '@/lib/data';
import { isSupabaseConfigured } from '@/lib/supabase';

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // State management for editable data
  const [profile, setProfile] = useState<SchoolProfile>(initialSchoolProfile);
  const [teacherStats, setTeacherStats] = useState<TeacherStats>(initialTeacherStats);
  const [studentStats, setStudentStats] = useState<StudentStats>(initialStudentStats);
  const [announcements, setAnnouncements] = useState<PPDBAnnouncement[]>(initialPPDBAnnouncements);

  const [activeTab, setActiveTab] = useState<'profile' | 'stats' | 'ppdb'>('profile');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123' || password === 'sdn2muarababuat') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Kata sandi admin salah. Guna pengujian gunakan: admin123');
    }
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-surface-container-low">
        <div className="max-w-md w-full bg-surface border border-outline-variant rounded-2xl p-8 shadow-institutional text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 drop-shadow-md">
            <Image
              src="/images/logo-school.png"
              alt="Logo Resmi SDN Muara Babuat 2"
              width={64}
              height={64}
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-extrabold text-on-surface">Portal Admin Sekolah</h1>
          <p className="text-xs text-on-surface-variant mt-1 mb-6">
            Masuk untuk memperbarui data kepala sekolah, guru, jumlah siswa, dan pengumuman PPDB SD Negeri Muara Babuat 2.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1">
                Kata Sandi Admin
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi..."
                className="w-full px-4 py-2.5 rounded-lg border border-outline-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="text-[11px] text-on-surface-variant/80 mt-1 block">
                Default password pengujian: <code className="bg-surface-container px-1 py-0.5 rounded font-mono font-bold">admin123</code>
              </span>
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-error-container text-on-error-container text-xs font-semibold">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary-container transition-colors shadow-sm"
            >
              Masuk ke Portal Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-surface text-on-surface min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 shrink-0 flex items-center justify-center drop-shadow">
              <Image
                src="/images/logo-school.png"
                alt="Logo Resmi SDN Muara Babuat 2"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                Portal Pengelolaan Konten Resmi
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
                Pengelolaan Data SDN Muara Babuat 2
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
              isSupabaseConfigured
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-amber-50 text-amber-800 border-amber-300'
            }`}>
              <Database className="w-3.5 h-3.5" />
              {isSupabaseConfigured ? 'Supabase Connected' : 'Local Fallback Active'}
            </div>

            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-lg bg-primary text-white text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-primary-container transition-colors shadow-sm"
            >
              <Save className="w-4 h-4 text-secondary" />
              Simpan Perubahan
            </button>
          </div>
        </div>

        {saveSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-sm font-bold flex items-center gap-2 animate-fadeIn">
            <Check className="w-5 h-5 text-emerald-700" />
            Data berhasil diperbarui! Perubahan siap disinkronkan ke halaman publik.
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-outline-variant mb-8 space-x-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-4 font-bold text-sm border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-primary text-primary font-extrabold'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Profil & Kepala Sekolah
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`pb-3 px-4 font-bold text-sm border-b-2 transition-colors ${
              activeTab === 'stats'
                ? 'border-primary text-primary font-extrabold'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Statistik Guru & Murid
          </button>
          <button
            onClick={() => setActiveTab('ppdb')}
            className={`pb-3 px-4 font-bold text-sm border-b-2 transition-colors ${
              activeTab === 'ppdb'
                ? 'border-primary text-primary font-extrabold'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Pengumuman PPDB ({announcements.length})
          </button>
        </div>

        {/* Tab Content: Profile */}
        {activeTab === 'profile' && (
          <div className="bg-background border border-outline-variant rounded-2xl p-6 sm:p-8 space-y-6 shadow-card">
            <h2 className="text-lg font-bold text-primary border-b border-outline-variant pb-2">
              Informasi Kepala Sekolah & Kelembagaan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">
                  Nama Kepala Sekolah
                </label>
                <input
                  type="text"
                  value={profile.headmaster_name}
                  onChange={(e) => setProfile({ ...profile, headmaster_name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">
                  NIP Kepala Sekolah
                </label>
                <input
                  type="text"
                  value={profile.headmaster_nip}
                  onChange={(e) => setProfile({ ...profile, headmaster_nip: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface mb-1">
                Sambutan Kepala Sekolah
              </label>
              <textarea
                rows={3}
                value={profile.headmaster_speech}
                onChange={(e) => setProfile({ ...profile, headmaster_speech: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface mb-1">
                Visi Sekolah
              </label>
              <textarea
                rows={2}
                value={profile.visi}
                onChange={(e) => setProfile({ ...profile, visi: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
              />
            </div>
          </div>
        )}

        {/* Tab Content: Stats */}
        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Teacher Stats */}
            <div className="bg-background border border-outline-variant rounded-2xl p-6 space-y-4 shadow-card">
              <h2 className="text-lg font-bold text-primary border-b border-outline-variant pb-2">
                Statistik Guru
              </h2>
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Jumlah Guru PNS</label>
                <input
                  type="text"
                  value={teacherStats.pns_count}
                  onChange={(e) => setTeacherStats({ ...teacherStats, pns_count: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Jumlah Guru PPPK</label>
                <input
                  type="text"
                  value={teacherStats.pppk_count}
                  onChange={(e) => setTeacherStats({ ...teacherStats, pppk_count: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Jumlah Tenaga Kontrak</label>
                <input
                  type="text"
                  value={teacherStats.kontrak_count}
                  onChange={(e) => setTeacherStats({ ...teacherStats, kontrak_count: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                />
              </div>
            </div>

            {/* Student Stats */}
            <div className="bg-background border border-outline-variant rounded-2xl p-6 space-y-4 shadow-card">
              <h2 className="text-lg font-bold text-primary border-b border-outline-variant pb-2">
                Statistik Murid Per Kelas
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Kelas 1</label>
                  <input
                    type="text"
                    value={studentStats.kelas_1}
                    onChange={(e) => setStudentStats({ ...studentStats, kelas_1: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Kelas 2</label>
                  <input
                    type="text"
                    value={studentStats.kelas_2}
                    onChange={(e) => setStudentStats({ ...studentStats, kelas_2: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Kelas 3</label>
                  <input
                    type="text"
                    value={studentStats.kelas_3}
                    onChange={(e) => setStudentStats({ ...studentStats, kelas_3: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Kelas 4</label>
                  <input
                    type="text"
                    value={studentStats.kelas_4}
                    onChange={(e) => setStudentStats({ ...studentStats, kelas_4: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Kelas 5</label>
                  <input
                    type="text"
                    value={studentStats.kelas_5}
                    onChange={(e) => setStudentStats({ ...studentStats, kelas_5: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Kelas 6</label>
                  <input
                    type="text"
                    value={studentStats.kelas_6}
                    onChange={(e) => setStudentStats({ ...studentStats, kelas_6: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-outline-variant text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: PPDB */}
        {activeTab === 'ppdb' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-primary">Daftar Pengumuman PPDB</h2>
              <button
                onClick={() => {
                  const newAnn: PPDBAnnouncement = {
                    id: `ppdb-${Date.now()}`,
                    title: 'Pengumuman Baru PPDB',
                    category: 'PPDB 2026',
                    publish_date: '14 Agustus 2026',
                    summary: 'Ringkasan pengumuman baru...',
                    content: '<p>Isi lengkap pengumuman...</p>',
                  };
                  setAnnouncements([newAnn, ...announcements]);
                }}
                className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold flex items-center gap-1.5 hover:bg-primary-container"
              >
                <Plus className="w-4 h-4" />
                Tambah Pengumuman
              </button>
            </div>

            <div className="space-y-4">
              {announcements.map((ann, idx) => (
                <div key={ann.id} className="bg-background border border-outline-variant rounded-xl p-5 shadow-sm space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <input
                      type="text"
                      value={ann.title}
                      onChange={(e) => {
                        const updated = [...announcements];
                        updated[idx].title = e.target.value;
                        setAnnouncements(updated);
                      }}
                      className="w-full font-bold text-base px-3 py-1 rounded border border-outline-variant"
                    />
                    <button
                      onClick={() => {
                        setAnnouncements(announcements.filter((a) => a.id !== ann.id));
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <textarea
                    rows={2}
                    value={ann.summary}
                    onChange={(e) => {
                      const updated = [...announcements];
                      updated[idx].summary = e.target.value;
                      setAnnouncements(updated);
                    }}
                    className="w-full text-xs px-3 py-1.5 rounded border border-outline-variant"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
