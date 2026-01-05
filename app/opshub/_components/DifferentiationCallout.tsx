import { differentiation } from "../content"

export function DifferentiationCallout() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{differentiation.title}</h2>
      <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{differentiation.intro}</p>
    </div>
  )
}
