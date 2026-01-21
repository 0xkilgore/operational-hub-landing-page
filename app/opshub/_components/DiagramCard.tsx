import { Check, ArrowRight, Building2, Users, CreditCard, FileText, Shield } from "lucide-react"

export function DiagramCard() {
  return (
    <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl lg:justify-self-end hover:shadow-2xl hover:border-[var(--achra)]/20 transition-all duration-300 hover-glow">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--achra)] text-white">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Your Operational Hub</p>
            <p className="text-xs text-gray-500">Swiss Association • Active</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs text-emerald-600 font-medium">Live</span>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="p-6 space-y-5">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-lg font-bold text-gray-900">$47.2k</p>
            <p className="text-xs text-gray-500">This month</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-lg font-bold text-gray-900">8</p>
            <p className="text-xs text-gray-500">Contributors</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-lg font-bold text-emerald-600">100%</p>
            <p className="text-xs text-gray-500">Compliant</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recent Activity</p>

          <div className="space-y-2">
            <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Invoice #1042 paid</p>
                <p className="text-xs text-gray-500">dev@contributor.eth • $4,200</p>
              </div>
              <span className="text-xs text-gray-400">2h ago</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <FileText className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Agreement signed</p>
                <p className="text-xs text-gray-500">New contributor onboarded</p>
              </div>
              <span className="text-xs text-gray-400">5h ago</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--achra)]/10">
                <CreditCard className="h-4 w-4 text-[var(--achra)]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Payroll processed</p>
                <p className="text-xs text-gray-500">8 contributors • $38,400</p>
              </div>
              <span className="text-xs text-gray-400">1d ago</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-[var(--achra)]/5 to-[var(--achra)]/10 p-3 border border-[var(--achra)]/10">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[var(--achra)]" />
            <span className="text-sm text-gray-700">Your ops team is handling it</span>
          </div>
          <ArrowRight className="h-4 w-4 text-[var(--achra)]" />
        </div>
      </div>
    </div>
  )
}
