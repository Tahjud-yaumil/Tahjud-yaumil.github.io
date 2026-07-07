import dynamic from "next/dynamic"

// Komponen di atas fold (dimuat langsung)
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/hero"

// Komponen di bawah fold (code splitting — JS lebih ringan di awal)
const About = dynamic(() => import("@/components/about").then((m) => m.About))
const Skills = dynamic(() => import("@/components/skills").then((m) => m.Skills))
const Portfolio = dynamic(() => import("@/components/portfolio").then((m) => m.Portfolio))
const Experience = dynamic(() => import("@/components/experience").then((m) => m.Experience))
const Certificates = dynamic(() => import("@/components/certificates").then((m) => m.Certificates))
const Gallery = dynamic(() => import("@/components/gallery").then((m) => m.Gallery))
const Blog = dynamic(() => import("@/components/blog").then((m) => m.Blog))
const Contact = dynamic(() => import("@/components/contact").then((m) => m.Contact))
const Footer = dynamic(() => import("@/components/footer").then((m) => m.Footer))

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Certificates />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
