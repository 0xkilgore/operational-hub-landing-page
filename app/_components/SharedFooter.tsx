import Link from "next/link"
import Image from "next/image"

export function SharedFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/brand/achra-logo.png"
                alt="Achra"
                width={80}
                height={24}
                className="h-5 w-auto opacity-60"
              />
            </Link>
            <span className="text-sm text-gray-400">Operational Hub</span>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-right max-w-md">
            This page is for informational purposes only and does not constitute legal, tax, or financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
