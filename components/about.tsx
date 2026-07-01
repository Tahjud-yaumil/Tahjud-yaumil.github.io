"use client"

import { motion } from "motion/react"
import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { aboutPoints, stats } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Tentang Saya"
        title="Mengajar dengan Sentuhan Teknologi"
        description="Memadukan pedagogi dan kecerdasan buatan untuk pembelajaran yang lebih hidup."
      />

      <div className="grid items-start gap-10 lg:grid-cols-2">
        {/* Kolom kiri: deskripsi + checklist */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border"
        >
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Sebagai Guru Informatika MTs, saya percaya teknologi mampu membuat belajar terasa menyenangkan. Saya
            mengembangkan beragam media pembelajaran digital dan memanfaatkan AI untuk membantu peserta didik memahami
            materi dengan cara yang lebih interaktif.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Kolom kanan: kartu statistik */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-3xl bg-accent/60 p-6 text-center shadow-sm ring-1 ring-border transition-transform hover:scale-[1.03]"
            >
              <span className="font-display text-4xl text-primary">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="mt-2 text-sm font-semibold text-accent-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
