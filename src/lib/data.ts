export interface SchoolProfile {
  school_name: string;
  hero_headline: string;
  hero_subheadline: string;
  headmaster_name: string;
  headmaster_nip: string;
  headmaster_photo: string;
  headmaster_speech: string;
  visi: string;
  misi: string[];
  sejarah_text: string;
  sejarah_timeline: { year: string; title: string; description: string }[];
  address: string;
  email: string;
  phone: string;
}

export interface TeacherStats {
  pns_count: number | string;
  pppk_count: number | string;
  kontrak_count: number | string;
  total: number | string;
}

export interface StudentStats {
  kelas_1: number | string;
  kelas_2: number | string;
  kelas_3: number | string;
  kelas_4: number | string;
  kelas_5: number | string;
  kelas_6: number | string;
  total: number | string;
}

export interface Extracurricular {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  schedule: string;
  image_url: string;
}

export interface PPDBAnnouncement {
  id: string;
  title: string;
  category: string;
  publish_date: string;
  summary: string;
  content: string;
  attachment_url?: string;
  attachment_name?: string;
  is_pinned?: boolean;
}

// INITIAL DATA WITH REALISTIC DUMMY DATA FOR DEMO & PROFIL SEKOLAH
export const initialSchoolProfile: SchoolProfile = {
  school_name: "SD Negeri Muara Babuat 2",
  hero_headline: "Selamat Datang di SD Negeri Muara Babuat 2",
  hero_subheadline: "Membangun generasi yang berkarakter, berprestasi, dan siap menghadapi masa depan melalui pendidikan dasar yang inklusif, inovatif, dan terpercaya.",
  headmaster_name: "Tipei, S.Pd",
  headmaster_nip: "19780512 200312 1 004",
  headmaster_photo: "/images/headmaster.jpg",
  headmaster_speech: "Selamat datang di website resmi SD Negeri Muara Babuat 2. Website ini hadir sebagai wujud transparansi, kemudahan akses informasi, serta keterbukaan bagi seluruh masyarakat, orang tua murid, dan calon peserta didik baru. Kami terus berkomitmen memberikan layanan pendidikan terbaik berbasis nilai-nilai kebangsaan.",
  visi: "Terwujudnya Peserta Didik yang Beriman, Berakhlak Mulia, Cerdas, Berprestasi, dan Peduli Lingkungan.",
  misi: [
    "Menanamkan nilai-nilai keagamaan dan budi pekerti luhur dalam kehidupan sehari-hari.",
    "Melaksanakan pembelajaran yang efektif, inovatif, dan menyenangkan berbasis teknologi digital.",
    "Mengembangkan minat, bakat, serta potensi peserta didik melalui kegiatan ekstrakurikuler terpadu.",
    "Mewujudkan lingkungan sekolah yang bersih, sehat, aman, dan berwawasan lingkungan hidup."
  ],
  sejarah_text: "SD Negeri Muara Babuat 2 didirikan sebagai lembaga pendidikan dasar pemerintah di Kecamatan Permata Intan, Kabupaten Murung Raya. Berawal dari semangat masyarakat lokal akan pentingnya pendidikan anak usia sekolah, SD Negeri Muara Babuat 2 terus berkembang menjadi salah satu sekolah dasar terdepan dalam mutu pembelajaran, pembinaan kedisiplinan, dan fasilitas penunjang di daerah setempat.",
  sejarah_timeline: [
    {
      year: "Pendirian",
      title: "Berdirinya SD Negeri Muara Babuat 2",
      description: "Sekolah resmi didirikan oleh Pemerintah Daerah dan mulai mengoperasikan proses belajar mengajar pertama kali."
    },
    {
      year: "Pengembangan",
      title: "Pembangunan Gedung & Perpustakaan",
      description: "Penambahan ruang kelas baru, laboratorium komputer, perpustakaan digital, serta lapangan olahraga."
    },
    {
      year: "Era Digital",
      title: "Transformasi Pembelajaran & Portal Digital",
      description: "Penerapan kurikulum berbasis digital dan peluncuran website portal informasi kelembagaan resmi."
    }
  ],
  address: "Kecamatan Permata Intan, Kabupaten Murung Raya, Kalimantan Tengah 73952",
  email: "sdnmuarababuat2@sch.id",
  phone: "(0528) 2234-8901"
};

export const initialTeacherStats: TeacherStats = {
  pns_count: 8,
  pppk_count: 5,
  kontrak_count: 3,
  total: 16
};

export const initialStudentStats: StudentStats = {
  kelas_1: 28,
  kelas_2: 30,
  kelas_3: 27,
  kelas_4: 32,
  kelas_5: 29,
  kelas_6: 31,
  total: 177
};

export const initialExtracurriculars: Extracurricular[] = [
  {
    id: "ex-1",
    title: "Pramuka Penggalang & Siaga",
    description: "Kegiatan kepramukaan wajib untuk melatih kemandirian, kedisiplinan, kerja sama tim, dan jiwa kepemimpinan.",
    icon_name: "Compass",
    schedule: "Setiap Jumat Sore (15.00 - 17.00 WIB)",
    image_url: "/images/ekskul/pramuka.png"
  },
  {
    id: "ex-2",
    title: "Olahraga & Futsal",
    description: "Pembinaan minat dan bakat di bidang futsal, sepak bola mini, serta kejuaraan olahraga antar-sekolah.",
    icon_name: "Trophy",
    schedule: "Setiap Sabtu Pagi (07.30 - 10.00 WIB)",
    image_url: "/images/ekskul/futsal.png"
  },
  {
    id: "ex-3",
    title: "Seni Tari Tradisional",
    description: "Pelestarian budaya daerah melalui seni tari tradisional Dayak Kalimantan dan pentas seni kebudayaan.",
    icon_name: "Sparkles",
    schedule: "Setiap Sabtu Siang (13.00 - 15.00 WIB)",
    image_url: "/images/ekskul/tari.png"
  },
  {
    id: "ex-4",
    title: "Kegiatan Keagamaan & Bina Taqwa",
    description: "Pembiasaan ibadah bersama, tadarus Al-Qur'an, bimbingan akhlak karimah, dan peringatan hari besar islam.",
    icon_name: "BookOpenCheck",
    schedule: "Setiap Jumat Pagi (07.00 - 08.00 WIB)",
    image_url: "/images/ekskul/keagamaan.png"
  }
];

export const initialPPDBAnnouncements: PPDBAnnouncement[] = [
  {
    id: "ppdb-2026-01",
    title: "Pengumuman Pembukaan PPDB Tahun Ajaran 2026/2027",
    category: "PPDB 2026",
    publish_date: "10 Mei 2026",
    summary: "Pendaftaran Penerimaan Peserta Didik Baru (PPDB) SD Negeri Muara Babuat 2 Tahun Ajaran 2026/2027 resmi dibuka secara gratis tanpa dipungut biaya.",
    content: `
      <h3>Informasi Pendaftaran PPDB TA 2026/2027</h3>
      <p>SD Negeri Muara Babuat 2 membuka kesempatan bagi calon peserta didik baru untuk bergabung pada Tahun Ajaran 2026/2027.</p>
      
      <h4>Jadwal Pelaksanaan:</h4>
      <ul>
        <li><strong>Sosialisasi PPDB:</strong> 15 Mei - 31 Mei 2026</li>
        <li><strong>Pendaftaran Fisik & Berkas:</strong> 1 Juni - 15 Juni 2026</li>
        <li><strong>Verifikasi Dokumen:</strong> 16 Juni - 20 Juni 2026</li>
        <li><strong>Pengumuman Hasil Seleksi:</strong> 25 Juni 2026</li>
        <li><strong>Daftar Ulang:</strong> 27 Juni - 30 Juni 2026</li>
      </ul>

      <h4>Syarat Pendaftaran:</h4>
      <ol>
        <li>Usia minimal 6 tahun pada bulan Juli 2026.</li>
        <li>Fotokopi Akta Kelahiran (2 lembar).</li>
        <li>Fotokopi Kartu Keluarga / KK (2 lembar).</li>
        <li>Fotokopi KTP Orang Tua / Wali (2 lembar).</li>
        <li>Pas foto berwarna ukuran 3x4 (3 lembar).</li>
        <li>Mengisi formulir pendaftaran resmi yang disediakan panitia sekolah.</li>
      </ol>
    `,
    attachment_name: "Formulir_Pendaftaran_PPDB_2026.pdf",
    attachment_url: "#",
    is_pinned: true
  },
  {
    id: "ppdb-2026-02",
    title: "Petunjuk Teknis dan Syarat Berkas PPDB Online / Offline",
    category: "Petunjuk Teknis",
    publish_date: "12 Mei 2026",
    summary: "Panduan lengkap pengisian formulir pendaftaran serta kelengkapan dokumen administrasi PPDB bagi orang tua murid.",
    content: `
      <h3>Panduan Kelengkapan Berkas PPDB</h3>
      <p>Bagi orang tua murid yang ingin mendaftarkan putera/puterinya di SD Negeri Muara Babuat 2, harap memperhatikan kelengkapan dokumen administrasi yang wajib dibawa saat pendaftaran di sekretariat PPDB sekolah.</p>
      <p>Panitia melayani pendaftaran setiap hari kerja (Senin - Sabtu) pukul 08.00 - 12.00 WIB.</p>
    `,
    attachment_name: "Juknis_PPDB_SDN_Muara_Babuat_2.pdf",
    attachment_url: "#",
    is_pinned: false
  }
];
