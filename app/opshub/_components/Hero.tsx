"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DiagramCard } from "./DiagramCard"
import { hero } from "../content"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(122,58,255,0.08),rgba(255,255,255,0)_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-start space-y-6 lg:col-span-7">
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{hero.title}</h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl mt-2">
                A turnkey back office for global teams. Invoicing, payouts, compliance, and reporting, handled by an operator team. Plus a legal entity for contracts and member privacy.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                asChild
                className="bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white focus-visible:ring-[var(--achra)]/30"
              >
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:border-[var(--achra)]/50 hover:text-[var(--achra)] focus-visible:ring-[var(--achra)]/30 bg-transparent"
              >
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:border-[var(--achra)]/50 hover:text-[var(--achra)] focus-visible:ring-[var(--achra)]/30 bg-transparent"
              >
                <Link href={hero.tertiaryCta.href}>{hero.tertiaryCta.label}</Link>
              </Button>
            </div>

            {/* Proof Badges */}
            <div className="flex flex-wrap gap-2 max-w-[520px]">
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-[var(--achra)]/20 bg-[var(--achra)]/5 px-3 py-1 text-xs font-medium text-[var(--achra)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-start justify-center lg:col-span-5 lg:justify-end">
            <DiagramCard />
          </div>
        </div>
      </div>
    </section>
  )
}
