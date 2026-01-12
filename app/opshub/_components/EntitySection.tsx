"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { entitySection } from "../content"

export function EntitySection() {
  const [isTaxExpanded, setIsTaxExpanded] = useState(false)

  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{entitySection.title}</h2>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">{entitySection.subtitle}</p>
      </div>

      <div className="mx-auto max-w-5xl space-y-6">
        {/* Switzerland Card */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-bold">{entitySection.switzerlandTitle}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{entitySection.switzerlandDescription}</p>
        </div>

        {/* Tax Efficiency Card */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-bold">{entitySection.taxTitle}</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{entitySection.taxDescription}</p>

          {/* Expandable Tax Example */}
          <button
            onClick={() => setIsTaxExpanded(!isTaxExpanded)}
            className="flex w-full items-center justify-between rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(122,58,255,0.3)]"
          >
            <span>Example (illustrative)</span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${isTaxExpanded ? "rotate-180" : ""}`} />
          </button>

          {isTaxExpanded && (
            <div className="mt-3 space-y-2 rounded-lg border border-border bg-muted/30 p-4">
              <ul className="space-y-1 border-l-2 border-[rgb(122,58,255,0.3)] pl-4">
                {entitySection.taxExample.map((line, index) => (
                  <li key={index} className="text-sm leading-relaxed text-muted-foreground">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 border-t border-border pt-4">
            <p className="text-xs italic text-muted-foreground/80">{entitySection.taxDisclaimer}</p>
          </div>
        </div>

        {/* Privacy Card */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-bold">{entitySection.privacyTitle}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{entitySection.privacyDescription}</p>
        </div>

        {/* Jurisdiction Note */}
        <div className="text-center">
          <p className="text-sm italic text-muted-foreground/80">{entitySection.jurisdictionNote}</p>
        </div>
      </div>
    </div>
  )
}
