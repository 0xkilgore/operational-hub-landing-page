"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { switzerland } from "../content"

export function SwitzerlandSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{switzerland.title}</h2>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">{switzerland.intro}</p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Crypto-Friendly Card */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold">{switzerland.cryptoFriendly.title}</h3>
          <ul className="space-y-3">
            {switzerland.cryptoFriendly.points.map((point, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--achra)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border pt-4">
            <p className="text-xs italic text-muted-foreground/80">{switzerland.cryptoFriendly.trustNote}</p>
          </div>
        </div>

        {/* Tax Efficiency Card */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold">{switzerland.taxEfficiency.title}</h3>
          <ul className="mb-4 space-y-2">
            {switzerland.taxEfficiency.summary.map((item, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--achra)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Accordion */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex w-full items-center justify-between rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(122,58,255,0.3)]"
          >
            <span>More details</span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>

          {isExpanded && (
            <div className="mt-3 space-y-3 rounded-lg border border-border bg-muted/30 p-4">
              <div>
                <h4 className="mb-1 text-sm font-semibold">{switzerland.taxEfficiency.accordion.suitable.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {switzerland.taxEfficiency.accordion.suitable.content}
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold">{switzerland.taxEfficiency.accordion.unsuitable.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {switzerland.taxEfficiency.accordion.unsuitable.content}
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold">{switzerland.taxEfficiency.accordion.requirements.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {switzerland.taxEfficiency.accordion.requirements.content}
                </p>
              </div>
            </div>
          )}

          <div className="mt-4 border-t border-border pt-4">
            <p className="text-xs italic text-muted-foreground/80">{switzerland.taxEfficiency.disclaimer}</p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold">{switzerland.protectionPrivacy.title}</h3>
          <ul className="space-y-3">
            {switzerland.protectionPrivacy.points.map((point, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--achra)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
