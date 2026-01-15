import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "./_components/Navigation"
import { Hero } from "./_components/Hero"
import { Section } from "./_components/Section"
import { FAQ } from "./_components/FAQ"
import { EntitySection } from "./_components/EntitySection"
import { problem, audience, benefits, whatYouGet, howItWorks, ownership, footerCta, footer } from "./content"
import {
  Zap, Shield, Users, FileText, Workflow, ArrowRight,
  Clock, Code, Lock, CheckCircle2, Sparkles,
  Building2, Globe, Briefcase, Settings, KeyRound, Eye
} from "lucide-react"

export const metadata: Metadata = {
  title: "Operational Hub",
  description: "A back office system for global teams, with clean records for reporting and tax filings.",
}

// Icons for audience cards
const audienceIcons = [Code, Globe, Lock]

// Icons for benefits
const benefitIcons = [Clock, FileText, Shield, Lock, Building2, Settings]

export default function OperationalHubPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />

      {/* Problem Section */}
      <Section id="problem" className="border-b border-border">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200">
            <Clock className="h-8 w-8 text-amber-600" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{problem.title}</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{problem.body}</p>
        </div>
      </Section>

      {/* Who This Is For Section */}
      <Section id="who" className="border-b border-border bg-gray-50/50 py-16 md:py-20">
        <div className="space-y-10">
          <div className="space-y-3 text-center">
            <span className="inline-flex items-center rounded-full bg-[var(--achra)]/10 px-3 py-1 text-xs font-medium text-[var(--achra)]">
              Built for you
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{audience.title}</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">{audience.subtitle}</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {audience.items.map((item, index) => {
              const Icon = audienceIcons[index]
              return (
                <div
                  key={index}
                  className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--achra)]/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--achra)]/10 to-[var(--achra)]/5 border border-[var(--achra)]/20 group-hover:from-[var(--achra)]/20 group-hover:to-[var(--achra)]/10 transition-colors">
                    <Icon className="h-6 w-6 text-[var(--achra)]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">{item.label}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="why" className="border-b border-border">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              Why teams choose us
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{benefits.title}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((item, index) => {
              const Icon = benefitIcons[index]
              const colors = [
                "from-blue-100 to-blue-50 border-blue-200 text-blue-600",
                "from-purple-100 to-purple-50 border-purple-200 text-purple-600",
                "from-emerald-100 to-emerald-50 border-emerald-200 text-emerald-600",
                "from-amber-100 to-amber-50 border-amber-200 text-amber-600",
                "from-rose-100 to-rose-50 border-rose-200 text-rose-600",
                "from-cyan-100 to-cyan-50 border-cyan-200 text-cyan-600",
              ]
              const colorClass = colors[index % colors.length]
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br border ${colorClass} mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight text-gray-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* What You Get Section */}
      <Section id="what-you-get" className="border-b border-border bg-gray-50/50">
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center rounded-full bg-[var(--achra)]/10 px-3 py-1 text-xs font-medium text-[var(--achra)]">
              Complete package
            </span>
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
                  className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--achra)]/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--achra)] to-[var(--achra-hover)] shadow-lg shadow-[var(--achra)]/20">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">{item.label}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
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
      <Section id="how-it-works" className="border-b border-border bg-gray-50/50">
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Simple process
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{howItWorks.title}</h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">{howItWorks.subtitle}</p>
          </div>

          {/* Steps */}
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-6">
              {/* Connecting line */}
              <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[var(--achra)] via-[var(--achra)]/50 to-emerald-500 md:left-9" />

              {howItWorks.steps.map((step, index) => {
                const stepColors = [
                  "bg-[var(--achra)] text-white shadow-[var(--achra)]/30",
                  "bg-blue-500 text-white shadow-blue-500/30",
                  "bg-emerald-500 text-white shadow-emerald-500/30",
                ]
                return (
                  <div key={step.number} className="relative flex gap-6">
                    <div className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg md:h-18 md:w-18 ${stepColors[index]}`}>
                      <span className="text-xl font-bold md:text-2xl">{step.number}</span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                      <h3 className="text-lg font-semibold md:text-xl text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">{step.description}</p>
                      {"counselNote" in step && step.counselNote && (
                        <p className="mt-3 text-xs italic text-gray-500 border-l-2 border-gray-200 pl-3">{step.counselNote}</p>
                      )}
                      {"operatorSupportDetails" in step && step.operatorSupportDetails && (
                        <details className="mt-4 group">
                          <summary className="cursor-pointer list-none text-sm font-medium text-[var(--achra)] hover:text-[var(--achra-hover)] flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            What's included in operator support
                          </summary>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {step.operatorSupportDetails.map((item, idx) => (
                              <div key={idx} className="rounded-lg bg-gray-50 p-3 border border-gray-100">
                                <h4 className="text-sm font-semibold text-gray-900">{item.heading}</h4>
                                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </details>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 text-center">
            <Button
              asChild
              variant="outline"
              className="border-[var(--achra)] text-[var(--achra)] hover:bg-[var(--achra)] hover:text-white"
            >
              <Link href="/included" className="inline-flex items-center gap-2">
                See what's included
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Ownership Section */}
      <Section id="ownership" className="border-b border-border">
        <div className="space-y-10">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              Clear boundaries
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{ownership.title}</h2>
            <p className="text-base text-muted-foreground">{ownership.subtitle}</p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {/* You Own */}
              <div className="rounded-2xl border-2 border-[var(--achra)]/20 bg-gradient-to-br from-[var(--achra)]/5 to-white p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--achra)] text-white shadow-lg shadow-[var(--achra)]/20">
                    <KeyRound className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">What you own</h3>
                </div>
                <ul className="space-y-4">
                  {ownership.youOwn.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--achra)] shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Operator Handles */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">What we handle</h3>
                </div>
                <ul className="space-y-4">
                  {ownership.operatorHandles.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="border-b border-border bg-gray-50/50">
        <FAQ />
      </Section>

      {/* Footer CTA Section */}
      <Section className="bg-gradient-to-b from-white via-[var(--achra)]/5 to-[var(--achra)]/10">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--achra)] shadow-lg shadow-[var(--achra)]/30">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{footerCta.prompt}</h2>
            <p className="text-lg text-muted-foreground">{footerCta.subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white shadow-lg shadow-[var(--achra)]/20">
              <Link href={footerCta.primaryCta.href}>{footerCta.primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-300 hover:border-[var(--achra)] hover:text-[var(--achra)]">
              <Link href={footerCta.secondaryCta.href}>{footerCta.secondaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-300 hover:border-[var(--achra)] hover:text-[var(--achra)]">
              <Link href={footerCta.tertiaryCta.href}>{footerCta.tertiaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="container mx-auto max-w-6xl space-y-2 px-4 text-center text-sm text-gray-500 md:px-6">
          <p>{footer.copyright}</p>
          <p>{footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  )
}
