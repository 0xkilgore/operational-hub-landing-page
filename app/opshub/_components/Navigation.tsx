"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { navigation } from "../content"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200" : "bg-white/80 backdrop-blur-sm border-gray-100",
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo + Product Label */}
        <div className="flex items-center gap-3">
          <a href="https://www.achra.com" className="flex items-center">
            <Image src="/brand/achra-logo.png" alt="Achra" width={120} height={32} className="h-7 w-auto" priority />
          </a>
          <span className="hidden text-sm font-medium text-gray-500 sm:inline">Operational Hub</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Flat nav links */}
          {navigation.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 md:inline-block"
            >
              {link.label}
            </Link>
          ))}

          {/* Primary CTA */}
          <Button
            size="sm"
            asChild
            className="bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white focus-visible:ring-[var(--achra)]/30"
          >
            <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
