import { Check, ArrowRight, Users, Building, Briefcase } from "lucide-react"
import { SharedHeader } from "../_components/SharedHeader"
import { SharedFooter } from "../_components/SharedFooter"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SharedHeader currentPage="pricing" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          One monthly fee.<br />Zero operational headaches.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your entity, your control. We handle the legal setup, accounting, payroll, and compliance—so you can focus on building.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">

          {/* Starter */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-gray-500 text-sm">
                For grant recipients and minimal-operations teams
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$750</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">+ $2,500 one-time setup</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Swiss association entity (you own it)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Official registered address</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Basic bookkeeping & expense tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Annual tax filing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Quarterly financial summary</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Connection to legal partners</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="block w-full text-center border border-gray-300 hover:border-gray-400 py-3 rounded-xl font-medium transition-colors text-gray-700 hover:text-gray-900"
            >
              Schedule a Call
            </a>
          </div>

          {/* Standard - Featured */}
          <div className="bg-white border-2 border-[rgb(122,58,255)] rounded-2xl p-8 flex flex-col relative shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(122,58,255)] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-[rgb(122,58,255)]/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[rgb(122,58,255)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-gray-500 text-sm">
                For builder teams with regular contributors
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$750</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-[rgb(122,58,255)] text-sm mt-1 font-medium">+ $500 per contributor</p>
              <p className="text-gray-400 text-sm mt-1">+ $3,000 one-time setup</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Everything in Starter</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Full monthly accounting & reconciliation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Contributor onboarding & agreements</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Invoice processing & approvals</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Multi-currency payouts (fiat + stablecoin)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Dedicated ops support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Reporting dashboard</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="block w-full text-center bg-[rgb(122,58,255)] hover:bg-[rgb(100,40,220)] text-white py-3 rounded-xl font-medium transition-colors"
            >
              Schedule a Call
            </a>
          </div>

          {/* Custom */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom</h3>
              <p className="text-gray-500 text-sm">
                For complex structures or high-volume operations
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">Setup from $4,000</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Everything in Standard</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Multiple entity structures</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Custom reporting requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Volume-based pricing</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="block w-full text-center border border-gray-300 hover:border-gray-400 py-3 rounded-xl font-medium transition-colors text-gray-700 hover:text-gray-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contributor Explainer */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How contributor pricing works</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-3 text-[rgb(122,58,255)]">What counts as a contributor</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Permanent, paid team members</li>
                <li>• Anyone with a contributor agreement</li>
                <li>• People who invoice monthly</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-3 text-gray-500">What doesn't count</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• One-time vendors or contractors</li>
                <li>• Unpaid contributors or advisors</li>
                <li>• Grant recipients you're funding</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Add or remove contributors anytime. Billing adjusts automatically.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">Frequently asked questions</h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Why is this more expensive than other payroll tools?</h3>
              <p className="text-gray-600 text-sm">
                Tools like Franklin give you software—you still do the accounting, tax filing, and compliance yourself. We do the actual work. Your books are closed, taxes are filed, and payroll runs without you lifting a finger.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Do I still need to hire an accountant?</h3>
              <p className="text-gray-600 text-sm">
                No. Accounting is included. Our team handles bookkeeping, reconciliation, and reporting.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">What about legal support?</h3>
              <p className="text-gray-600 text-sm">
                We connect you to our vetted legal partners who specialize in Swiss entity law. They're available when you need them, billed separately for any work.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">What if I'm too small for this?</h3>
              <p className="text-gray-600 text-sm">
                Start with Starter—no permanent contributors required. It's designed for teams receiving grants or with minimal payout activity. Upgrade to Standard when you grow.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Can I see everything that's happening?</h3>
              <p className="text-gray-600 text-sm">
                Yes. You have full dashboard access to invoices, approvals, transactions, and reports. Ultimate authority always stays with you.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">What currencies do you support?</h3>
              <p className="text-gray-600 text-sm">
                Fiat (USD, EUR, CHF, GBP) and stablecoins (USDC, DAI). We handle the conversions.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="font-semibold mb-2">What's the commitment?</h3>
              <p className="text-gray-600 text-sm">
                Month-to-month after the first 3 months. Setup fee is non-refundable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">Why Operational Hub</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[rgb(122,58,255)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔑</span>
              </div>
              <h3 className="font-semibold mb-2">You own it</h3>
              <p className="text-gray-600 text-sm">
                Unlike fiscal hosts, this is your entity. Your name, your control, your treasury.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[rgb(122,58,255)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-semibold mb-2">We operate it</h3>
              <p className="text-gray-600 text-sm">
                Unlike DIY platforms, we don't hand you software and wish you luck. We do the work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[rgb(122,58,255)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-semibold mb-2">Built for builders</h3>
              <p className="text-gray-600 text-sm">
                Stablecoin payroll, multi-sig treasuries, global contributors. We get crypto-native teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to stop doing ops as a side job?</h2>
          <p className="text-gray-600 mb-8">
            Not sure which plan fits? Let's figure it out together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[rgb(122,58,255)] hover:bg-[rgb(100,40,220)] text-white px-8 py-3 rounded-xl font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/"
              className="border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-xl font-medium transition-colors text-gray-700"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
