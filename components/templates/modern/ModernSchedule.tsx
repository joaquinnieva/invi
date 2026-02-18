type ScheduleItem = {
  time: string
  event: string
}

type Props = {
  schedule: ScheduleItem[]
  variant?: "summary" | "timeline"
}

export function ModernSchedule({ schedule, variant = "summary" }: Props) {
  if (variant === "summary") {
    return (
      <section id="cronograma" className="py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            Cronograma
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((item, idx) => (
              <div
                key={item.event}
                className="rounded-2xl bg-muted/60 border border-border/60 shadow-sm p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Paso {idx + 1}</span>
                  <span className="text-primary font-semibold">{item.time}</span>
                </div>
                <p className="mt-2 font-medium">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="cronograma" className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />
          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div
                key={item.event}
                className={`relative md:flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-md" />
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 shadow-md inline-block">
                    <span className="text-primary font-semibold text-lg">{item.time}</span>
                    <p className="text-foreground/80">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
