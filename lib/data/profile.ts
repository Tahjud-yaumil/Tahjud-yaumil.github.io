// Data profil — email, WA, dan sosial media via environment variable untuk keamanan.

export const profile = {
  name: "Nur Tahjud Yaumil, S.Pd",
  role: "Menghubungkan Pendidikan dengan Teknologi",
  tagline:
    "Menggabungkan pedagogi, teknologi, dan kecerdasan buatan untuk menghadirkan pengalaman belajar yang modern, interaktif, dan berpusat pada peserta didik.",
  aboutDescription:
    "Sebagai pendidik sekaligus pengembang media pembelajaran digital, saya percaya bahwa teknologi bukan sekadar alat, tetapi jembatan untuk menciptakan pengalaman belajar yang lebih efektif, kreatif, dan menyenangkan. Melalui pemanfaatan Artificial Intelligence, desain pembelajaran modern, serta berbagai platform digital, saya berupaya membantu guru dan peserta didik menghadapi tantangan pendidikan di era transformasi digital.",
  photo: "/profile.png",
  location: "Indonesia",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nurtahjud@example.com",
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "https://wa.me/6281234567890",
  github: process.env.NEXT_PUBLIC_CONTACT_GITHUB || "https://github.com/",
  linkedin: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || "https://linkedin.com/in/",
}
