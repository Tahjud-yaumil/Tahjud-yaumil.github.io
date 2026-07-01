import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
import { Experience } from "@/components/experience"
import { Certificates } from "@/components/certificates"
import { Gallery } from "@/components/gallery"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

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
