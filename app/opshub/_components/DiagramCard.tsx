export function DiagramCard() {
  return (
    <div className="relative w-full max-w-[460px] overflow-hidden rounded-xl border border-border bg-card p-8 shadow-lg lg:justify-self-end">
      <div className="flex flex-col items-center gap-7">
        {/* Multisig Icon */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-emerald-400"
            >
              <rect x="6" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
              <rect x="18" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
              <rect x="12" y="18" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
              <line x1="10" y1="14" x2="10" y2="18" stroke="currentColor" strokeWidth="2" />
              <line x1="22" y1="14" x2="22" y2="18" stroke="currentColor" strokeWidth="2" />
              <line x1="10" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="2" />
              <line x1="22" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-sm font-medium text-muted-foreground">Multisig</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-8 w-px bg-gradient-to-b from-emerald-500/50 to-[var(--achra)]/50" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[var(--achra)]"
          >
            <path
              d="M8 2L8 14M8 14L3 9M8 14L13 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Shield Icon */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-24 w-24 items-center justify-center rounded-lg border border-[var(--achra)]/30 bg-[var(--achra)]/10">
            <svg
              width="48"
              height="48"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--achra)]"
            >
              <path
                d="M20 4L8 9V18C8 26 12 32 20 36C28 32 32 26 32 18V9L20 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 13V23M20 23L25 18M20 23L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-center text-sm font-medium text-[var(--achra)]">Swiss Association Shield</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-8 w-px bg-gradient-to-b from-[var(--achra)]/50 to-blue-500/50" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-400"
          >
            <path
              d="M8 2L8 14M8 14L3 9M8 14L13 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Real-world Rails */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-400"
            >
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
              <line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="6" x2="16" y2="26" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-center text-sm font-medium text-muted-foreground">Real-world rails</span>
        </div>
      </div>
    </div>
  )
}
