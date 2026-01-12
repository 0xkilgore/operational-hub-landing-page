"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { faq } from "../content"

export function FAQ() {
  const [expandedAll, setExpandedAll] = useState(false)

  const toggleAll = () => {
    const details = document.querySelectorAll<HTMLDetailsElement>("#faq-section details")
    details.forEach((detail) => {
      detail.open = !expandedAll
    })
    setExpandedAll(!expandedAll)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{faq.title}</h2>
          <p className="text-sm text-muted-foreground">{faq.disclaimer}</p>
        </div>
        <Button variant="ghost" size="sm" onClick={toggleAll}>
          {expandedAll ? "Collapse all" : "Expand all"}
        </Button>
      </div>

      <div id="faq-section" className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
        {faq.items.map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-border bg-card transition-colors hover:border-[rgb(122,58,255,0.5)] focus-within:border-[rgb(122,58,255,0.5)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(122,58,255,0.3)] focus-visible:ring-offset-2">
              <span className="text-base">{item.question}</span>
              <ChevronDownIcon className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="border-t border-border px-5 pb-5 pt-4">
              <p className="text-pretty leading-relaxed text-muted-foreground">{item.answer}</p>
              {"details" in item && item.details && (
                <div className="mt-4 space-y-2 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium">Example (illustrative):</p>
                  <ul className="space-y-1 border-l-2 border-[rgb(122,58,255,0.3)] pl-4">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm leading-relaxed text-muted-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {"additionalInfo" in item && item.additionalInfo && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.additionalInfo}</p>
              )}
              {"disclaimer" in item && item.disclaimer && (
                <p className="mt-4 text-sm italic text-muted-foreground/80">{item.disclaimer}</p>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
