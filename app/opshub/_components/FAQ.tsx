"use client"

import { useState } from "react"
import { ChevronDownIcon, HelpCircle } from "lucide-react"
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <span className="inline-flex items-center rounded-full bg-[var(--achra)]/10 px-3 py-1 text-xs font-medium text-[var(--achra)]">
            <HelpCircle className="h-3 w-3 mr-1" />
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{faq.title}</h2>
          <p className="text-sm text-muted-foreground">{faq.disclaimer}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleAll}
          className="border-gray-300 hover:border-[var(--achra)] hover:text-[var(--achra)] self-start sm:self-auto"
        >
          {expandedAll ? "Collapse all" : "Expand all"}
        </Button>
      </div>

      <div id="faq-section" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {faq.items.map((item, index) => (
          <details
            key={index}
            className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-[var(--achra)]/30 focus-within:border-[var(--achra)]/50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--achra)]/30 focus-visible:ring-offset-2">
              <span className="text-base text-gray-900">{item.question}</span>
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180 group-open:text-[var(--achra)]" />
            </summary>
            <div className="border-t border-gray-200 px-5 pb-5 pt-4">
              <p className="text-pretty leading-relaxed text-gray-600">{item.answer}</p>
              {"details" in item && item.details && (
                <div className="mt-4 space-y-2 rounded-lg bg-gray-50 p-4 border border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Example (illustrative):</p>
                  <ul className="space-y-1 border-l-2 border-[var(--achra)]/30 pl-4">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm leading-relaxed text-gray-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {"additionalInfo" in item && item.additionalInfo && (
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.additionalInfo}</p>
              )}
              {"disclaimer" in item && item.disclaimer && (
                <p className="mt-4 text-sm italic text-gray-500">{item.disclaimer}</p>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
