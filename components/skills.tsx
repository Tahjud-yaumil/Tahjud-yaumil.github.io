"use client"

import { motion } from "motion/react"
import { Brain, Palette, Code2, FileText, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/lib/data"

// Ikon untuk tiap kategori keahlian.
const categoryIcons: Record<string, LucideIcon> = {
  AI: Brain,
  Desain: Palette,
  Web: Code2,
  Office: FileText,
}

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Keahlian"
          title="Tools & Kemampuan"
          description="Berbagai alat yang saya gunakan setiap hari untuk berkarya di dunia pendidikan digital."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = categoryIcons[group.category] ?? Brain
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.05 }}
                className="rounded-3xl bg-card p-7 shadow-sm ring-1 ring-border"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl text-foreground">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm font-semibold">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
