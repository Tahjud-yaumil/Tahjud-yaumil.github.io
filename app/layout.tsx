import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Quicksand, Pacifico } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nur Tahjud Yaumil, S.Pd — Pendidik AI & Guru Informatika",
  description:
    "Portofolio Nur Tahjud Yaumil, S.Pd — Guru Informatika MTs, Pendidik AI, dan pencipta pembelajaran digital. Media pembelajaran digital, modul ajar, desain Canva, dan proyek AI.",
  keywords: [
    "Pendidik AI",
    "Guru Informatika",
    "media pembelajaran digital",
    "modul ajar",
    "Canva",
    "prompt engineering",
    "Nur Tahjud Yaumil",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Nur Tahjud Yaumil, S.Pd — Pendidik AI & Guru Informatika",
    description: "Guru Informatika MTs, Pendidik AI, dan pencipta pembelajaran digital.",
    type: "website",
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaf2fb" },
    { media: "(prefers-color-scheme: dark)", color: "#1b2436" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${quicksand.variable} ${pacifico.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
