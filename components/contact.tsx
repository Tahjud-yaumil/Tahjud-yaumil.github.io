"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "motion/react"
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { profile } from "@/lib/data"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const details = [
    { icon: Mail, label: "Surel", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "WhatsApp", value: "Chat lewat WhatsApp", href: profile.whatsapp },
    { icon: MapPin, label: "Lokasi", value: profile.location, href: undefined },
  ]

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Kontak"
          title="Mari Terhubung"
          description="Tertarik berkolaborasi, mengundang sebagai narasumber, atau sekadar berdiskusi? Kirim pesan!"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {details.map((d) => {
              const Icon = d.icon
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{d.label}</p>
                    <p className="font-semibold">{d.value}</p>
                  </div>
                </div>
              )
              return d.href ? (
                <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <div key={d.label}>{inner}</div>
              )
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Nama</Label>
                <Input id="name" required placeholder="Nama lengkap" className="rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Surel</Label>
                <Input id="email" type="email" required placeholder="email@contoh.com" className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="subject">Subjek</Label>
              <Input id="subject" required placeholder="Judul pesan" className="rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Pesan</Label>
              <Textarea id="message" required rows={5} placeholder="Tulis pesan Anda..." className="rounded-xl" />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  Pesan Terkirim!
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Kirim Pesan
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
