"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDownIcon, ArrowRight, Building2, Receipt, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { entitySection } from "../content"

export function EntitySection() {
  const [isTaxExpanded, setIsTaxExpanded] = useState(false)

  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
          Swiss jurisdiction
        </span>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{entitySection.title}</h2>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">{entitySection.subtitle}</p>
      </div>

      <div className="mx-auto max-w-5xl space-y-6">
        {/* Switzerland Card */}
        <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--achra)]/30">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-red-50 border border-red-200 text-red-600 transition-transform group-hover:scale-110">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{entitySection.switzerlandTitle}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{entitySection.switzerlandDescription}</p>
            </div>
          </div>
        </div>

        {/* Tax Efficiency Card */}
        <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--achra)]/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 text-emerald-600 transition-transform group-hover:scale-110">
              <Receipt className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{entitySection.taxTitle}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{entitySection.taxDescription}</p>
            </div>
          </div>

          {/* Expandable Tax Example */}
          <button
            onClick={() => setIsTaxExpanded(!isTaxExpanded)}
            className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium transition-all hover:bg-gray-100 hover:border-[var(--achra)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--achra)]/30"
          >
            <span>Example (illustrative)</span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isTaxExpanded ? "rotate-180" : ""}`} />
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${isTaxExpanded ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <ul className="space-y-1 border-l-2 border-[var(--achra)]/30 pl-4">
                {entitySection.taxExample.map((line, index) => (
                  <li key={index} className="text-sm leading-relaxed text-gray-600">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <p className="text-xs italic text-gray-500">{entitySection.taxDisclaimer}</p>
          </div>
        </div>

        {/* Privacy Card */}
        <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--achra)]/30">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 text-blue-600 transition-transform group-hover:scale-110">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{entitySection.privacyTitle}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{entitySection.privacyDescription}</p>
            </div>
          </div>
        </div>

        {/* Jurisdiction Note */}
        <div className="text-center">
          <p className="text-sm italic text-gray-500">{entitySection.jurisdictionNote}</p>
        </div>

        {/* CTA */}
        <div className="pt-6 text-center">
          <Button
            asChild
            variant="outline"
            className="border-[var(--achra)] text-[var(--achra)] hover:bg-[var(--achra)] hover:text-white hover-lift"
          >
            <Link href="/swiss-entity" className="inline-flex items-center gap-2">
              Learn more about Swiss entities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
