"use client"

import { motion } from "motion/react"

type Props = {
  eyebrow?: string
  title: string
  description?: string
}

// Judul section dengan animasi slide-up saat masuk viewport.
export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-4xl text-foreground sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </motion.div>
  )
}
