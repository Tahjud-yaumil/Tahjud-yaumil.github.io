"use client"

import { ArrowUp, Mail, MessageCircle, GraduationCap } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile, navLinks } from "@/lib/data"

export function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const socials = [
    { icon: Mail, href: `mailto:${profile.email}`, label: "Surel" },
    { icon: MessageCircle, href: profile.whatsapp, label: "WhatsApp" },
    { icon: GithubIcon, href: profile.github, label: "GitHub" },
    { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
  ]

  const scrollTo = (id: string) => {
    if (id === "home") return toTop()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl text-primary">Nur Tahjud</span>
            </div>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Navigasi</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Terhubung</h3>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}. Dibuat dengan sepenuh hati.
          </p>
          <button
            onClick={toTop}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
          >
            <ArrowUp className="h-4 w-4" />
            Ke Atas
          </button>
        </div>
      </div>
    </footer>
  )
}
