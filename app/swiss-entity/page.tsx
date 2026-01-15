import { Check, X, ArrowRight, Shield, Globe, Building2, Users, Lock, Scale } from "lucide-react"

export default function SwissEntityPage() {
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
            <a href="/swiss-entity" className="text-zinc-100 text-sm">
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

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs text-zinc-400">Entity Structure</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Your entity.<br />Swiss precision.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          A Swiss association gives your team a real legal home—with privacy, flexibility, and a framework built for international builder teams.
        </p>
      </section>

      {/* What is it */}
      <section className="border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-4">What is a Swiss Association?</h2>
          <p className="text-zinc-400 mb-6">
            A Swiss association (Verein) is a legally recognized entity under Swiss law. It can own assets, enter contracts, and act in its own name—giving your team a proper legal structure without the complexity of a corporation.
          </p>
          <p className="text-zinc-400">
            Unlike corporations, associations are formed through member agreements rather than public filings. This means your team maintains control and privacy while gaining the legal protections of a formal entity.
          </p>
        </div>
      </section>

      {/* Why Switzerland */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">Why Switzerland?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Privacy by default</h3>
              <p className="text-sm text-zinc-400">
                Member identities are not publicly disclosed. Registration in the commercial register is optional for non-profit associations.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Clear legal framework</h3>
              <p className="text-sm text-zinc-400">
                Association law is flexible and well-defined. Regulatory treatment of blockchain-related activities is established.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Limited liability</h3>
              <p className="text-sm text-zinc-400">
                Members are generally not personally liable for the association's obligations. Your personal assets stay protected.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">International by design</h3>
              <p className="text-sm text-zinc-400">
                Members and decision-makers don't need to be in Switzerland. Meetings and votes can be held remotely.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Tax efficiency</h3>
              <p className="text-sm text-zinc-400">
                Associations are taxed under a cost-based methodology ("Cost +5%" model). Combined corporate tax rate in Zug is ~9-11%.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Democratic governance</h3>
              <p className="text-sm text-zinc-400">
                Decision-making authority rests with members, typically following one-member-one-vote. No shareholders or equity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you can / can't do */}
      <section className="border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">What a Swiss Association can and can't do</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-purple-400 flex items-center gap-2">
                <Check className="w-5 h-5" />
                Well suited for
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Receiving income as grants or donations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Paying and hiring contributors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Holding assets, treasury, and IP</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Signing contracts and service agreements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Providing liability protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>International teams (founding team outside Switzerland)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Member privacy (no public registry required)</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-zinc-400 flex items-center gap-2">
                <X className="w-5 h-5" />
                Not designed for
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Paying dividends or distributing profits</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Issuing shares or security tokens</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Receiving external equity investment</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Primary commercial activity or IP licensing</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-sm text-zinc-500">
                  Need commercial capabilities? We're launching a commercial entity option soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Who is this for?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-semibold mb-2">Builder teams</h3>
              <p className="text-sm text-zinc-400">
                Contributor teams and DevCos working in decentralized ecosystems who need a legal home.
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-semibold mb-2">Open source projects</h3>
              <p className="text-sm text-zinc-400">
                Projects that receive grants or donations and need to coordinate contributors across jurisdictions.
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Privacy-conscious teams</h3>
              <p className="text-sm text-zinc-400">
                Organizations that value member privacy and don't want public disclosure of participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it compares */}
      <section className="border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How it compares</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 pr-4 font-semibold"></th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-400">Swiss Association</th>
                  <th className="text-center py-4 px-4 font-semibold text-zinc-400">Fiscal Host</th>
                  <th className="text-center py-4 px-4 font-semibold text-zinc-400">US LLC</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4">You own the entity</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4">Member privacy</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><span className="text-zinc-500">Varies</span></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4">International team</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><span className="text-zinc-500">Complex</span></td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4">Limited liability</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4">Crypto-native banking</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><span className="text-zinc-500">Varies</span></td>
                  <td className="text-center py-4 px-4"><span className="text-zinc-500">Difficult</span></td>
                </tr>
                <tr>
                  <td className="py-4 pr-4">Clear regulatory framework</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><span className="text-zinc-500">Varies</span></td>
                  <td className="text-center py-4 px-4"><span className="text-zinc-500">Evolving</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-600/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-purple-400">Coming Soon</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">More entity types on the way</h2>
          <p className="text-zinc-400 mb-8">
            Need to issue equity, distribute profits, or run commercial operations? We're building additional entity structures to support the full range of builder needs.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1">Commercial Hub</h3>
              <p className="text-xs text-zinc-500">For teams that monetize IP or need equity capabilities</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1">Revenue Hub (OpCo)</h3>
              <p className="text-xs text-zinc-500">Separate entity for commercial activities</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-1">IP SPV</h3>
              <p className="text-xs text-zinc-500">Special purpose vehicle for holding and licensing IP</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">Frequently asked questions</h2>

          <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-6">
              <h3 className="font-semibold mb-2">Can companies join, or only individuals?</h3>
              <p className="text-zinc-400 text-sm">
                Both. Individuals can join in their personal capacity, and legal entities (LLCs, corporations, foundations) can also join as members.
              </p>
            </div>

            <div className="border-b border-zinc-800 pb-6">
              <h3 className="font-semibold mb-2">Will joining affect my existing company?</h3>
              <p className="text-zinc-400 text-sm">
                No. Participation through an existing company doesn't change ownership, tax status, or create an employment relationship. The association acts as a contractual counterparty.
              </p>
            </div>

            <div className="border-b border-zinc-800 pb-6">
              <h3 className="font-semibold mb-2">Do members need to be in Switzerland?</h3>
              <p className="text-zinc-400 text-sm">
                No. Swiss law doesn't require members or decision-makers to be physically present in Switzerland. Meetings and votes can be held remotely.
              </p>
            </div>

            <div className="border-b border-zinc-800 pb-6">
              <h3 className="font-semibold mb-2">Is a Swiss bank account required?</h3>
              <p className="text-zinc-400 text-sm">
                Not legally required. Many associations primarily use multisig wallets and crypto-native infrastructure. A bank account can be added when fiat transactions are needed.
              </p>
            </div>

            <div className="border-b border-zinc-800 pb-6">
              <h3 className="font-semibold mb-2">How are Swiss associations taxed?</h3>
              <p className="text-zinc-400 text-sm">
                Associations are subject to Swiss corporate income tax, often assessed using a cost-based approach ("Cost +5%" model). In Canton Zug, the combined rate is approximately 9-11%.
              </p>
            </div>

            <div className="border-b border-zinc-800 pb-6">
              <h3 className="font-semibold mb-2">Does membership create personal tax obligations?</h3>
              <p className="text-zinc-400 text-sm">
                Under Swiss law, membership alone doesn't create personal tax liability. Tax obligations depend on your local law and whether you receive income from the association.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="font-semibold mb-2">What about U.S. tax considerations?</h3>
              <p className="text-zinc-400 text-sm">
                U.S. persons may need to assess potential reporting requirements depending on membership composition and voting rights. We recommend consulting a U.S. tax advisor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to set up your entity?</h2>
          <p className="text-zinc-400 mb-8">
            Let's discuss whether a Swiss association is right for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/pricing"
              className="border border-zinc-700 hover:border-zinc-500 px-8 py-3 rounded-xl font-medium transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-600 rounded" />
              <span className="text-sm text-zinc-400">Operational Hub</span>
            </div>
            <p className="text-xs text-zinc-600 max-w-xl text-center md:text-right">
              This page is for informational purposes only and does not constitute legal, tax, or financial advice. Consult qualified professionals before making decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
