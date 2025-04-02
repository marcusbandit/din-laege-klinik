"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
}

interface NavbarProps {
  navItems: NavItem[]
}

export default function Navbar({ navItems }: NavbarProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-[#f8f8f5] shadow-md" : "bg-[#f8f8f5]/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="font-bold text-xl">DIN LÆGE KLINIK</div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Vis navigation"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-all",
                  "hover:translate-y-[-2px] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-1px_-1px_2px_rgba(255,255,255,0.5)]",
                  pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-all",
                  "hover:translate-y-[-2px] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-1px_-1px_2px_rgba(255,255,255,0.5)]",
                  pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

