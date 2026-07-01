"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { GraduationCap, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const { resolvedTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Update background saat scroll + lacak section aktif.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Di atas hero (belum scroll) teks putih di atas gambar.
  const onImage = !scrolled
  const isDark = mounted && resolvedTheme === "dark"

  const barClass = onImage
    ? "border-b border-transparent bg-transparent"
    : isDark
      ? "border-b border-white/10 bg-slate-950/90 shadow-lg shadow-black/20 backdrop-blur-xl"
      : "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"

  const textClass = onImage
    ? "text-white"
    : isDark
      ? "text-white"
      : "text-slate-900"

  const mutedTextClass = onImage
    ? "text-white/75 hover:text-white"
    : isDark
      ? "text-white/70 hover:text-white"
      : "text-slate-600 hover:text-slate-900"

  const themeToggleClass = onImage
    ? "text-white/85 hover:bg-white/15 hover:text-white"
    : isDark
      ? "text-white/80 hover:bg-white/10 hover:text-white"
      : "text-slate-900/80 hover:bg-slate-900/5 hover:text-slate-900"

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        barClass,
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand */}
        <button
          type="button"
          onClick={() => go("home")}
          className={cn(
            "flex items-center gap-2 font-display text-xl transition-colors",
            textClass,
          )}
        >
          <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
          <span className="hidden sm:inline">Yaumil</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className={cn(
                  "relative text-sm font-semibold tracking-wide transition-colors",
                  active === link.id
                    ? textClass
                    : mutedTextClass,
                )}
              >
                {link.label}
                {active === link.id && (
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",
                      onImage ? "bg-white" : isDark ? "bg-white" : "bg-slate-900",
                    )}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle
            className={themeToggleClass}
          />
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden",
              onImage
                ? "text-white hover:bg-white/15"
                : isDark
                  ? "text-white hover:bg-white/10"
                  : "text-slate-900 hover:bg-slate-900/5",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className={cn(
            "border-t backdrop-blur-xl lg:hidden",
            isDark ? "border-white/10 bg-slate-950/95" : "border-slate-200/80 bg-white/95",
          )}
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => go(link.id)}
                  className={cn(
                    "w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors",
                    active === link.id
                      ? isDark
                        ? "bg-white/10 text-white"
                        : "bg-slate-900/5 text-slate-900"
                      : isDark
                        ? "text-white/75 hover:bg-white/10 hover:text-white"
                        : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900",
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
