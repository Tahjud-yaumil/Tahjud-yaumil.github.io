// Barrel export — data terpecah per-seksi (compact + aman).
// Setiap seksi bisa di-load terpisah via dynamic import.
// Data sensitif (email, WA, sosial media) via env var (lihat .env.example).

export { profile } from "./data/profile"
export { navLinks } from "./data/navigation"
export { aboutPoints, stats } from "./data/about"
export { skillGroups } from "./data/skills"
export { portfolioCategories, projects, type Project } from "./data/portfolio"
export { experiences } from "./data/experience"
export { certificates } from "./data/certificates"
export { gallery } from "./data/gallery"
export { posts } from "./data/blog"
