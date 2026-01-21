import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Operational Hub",
  description: "Schedule a call to discuss how Operational Hub can handle your back office operations. Book a 30-minute consultation with our team.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
