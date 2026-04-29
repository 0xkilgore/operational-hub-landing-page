"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SharedHeaderProps {
  currentPage?: "included" | "swiss-entity" | "pricing" | "contact" | "blog"
}

export function SharedHeader({ currentPage }: SharedHeaderProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { label: "What's Included", href: "/included", key: "included" },
    { label: "Swiss Entity", href: "/swiss-entity", key: "swiss-entity" },
    { label: "Pricing", href: "/pricing", key: "pricing" },
    { label: "Blog", href: "/blog", key: "blog" },
  ]

  return (
    <div className="sticky top-0 z-[999] isolate w-full pt-0 px-0 sm:pt-1.5 sm:px-4">
      <div
        className={cn(
          "bg-muted/30 backdrop-blur-xl",
          "rounded-none sm:rounded-2xl",
          "shadow-lg sm:shadow-none",
          "sm:mx-auto sm:max-w-6xl sm:p-2.5",
        )}
      >
        <header className="bg-popover flex items-center justify-between rounded-none px-6 py-4 sm:rounded-2xl">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="Achra homepage">
              <Image
                src="/brand/achra-logo.png"
                alt="Achra"
                width={120}
                height={32}
                className="h-7 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "text-base font-semibold transition-colors",
                  currentPage === link.key || pathname === link.href
                    ? "text-[var(--achra)]"
                    : "text-foreground hover:text-foreground/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions: CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Book a Call
            </Link>

            <button
              type="button"
              className="lg:hidden p-2 text-foreground hover:text-foreground/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-0 sm:px-4 mt-0 sm:mt-1.5">
          <nav className="bg-popover rounded-none sm:rounded-2xl shadow-lg p-4 space-y-1 sm:mx-auto sm:max-w-6xl">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-3 px-3 text-base font-semibold rounded-lg transition-colors",
                  currentPage === link.key || pathname === link.href
                    ? "text-[var(--achra)] bg-[var(--achra)]/5"
                    : "text-foreground hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
