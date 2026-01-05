"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
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
        "sticky top-0 z-50 w-full border-b border-border/40 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo + Label */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image src="/brand/achra-logo.png" alt="Achra" width={120} height={32} className="h-7 w-auto" priority />
          </Link>
          <span className="hidden text-sm font-medium text-muted-foreground sm:inline">Operational Hub</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-sm font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navigation.services.map((service) => (
                <DropdownMenuItem key={service.label} asChild>
                  <Link href={service.href}>{service.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Operational Hub Link */}
          {navigation.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "hidden text-sm font-medium transition-colors hover:text-foreground sm:inline-block",
                link.active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}

          <Button
            size="sm"
            variant="outline"
            asChild
            className="hidden border-[var(--achra)] text-[var(--achra)] hover:bg-[var(--achra)] hover:text-white md:inline-flex bg-transparent"
          >
            <Link href={navigation.secondaryCta.href}>{navigation.secondaryCta.label}</Link>
          </Button>

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
