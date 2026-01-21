import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Operational Hub | Less Admin. More Building.",
  description: "A turnkey back office for global teams. Invoicing, payouts, compliance, and reporting handled by an operator team, plus a Swiss legal entity for contracts and member privacy.",
  openGraph: {
    title: "Operational Hub | Less Admin. More Building.",
    description: "A turnkey back office for global teams. Invoicing, payouts, compliance, and reporting handled by an operator team, plus a Swiss legal entity for contracts and member privacy.",
    type: "website",
  },
}

export default function OpshubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
