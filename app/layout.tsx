import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Din Læge Klinik",
  description: "Læge klinik hjemmeside",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems = [
    { href: "/", label: "FORSIDE" },
    { href: "/om-klinikken", label: "OM KLINIKKEN" },
    { href: "/aabnings-tider", label: "ÅBNINGSTIDER" },
    { href: "/henvisninger", label: "HENVISNINGER" },
    { href: "/priser", label: "PRISER" },
    { href: "/links", label: "LINKS" },
    { href: "/kontakt", label: "KONTAKT" },
  ]

  return (
    <html lang="da">
      <body className={`${inter.className} bg-[#f8f8f5]`}>
        <Navbar navItems={navItems} />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'