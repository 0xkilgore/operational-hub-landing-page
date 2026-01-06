import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "./_components/Navigation"
import { Hero } from "./_components/Hero"
import { Section } from "./_components/Section"
import { WhatYouGetDiagram } from "./_components/WhatYouGetDiagram"
import { FAQ } from "./_components/FAQ"
import { SwitzerlandSection } from "./_components/SwitzerlandSection"
import { problem, audience, benefits, differentiation, howItWorks, ownership, footerCta, footer } from "./content"
import { ShieldCheckIcon, UsersIcon, NetworkIcon, LockIcon, CheckCircleIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Operational Hub - Achra | Legal Shield + Operations for Protocol Teams",
  description:
    "The Operational Hub is a turnkey solution that gives your project a legal shield, member privacy, and a compliant bridge to the real world, without corporate bloat.",
}

export default function OperationalHubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />

      {/* Problem / Reframe Section */}
      <Section id="problem" className="border-b border-border">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{problem.title}</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{problem.body}</p>
        </div>
      </Section>

      {/* Who This Is For Section */}
      <Section id="audience" className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="space-y-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{audience.title}</h2>
            <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-6">
            {audience.items.map((item, index) => {
              const icons = [ShieldCheckIcon, UsersIcon, NetworkIcon, LockIcon, CheckCircleIcon]
              const Icon = icons[index % icons.length]
              return (
                <div
                  key={index}
                  className={`flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:border-[rgb(122,58,255,0.5)] md:col-span-1 lg:col-span-2 ${
                    index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgb(122,58,255,0.3)] bg-[rgb(122,58,255,0.1)]">
                    <Icon className="h-5 w-5 text-[var(--achra)]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="border-b border-border">
        <div className="space-y-12">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">{benefits.title}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-[rgb(122,58,255,0.5)] hover:shadow-md"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--achra)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What You Get Section */}
      <Section id="what-you-get" className="border-b border-border bg-muted/30">
        <WhatYouGetDiagram />
      </Section>

      <Section className="border-b border-border">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{differentiation.title}</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{differentiation.intro}</p>
        </div>
      </Section>

      <Section className="border-b border-border bg-muted/30">
        <SwitzerlandSection />
      </Section>

      {/* How It Works Section */}
      <Section id="how-it-works" className="border-b border-border">
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{howItWorks.title}</h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">{howItWorks.subhead}</p>
          </div>

          {/* Steps */}
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-8">
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-[rgb(122,58,255,0.5)] via-[rgb(122,58,255,0.7)] to-[var(--achra)] md:left-8" />

              {howItWorks.steps.map((step) => (
                <div key={step.number} className="relative flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--achra)] bg-background md:h-16 md:w-16">
                    <span className="text-xl font-bold text-[var(--achra)] md:text-2xl">{step.number}</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center rounded-lg border border-border bg-card p-5 shadow-sm">
                    <h3 className="text-lg font-semibold md:text-xl">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground md:text-base">{step.description}</p>
                    {"counselNote" in step && step.counselNote && (
                      <p className="mt-2 text-xs italic text-muted-foreground/80">{step.counselNote}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-b border-border bg-muted/30">
        <div className="space-y-8">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{ownership.title}</h2>
            <p className="text-base text-muted-foreground">{ownership.subtitle}</p>
          </div>

          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">You own (ultimate responsibility)</h3>
                <ul className="space-y-3">
                  {ownership.youOwn.map((item, index) => (
                    <li key={index} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--achra)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold">Operator team handles (day-to-day execution)</h3>
                <ul className="space-y-3">
                  {ownership.operatorHandles.map((item, index) => (
                    <li key={index} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--achra)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <p className="text-xs italic text-muted-foreground/80">{ownership.disclaimer}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="border-b border-border">
        <FAQ />
      </Section>

      {/* Footer CTA Section */}
      <Section className="bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{footerCta.prompt}</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white">
              <Link href={footerCta.primaryCta.href}>{footerCta.primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={footerCta.secondaryCta.href}>{footerCta.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto max-w-6xl space-y-2 px-4 text-center text-sm text-muted-foreground md:px-6">
          <p>{footer.copyright}</p>
          <p>{footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  )
}
