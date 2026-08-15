-- ========================================================
-- SCHEMA SD NEGERI MUARA BABUAT 2 DATABASE (SUPABASE)
-- ========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. SCHOOL PROFILE TABLE
CREATE TABLE IF NOT EXISTS school_profile (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  school_name TEXT NOT NULL DEFAULT 'SD Negeri Muara Babuat 2',
  hero_headline TEXT NOT NULL,
  hero_subheadline TEXT NOT NULL,
  headmaster_name TEXT NOT NULL,
  headmaster_nip TEXT NOT NULL,
  headmaster_photo TEXT NOT NULL,
  headmaster_speech TEXT NOT NULL,
  visi TEXT NOT NULL,
  misi JSONB NOT NULL DEFAULT '[]'::jsonb,
  sejarah_text TEXT NOT NULL,
  sejarah_timeline JSONB NOT NULL DEFAULT '[]'::jsonb,
  address TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. TEACHER STATS TABLE
CREATE TABLE IF NOT EXISTS teacher_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pns_count INTEGER NOT NULL DEFAULT 0,
  pppk_count INTEGER NOT NULL DEFAULT 0,
  kontrak_count INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. STUDENT STATS TABLE
CREATE TABLE IF NOT EXISTS student_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  kelas_1 INTEGER NOT NULL DEFAULT 0,
  kelas_2 INTEGER NOT NULL DEFAULT 0,
  kelas_3 INTEGER NOT NULL DEFAULT 0,
  kelas_4 INTEGER NOT NULL DEFAULT 0,
  kelas_5 INTEGER NOT NULL DEFAULT 0,
  kelas_6 INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. EXTRA CURRICULAR TABLE
CREATE TABLE IF NOT EXISTS extracurriculars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  schedule TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5. PPDB ANNOUNCEMENTS TABLE
CREATE TABLE IF NOT EXISTS ppdb_announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Informasi Umum',
  publish_date DATE NOT NULL DEFAULT CURRENT_DATE,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  attachment_url TEXT,
  attachment_name TEXT,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS POLICIES (Allow public read, authenticated insert/update)
ALTER TABLE school_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE extracurriculars ENABLE ROW LEVEL SECURITY;
ALTER TABLE ppdb_announcements ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public Read School Profile" ON school_profile FOR SELECT USING (true);
CREATE POLICY "Public Read Teacher Stats" ON teacher_stats FOR SELECT USING (true);
CREATE POLICY "Public Read Student Stats" ON student_stats FOR SELECT USING (true);
CREATE POLICY "Public Read Extracurriculars" ON extracurriculars FOR SELECT USING (true);
CREATE POLICY "Public Read PPDB Announcements" ON ppdb_announcements FOR SELECT USING (true);

-- Authenticated Full Access Policies
CREATE POLICY "Admin All School Profile" ON school_profile FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Teacher Stats" ON teacher_stats FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Student Stats" ON student_stats FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Extracurriculars" ON extracurriculars FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All PPDB Announcements" ON ppdb_announcements FOR ALL USING (auth.role() = 'authenticated');
