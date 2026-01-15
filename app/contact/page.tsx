"use client"

import { Clock, MessageCircle, CheckCircle2, Mail } from "lucide-react"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script")
    script.src = "https://app.cal.com/embed/embed.js"
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      // @ts-ignore
      if (window.Cal) {
        // @ts-ignore
        window.Cal("init", "30min", { origin: "https://app.cal.com" })
        // @ts-ignore
        window.Cal.ns["30min"]("inline", {
          elementOrSelector: "#cal-embed",
          calLink: "kilgore-powerhouse-qnre42/30min",
          layout: "month_view",
        })
        // @ts-ignore
        window.Cal.ns["30min"]("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        })
      }
    }

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg" />
            <span className="font-semibold text-lg">Operational Hub</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/included" className="text-zinc-400 hover:text-zinc-100 text-sm">
              What's Included
            </a>
            <a href="/swiss-entity" className="text-zinc-400 hover:text-zinc-100 text-sm">
              Swiss Entity
            </a>
            <a href="/pricing" className="text-zinc-400 hover:text-zinc-100 text-sm">
              Pricing
            </a>
            <a
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left Column - Info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Let's talk
            </h1>
            <p className="text-zinc-400 mb-8">
              Book a 30-minute intro call to discuss your team's needs and see if Operational Hub is a good fit.
            </p>

            {/* What to expect */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-purple-400" />
                What to expect
              </h2>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>We'll learn about your team and current setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>Discuss your operational pain points</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>Determine if we're a good fit for each other</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>Answer any questions you have</span>
                </li>
              </ul>
            </div>

            {/* Call details */}
            <div className="flex items-center gap-3 text-sm text-zinc-500 mb-8">
              <Clock className="w-4 h-4" />
              <span>30 minutes</span>
              <span className="text-zinc-700">•</span>
              <span>Video call</span>
              <span className="text-zinc-700">•</span>
              <span>No commitment</span>
            </div>

            {/* Alternative contact */}
            <div className="border-t border-zinc-800 pt-6">
              <p className="text-sm text-zinc-500 mb-3">Prefer email?</p>
              <a
                href="mailto:hello@operationalhub.io"
                className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@operationalhub.io
              </a>
            </div>
          </div>

          {/* Right Column - Cal Embed */}
          <div className="lg:col-span-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div
                id="cal-embed"
                className="min-h-[600px] w-full"
                style={{
                  colorScheme: 'dark'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded" />
              <span className="text-sm text-zinc-400">Operational Hub</span>
            </div>
            <p className="text-xs text-zinc-600">
              This page is for informational purposes only and does not constitute legal or financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
