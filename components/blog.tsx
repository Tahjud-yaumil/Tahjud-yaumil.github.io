"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { CalendarDays, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { posts as blogPosts } from "@/lib/data"

const PAGE_SIZE = 4

export function Blog() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(blogPosts.length / PAGE_SIZE)
  const visible = blogPosts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section id="blog" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Artikel"
          title="Catatan & Tulisan"
          description="Berbagi ide, tips, dan pengalaman seputar AI dan pembelajaran digital."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {visible.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {post.date}
                </div>
                <h3 className="text-lg font-bold leading-snug text-balance">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/80">
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Halaman ${i + 1}`}
                className={`h-3 rounded-full transition-all ${
                  i === page ? "w-8 bg-primary" : "w-3 bg-muted hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
