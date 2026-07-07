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
