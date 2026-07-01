"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Search, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { projects, portfolioCategories, type Project } from "@/lib/data"

export function Portfolio() {
  const [category, setCategory] = useState<string>("Semua")
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<Project | null>(null)

  // Filter berdasarkan kategori + pencarian judul/deskripsi.
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = category === "Semua" || p.category === category
      const matchQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      return matchCat && matchQuery
    })
  }, [category, query])

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Portofolio"
        title="Karya & Proyek"
        description="Kumpulan media pembelajaran, modul ajar, dan desain yang telah saya buat."
      />

      {/* Pencarian */}
      <div className="mx-auto mb-6 max-w-md">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari karya..."
            className="rounded-full pl-10"
          />
        </div>
      </div>

      {/* Filter kategori */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              category === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid kartu */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.button
              key={project.id}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(project)}
              className="group overflow-hidden rounded-3xl bg-card text-left shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
                  {project.category}
                </span>
                <h3 className="font-display text-xl text-foreground">{project.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <span className="mt-3 inline-block text-sm font-bold text-primary group-hover:underline">
                  Lihat Detail →
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">Tidak ada karya yang cocok dengan pencarian.</p>
      )}

      {/* Modal detail */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-card shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Tutup"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selected.image || "/placeholder.svg"}
                alt={selected.title}
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
                  {selected.category}
                </span>
                <h3 className="font-display text-2xl text-foreground">{selected.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
