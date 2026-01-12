import { operatorSupport } from "../content"

export function OperatorSupport() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-lg border-2 border-[rgb(122,58,255,0.3)] bg-card p-6 shadow-sm md:p-8">
        <h3 className="mb-6 text-xl font-bold md:text-2xl">{operatorSupport.title}</h3>
        <ul className="space-y-3">
          {operatorSupport.items.map((item, index) => (
            <li key={index} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--achra)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
