"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { gallery } from "@/lib/data"

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Galeri"
        title="Momen & Dokumentasi"
        description="Cuplikan kegiatan mengajar, pelatihan, dan berkarya."
      />

      {/* Masonry sederhana memakai CSS columns */}
      <div className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
        {gallery.map((item, i) => (
          <motion.button
            key={i}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden rounded-3xl ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.caption}
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 text-left text-sm font-semibold text-white">
              {item.caption}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Tutup"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[active].src || "/placeholder.svg"}
                alt={gallery[active].caption}
                className="max-h-[80vh] w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-3 text-center text-sm font-semibold text-white/90">
                {gallery[active].caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
