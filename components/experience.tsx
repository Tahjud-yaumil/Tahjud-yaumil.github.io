"use client"

import { motion } from "motion/react"
import { Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pengalaman"
          title="Perjalanan Karier"
          description="Peran dan kontribusi saya di dunia pendidikan dan teknologi."
        />

        <div className="relative ml-3 border-l-2 border-border pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Titik timeline */}
              <span className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-secondary/40">
                <Briefcase className="h-3.5 w-3.5" />
              </span>
              <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{exp.period}</span>
                <h3 className="mt-1 font-display text-xl text-foreground">{exp.role}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
