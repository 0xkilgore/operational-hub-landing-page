import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Operational Hub | Less Admin. More Building.",
  description: "Back-office workflow software for global teams: invoicing, payouts, compliance, reporting. Services delivered by operator partners; your own Swiss legal entity.",
  openGraph: {
    title: "Operational Hub | Less Admin. More Building.",
    description: "Back-office workflow software for global teams: invoicing, payouts, compliance, reporting. Services delivered by operator partners; your own Swiss legal entity.",
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
