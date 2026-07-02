// =============================================================
// Data dummy portofolio — mudah diganti.
// Semua teks & angka di sini bisa kamu edit tanpa menyentuh komponen.
// =============================================================

export const profile = {
  name: "Nur Tahjud Yaumil, S.Pd",
  role: "Menghubungkan Pendidikan dengan Teknologi",
  tagline:
    "Menggabungkan pedagogi, teknologi, dan kecerdasan buatan untuk menghadirkan pengalaman belajar yang modern, interaktif, dan berpusat pada peserta didik.",
  aboutDescription:
    "Sebagai pendidik sekaligus pengembang media pembelajaran digital, saya percaya bahwa teknologi bukan sekadar alat, tetapi jembatan untuk menciptakan pengalaman belajar yang lebih efektif, kreatif, dan menyenangkan. Melalui pemanfaatan Artificial Intelligence, desain pembelajaran modern, serta berbagai platform digital, saya berupaya membantu guru dan peserta didik menghadapi tantangan pendidikan di era transformasi digital.",
  photo: "/profile.png",
  location: "Indonesia",
  email: "nurtahjud@example.com",
  whatsapp: "https://wa.me/6281234567890",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
}

// Navigasi utama (dipakai navbar + active section indicator)
export const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "portfolio", label: "Portofolio" },
  { id: "experience", label: "Pengalaman" },
  { id: "certificates", label: "Sertifikat" },
  { id: "gallery", label: "Galeri" },
  { id: "blog", label: "Artikel" },
  { id: "contact", label: "Kontak" },
]

// --- Tentang Saya ---
export const aboutPoints = [
  "Mengembangkan media pembelajaran digital interaktif.",
  "Merancang aplikasi generator modul ajar berbasis Kurikulum Merdeka.",
  "Mengintegrasikan Artificial Intelligence dalam proses pembelajaran.",
  "Mendesain Canva Website, Flipbook, dan LMS sederhana.",
  "Membangun konten edukasi visual untuk guru dan peserta didik.",
  "Mengembangkan berbagai tools pendidikan berbasis AI.",
  "Mengoptimalkan produktivitas guru melalui teknologi digital.",
  "Berorientasi pada pembelajaran kreatif, adaptif, dan berkelanjutan.",
]

export const stats = [
  {
    value: 48,
    suffix: "+",
    label: "Media Digital",
    description: "Mencakup LKPD, infografis, video, dan media interaktif.",
  },
  {
    value: 24,
    suffix: "+",
    label: "Modul Pembelajaran",
    description: "Berbasis Kurikulum Merdeka dan pembelajaran aktif.",
  },
  {
    value: 120,
    suffix: "+",
    label: "Desain Edukasi",
    description: "Canva, flayer, presentasi, poster, banner, hingga website pembelajaran.",
  },
  {
    value: 30,
    suffix: "+",
    label: "Solusi AI Edukasi",
    description: "Prompt engineering, automasi, generator materi, dan AI assistant.",
  },
]

// --- Keahlian (progress bar) ---
export const skillGroups = [
  {
    category: "AI",
    skills: [
      { name: "ChatGPT", level: 95 },
      { name: "Gemini", level: 88 },
      { name: "Claude", level: 85 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    category: "Desain",
    skills: [
      { name: "Canva", level: 96 },
      { name: "Corel", level: 84 },
      { name: "Figma", level: 75 },
      { name: "Affinity", level: 78 },
    ],
  },
  {
    category: "Web",
    skills: [
      { name: "HTML", level: 88 },
      { name: "CSS", level: 84 },
      { name: "JavaScript", level: 72 },
      { name: "Next.js", level: 68 },
    ],
  },
  {
    category: "Office",
    skills: [
      { name: "Word", level: 95 },
      { name: "Excel", level: 88 },
      { name: "PowerPoint", level: 92 },
      { name: "PDF", level: 86 },
    ],
  },
]

// --- Portofolio ---
export const portfolioCategories = ["Semua", "Media", "Modul", "Desain", "AI"] as const

export type Project = {
  id: number
  title: string
  description: string
  category: string
  image: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Flipbook Interaktif",
    description: "Buku digital interaktif dengan animasi halaman, audio, dan kuis untuk materi Informatika.",
    category: "Media",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Website Canva Edu",
    description: "Website pembelajaran yang dibangun dengan Canva untuk berbagi materi dan tugas kelas.",
    category: "Desain",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Modul Ajar Kurikulum Merdeka",
    description: "Modul ajar lengkap dengan capaian pembelajaran, asesmen, dan diferensiasi.",
    category: "Modul",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "LKPD Digital",
    description: "Lembar kerja peserta didik interaktif yang bisa diisi langsung secara online.",
    category: "Media",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Poster Pendidikan",
    description: "Serangkaian poster edukatif bertema literasi digital dan etika ber-internet.",
    category: "Desain",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Infografis Pembelajaran",
    description: "Infografis ringkas yang merangkum konsep sulit menjadi visual yang mudah dipahami.",
    category: "Desain",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Media Bahasa Inggris",
    description: "Media pembelajaran berbasis AI untuk latihan vocabulary dan listening.",
    category: "AI",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Media Informatika",
    description: "Simulasi dan visualisasi konsep algoritma serta jaringan komputer.",
    category: "Media",
    image: "/placeholder.svg",
  },
  {
    id: 9,
    title: "Media IPS",
    description: "Peta interaktif dan timeline sejarah untuk pembelajaran IPS yang menarik.",
    category: "Media",
    image: "/placeholder.svg",
  },
  {
    id: 10,
    title: "Media PPKn",
    description: "Studi kasus interaktif tentang nilai-nilai Pancasila dan kewarganegaraan.",
    category: "AI",
    image: "/placeholder.svg",
  },
]

// --- Pengalaman (timeline) ---
export const experiences = [
  {
    role: "Guru Informatika MTs",
    period: "2019 — Sekarang",
    description: "Mengajar Informatika, membimbing literasi digital, dan menerapkan pembelajaran berbasis proyek.",
  },
  {
    role: "Pengembang Media Pembelajaran",
    period: "2021 — Sekarang",
    description: "Merancang flipbook, LKPD digital, dan media interaktif untuk berbagai mata pelajaran.",
  },
  {
    role: "Pendidik AI",
    period: "2023 — Sekarang",
    description: "Melatih rekan guru memanfaatkan AI dan prompt engineering dalam pembelajaran sehari-hari.",
  },
  {
    role: "Content Creator Pendidikan",
    period: "2022 — Sekarang",
    description: "Membuat konten edukatif seputar teknologi pendidikan dan tips mengajar di era digital.",
  },
]

// --- Sertifikat ---
export const certificates = [
  { title: "Pelatihan AI untuk Pendidikan", year: "2024", image: "/placeholder.svg" },
  { title: "Canva Certified Educator", year: "2023", image: "/placeholder.svg" },
  { title: "Prompt Engineering Fundamentals", year: "2024", image: "/placeholder.svg" },
  { title: "Kurikulum Merdeka & Modul Ajar", year: "2022", image: "/placeholder.svg" },
  { title: "Digital Learning Design", year: "2023", image: "/placeholder.svg" },
  { title: "Google Workspace for Education", year: "2021", image: "/placeholder.svg" },
]

// --- Galeri ---
export const gallery = [
  { src: "/placeholder.svg", caption: "Workshop AI untuk Guru" },
  { src: "/placeholder.svg", caption: "Kelas Informatika" },
  { src: "/placeholder.svg", caption: "Pameran Media Pembelajaran" },
  { src: "/placeholder.svg", caption: "Sesi Desain Canva" },
  { src: "/placeholder.svg", caption: "Pelatihan Prompt Engineering" },
  { src: "/placeholder.svg", caption: "Project-based Learning" },
]

// --- Blog ---
export const posts = [
  {
    title: "AI untuk Guru: Mulai dari Mana?",
    excerpt: "Panduan praktis memanfaatkan AI untuk menyiapkan materi, asesmen, dan diferensiasi pembelajaran.",
    date: "12 Mei 2024",
    category: "AI",
    image: "/placeholder.svg",
  },
  {
    title: "Cara Membuat Flipbook Interaktif",
    excerpt: "Langkah demi langkah membuat buku digital yang hidup dengan audio, video, dan kuis.",
    date: "28 Apr 2024",
    category: "Media",
    image: "/placeholder.svg",
  },
  {
    title: "Canva untuk Pembelajaran",
    excerpt: "Trik mendesain materi yang menarik dan profesional hanya dengan Canva.",
    date: "10 Apr 2024",
    category: "Desain",
    image: "/placeholder.svg",
  },
  {
    title: "Prompt Engineering untuk Guru",
    excerpt: "Menyusun prompt yang efektif agar AI menghasilkan materi pembelajaran berkualitas.",
    date: "2 Apr 2024",
    category: "AI",
    image: "/placeholder.svg",
  },
  {
    title: "Menyusun Modul Ajar yang Hidup",
    excerpt: "Tips membuat modul ajar Kurikulum Merdeka yang aplikatif dan menyenangkan.",
    date: "20 Mar 2024",
    category: "Modul",
    image: "/placeholder.svg",
  },
  {
    title: "Gamifikasi di Kelas Informatika",
    excerpt: "Mengubah pembelajaran menjadi permainan untuk meningkatkan keterlibatan siswa.",
    date: "8 Mar 2024",
    category: "Media",
    image: "/placeholder.svg",
  },
]
