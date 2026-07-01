"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Award, Eye, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { certificates } from "@/lib/data"

export function Certificates() {
  const [preview, setPreview] = useState<(typeof certificates)[number] | null>(null)

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Sertifikat"
        title="Pelatihan & Sertifikasi"
        description="Komitmen untuk terus belajar dan berkembang sebagai pendidik."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                type="button"
                onClick={() => setPreview(cert)}
                className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-800">
                  <Eye className="h-4 w-4" />
                  Pratinjau
                </span>
              </button>
            </div>
            <div className="flex items-center gap-3 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold leading-tight text-foreground">{cert.title}</h3>
                <span className="text-sm text-muted-foreground">{cert.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Preview modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setPreview(null)}
                aria-label="Tutup"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={preview.image || "/placeholder.svg"} alt={preview.title} className="w-full object-cover" />
              <div className="p-5 text-center">
                <h3 className="font-display text-xl text-foreground">{preview.title}</h3>
                <span className="text-sm text-muted-foreground">{preview.year}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
