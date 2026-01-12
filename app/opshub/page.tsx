import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "./_components/Navigation"
import { Hero } from "./_components/Hero"
import { Section } from "./_components/Section"
import { FAQ } from "./_components/FAQ"
import { EntitySection } from "./_components/EntitySection"
import { problem, audience, benefits, whatYouGet, howItWorks, ownership, footerCta, footer } from "./content"
import { Zap, Shield, Users, FileText, Workflow } from "lucide-react"

export const metadata: Metadata = {
  title: "Operational Hub",
  description: "A back office system for global teams, with clean records for reporting and tax filings.",
}

export default function OperationalHubPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />

      {/* Problem Section */}
      <Section id="problem" className="border-b border-border">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{problem.title}</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{problem.body}</p>
        </div>
      </Section>

      {/* Who This Is For Section */}
      <Section id="who" className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="space-y-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{audience.title}</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">{audience.subtitle}</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {audience.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-[rgb(122,58,255,0.5)]"
              >
                <h3 className="font-bold text-lg">{item.label}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="why" className="border-b border-border">
        <div className="space-y-12">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">{benefits.title}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-[rgb(122,58,255,0.5)] hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What You Get Section */}
      <Section id="what-you-get" className="border-b border-border bg-muted/30">
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{whatYouGet.title}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{whatYouGet.subtitle}</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatYouGet.items.map((item, index) => {
              const icons = [Users, Workflow, Zap, FileText, Shield]
              const Icon = icons[index % icons.length]
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-[rgb(122,58,255,0.5)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[rgb(122,58,255,0.3)] bg-[rgb(122,58,255,0.1)]">
                    <Icon className="h-6 w-6 text-[var(--achra)]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{item.label}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Entity Section */}
      <Section id="entity" className="border-b border-border">
        <EntitySection />
      </Section>

      {/* How It Works Section */}
      <Section id="how-it-works" className="border-b border-border bg-muted/30">
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{howItWorks.title}</h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">{howItWorks.subtitle}</p>
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
                    {"operatorSupportDetails" in step && step.operatorSupportDetails && (
                      <details className="mt-4 group">
                        <summary className="cursor-pointer list-none text-sm font-medium text-[var(--achra)] hover:text-[var(--achra-hover)] flex items-center gap-2">
                          <span className="inline-block transition-transform group-open:rotate-90">▸</span>
                          What's included in operator support
                        </summary>
                        <div className="mt-3 space-y-3 rounded-lg border border-border bg-muted/30 p-4">
                          {step.operatorSupportDetails.map((item, idx) => (
                            <div key={idx} className="space-y-1">
                              <h4 className="text-sm font-semibold">{item.heading}</h4>
                              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Ownership Section */}
      <Section id="ownership" className="border-b border-border bg-muted/30">
        <div className="space-y-8">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{ownership.title}</h2>
            <p className="text-base text-muted-foreground">{ownership.subtitle}</p>
          </div>

          <div className="mx-auto max-w-5xl rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">What you own</h3>
                <ul className="space-y-3">
                  {ownership.youOwn.map((item, index) => (
                    <li key={index} className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold">What your operator team handles</h3>
                <ul className="space-y-3">
                  {ownership.operatorHandles.map((item, index) => (
                    <li key={index} className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="border-b border-border">
        <FAQ />
      </Section>

      {/* Footer CTA Section */}
      <Section className="bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{footerCta.prompt}</h2>
          <p className="text-lg text-muted-foreground">{footerCta.subtitle}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white">
              <Link href={footerCta.primaryCta.href}>{footerCta.primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={footerCta.secondaryCta.href}>{footerCta.secondaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={footerCta.tertiaryCta.href}>{footerCta.tertiaryCta.label}</Link>
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
