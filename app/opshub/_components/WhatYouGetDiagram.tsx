import { ShieldCheck, Key, FileText, Network, Cog, InfoIcon } from "lucide-react"
import { whatYouGet } from "../content"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const iconMap = {
  key: Key,
  shield: ShieldCheck,
  file: FileText,
  network: Network,
  cog: Cog,
}

export function WhatYouGetDiagram() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">{whatYouGet.title}</h2>

      {/* Visual Stack with Descriptions */}
      <div className="mx-auto max-w-3xl">
        <div className="space-y-3">
          {whatYouGet.items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:border-[rgb(122,58,255,0.5)] hover:shadow-lg"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold">{item.label}</h3>
                  {item.tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs text-sm">{item.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  <span className="text-sm text-muted-foreground">— {item.subtitle}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Signal with MME */}
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-5 sm:flex-row sm:justify-between">
          <p className="text-sm font-medium text-muted-foreground">{whatYouGet.trustSignal.text}</p>
          <div className="flex h-10 items-center justify-center rounded border border-border bg-muted px-6">
            <span className="text-sm font-bold tracking-wider">MME</span>
          </div>
        </div>
      </div>
    </div>
  )
}
