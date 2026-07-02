"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "motion/react"
import { ChevronDown, FolderOpen, Mail } from "lucide-react"
import { profile } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Hero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [interactive, setInteractive] = useState(false)

  const sectionRef = useRef<HTMLElement | null>(null)
  const dayLayerRef = useRef<HTMLDivElement | null>(null)
  const nightLayerRef = useRef<HTMLDivElement | null>(null)
  const starFarRef = useRef<HTMLDivElement | null>(null)
  const starNearRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const photoTiltRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const lastTrailRef = useRef(0)
  const pointerInsideRef = useRef(false)
  const currentRef = useRef({ x: 0, y: 0, photoX: 0, photoY: 0 })
  const targetRef = useRef({ x: 0, y: 0, photoX: 0, photoY: 0 })

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return

    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const update = () => setInteractive(pointerQuery.matches && !motionQuery.matches)
    update()

    pointerQuery.addEventListener("change", update)
    motionQuery.addEventListener("change", update)

    return () => {
      pointerQuery.removeEventListener("change", update)
      motionQuery.removeEventListener("change", update)
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted || !interactive) return

    const section = sectionRef.current
    if (!section) return

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

    const applyTransforms = () => {
      const current = currentRef.current
      const offsetX = current.x * 120
      const offsetY = current.y * 120

      if (dayLayerRef.current) {
        dayLayerRef.current.style.transform = `translate3d(${offsetX * 0.02}px, ${offsetY * 0.02}px, 0) scale(1.05)`
      }

      if (nightLayerRef.current) {
        nightLayerRef.current.style.transform = `translate3d(${offsetX * 0.035}px, ${offsetY * 0.035}px, 0) scale(1.07)`
      }

      if (starFarRef.current) {
        starFarRef.current.style.transform = `translate3d(${offsetX * 0.05}px, ${offsetY * 0.05}px, 0)`
      }

      if (starNearRef.current) {
        starNearRef.current.style.transform = `translate3d(${offsetX * -0.06}px, ${offsetY * -0.06}px, 0)`
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${offsetX * -0.04}px, ${offsetY * -0.04}px, 0) scale(1.02)`
      }

      if (photoTiltRef.current) {
        const rotateX = (-current.photoY * 10).toFixed(2)
        const rotateY = (current.photoX * 12).toFixed(2)
        const translateX = (current.photoX * 10).toFixed(2)
        const translateY = (current.photoY * 8).toFixed(2)

        photoTiltRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      }
    }

    const settle = () => {
      const current = currentRef.current
      const target = targetRef.current

      current.x += (target.x - current.x) * 0.08
      current.y += (target.y - current.y) * 0.08
      current.photoX += (target.photoX - current.photoX) * 0.12
      current.photoY += (target.photoY - current.photoY) * 0.12

      applyTransforms()

      const delta =
        Math.abs(target.x - current.x) +
        Math.abs(target.y - current.y) +
        Math.abs(target.photoX - current.photoX) +
        Math.abs(target.photoY - current.photoY)

      if (pointerInsideRef.current || delta > 0.001) {
        animationRef.current = window.requestAnimationFrame(settle)
      } else {
        animationRef.current = null
      }
    }

    const ensureAnimation = () => {
      if (animationRef.current == null) {
        animationRef.current = window.requestAnimationFrame(settle)
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect()
      const x = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5)
      const y = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5)

      targetRef.current.x = x
      targetRef.current.y = y

      const photo = photoTiltRef.current
      if (photo) {
        const photoRect = photo.getBoundingClientRect()
        const insidePhoto =
          event.clientX >= photoRect.left &&
          event.clientX <= photoRect.right &&
          event.clientY >= photoRect.top &&
          event.clientY <= photoRect.bottom

        if (insidePhoto) {
          targetRef.current.photoX = clamp((event.clientX - photoRect.left) / photoRect.width - 0.5, -0.5, 0.5)
          targetRef.current.photoY = clamp((event.clientY - photoRect.top) / photoRect.height - 0.5, -0.5, 0.5)
        } else {
          targetRef.current.photoX = 0
          targetRef.current.photoY = 0
        }
      }

      ensureAnimation()
    }

    const handlePointerEnter = () => {
      pointerInsideRef.current = true
      ensureAnimation()
    }

    const handlePointerLeave = () => {
      pointerInsideRef.current = false
      targetRef.current.x = 0
      targetRef.current.y = 0
      targetRef.current.photoX = 0
      targetRef.current.photoY = 0
      ensureAnimation()
    }

    section.addEventListener("pointermove", handlePointerMove)
    section.addEventListener("pointerenter", handlePointerEnter)
    section.addEventListener("pointerleave", handlePointerLeave)

    return () => {
      section.removeEventListener("pointermove", handlePointerMove)
      section.removeEventListener("pointerenter", handlePointerEnter)
      section.removeEventListener("pointerleave", handlePointerLeave)

      if (animationRef.current != null) {
        window.cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [interactive, mounted])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-transparent">
        <div
          ref={dayLayerRef}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            isDark ? "opacity-0" : "opacity-100",
          )}
        >
          <img
            src="/hero-day.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          ref={nightLayerRef}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            isDark ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src="/hero-night.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          ref={starFarRef}
          className="absolute inset-0 z-0 opacity-60 transition-opacity duration-700 ease-in-out bg-transparent [background-image:radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.65)_0_1px,transparent_1.5px),radial-gradient(circle_at_82%_18%,rgba(191,219,254,0.55)_0_1px,transparent_1.5px),radial-gradient(circle_at_72%_72%,rgba(255,255,255,0.48)_0_1px,transparent_1.5px),radial-gradient(circle_at_28%_68%,rgba(255,255,255,0.4)_0_1px,transparent_1.5px)] [background-size:220px_220px]"
        />

        <div
          ref={starNearRef}
          className="absolute inset-0 z-[1] opacity-45 blur-[0.3px] transition-opacity duration-700 ease-in-out bg-transparent [background-image:radial-gradient(circle_at_12%_82%,rgba(255,255,255,0.8)_0_1px,transparent_1.5px),radial-gradient(circle_at_52%_14%,rgba(125,211,252,0.7)_0_1px,transparent_1.5px),radial-gradient(circle_at_88%_56%,rgba(255,255,255,0.65)_0_1px,transparent_1.5px),radial-gradient(circle_at_36%_44%,rgba(255,255,255,0.55)_0_1px,transparent_1.5px)] [background-size:160px_160px]"
        />

        <div
          ref={glowRef}
          className={cn(
            "absolute inset-0 z-[2] transition-opacity duration-700 ease-in-out bg-transparent",
            isDark ? "opacity-100" : "opacity-70",
          )}
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.28), transparent 34%), radial-gradient(circle at 80% 72%, rgba(59, 130, 246, 0.22), transparent 28%), radial-gradient(circle at 18% 62%, rgba(14, 165, 233, 0.18), transparent 24%)",
          }}
        />

        <div className={`absolute inset-0 z-[3] bg-slate-900/35 transition-opacity duration-700 ease-in-out ${isDark ? "opacity-0" : "opacity-100"}`} />
        <div className={cn("absolute inset-0 z-[3] transition-opacity duration-700 ease-in-out bg-transparent", isDark ? "bg-slate-950/65 opacity-100" : "bg-white/10 opacity-0")} />

      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-8">

        <div className="grid w-full items-center gap-10 lg:grid-cols-2">

          {/* FOTO */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="hidden justify-center lg:flex -translate-y-10"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.8, ease: "easeInOut", repeat: Infinity }}
              className="[perspective:1200px]"
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-10 bottom-3 -z-10 h-24 rounded-full bg-black/45 blur-3xl"
                />
                <div ref={photoTiltRef} className="transform-gpu will-change-transform">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="max-h-[580px] w-auto drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)]"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="text-center lg:text-left text-white"
          >

            <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
              Mentransformasi Pendidikan
              <br />
              Melalui AI & Inovasi
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">
              Merancang pengalaman belajar digital, konten pembelajaran,
              sumber ajar berbasis AI, dan solusi pendidikan modern
              yang membuat belajar lebih menarik, efektif, dan mudah diakses.
            </p>

            <h2 className="mt-10 text-4xl font-bold">
              {profile.name}
            </h2>

            <p className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
              Pendidik AI • Spesialis Teknologi Pendidikan • Perancang Pembelajaran
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">

              <button
                onClick={() => scrollTo("portfolio")}
                className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                <FolderOpen className="mr-2 inline h-5 w-5" />
                Lihat Portofolio
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
              >
                <Mail className="mr-2 inline h-5 w-5" />
                Hubungi Saya
              </button>

            </div>

          </motion.div>

        </div>

      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>

    </section>
  )
}