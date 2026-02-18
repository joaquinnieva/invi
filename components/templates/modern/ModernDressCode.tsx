type Props = {
  enabled: boolean
  title: string
  code: string
  colors: string[]
  colorNames: string[]
  note?: string
}

export function ModernDressCode({
  enabled,
  title,
  code,
  colors,
  colorNames,
  note,
}: Props) {
  if (!enabled) return null

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-foreground mb-2">
          {title}
        </h2>
        <p className="text-center text-foreground/70 mb-8">{code}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {colors.map((c, idx) => (
            <div
              key={c}
              className="flex items-center gap-3 rounded-full border border-border/60 bg-white/70 backdrop-blur-md px-4 py-2 shadow-sm"
            >
              <span
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: c }}
              />
              <span className="text-sm font-medium">{colorNames[idx] ?? c}</span>
            </div>
          ))}
        </div>
        {note && (
          <p className="text-center text-sm text-foreground/60 mt-6">{note}</p>
        )}
      </div>
    </section>
  )
}
