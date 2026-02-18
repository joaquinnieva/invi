import { Calendar } from "lucide-react"

type Props = {
  title: string
  message: string
  deadline: string
}

export function ClassicRSVP({ title, message, deadline }: Props) {
  const formattedDeadline = new Date(deadline + "T00:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section id="asistencia" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-[2rem] bg-white/85 backdrop-blur-md shadow-xl ring-1 ring-border/60 p-10">
          <div className="text-6xl sm:text-7xl md:text-8xl font-serif tracking-widest text-foreground">
            <span className="inline-block">R</span>
            <span className="inline-block mx-3">S</span>
            <span className="inline-block">V</span>
            <span className="inline-block ml-3">P</span>
          </div>
          <h2 className="mt-6 font-script text-4xl text-foreground">{title}</h2>
          <p className="mt-2 font-serif text-foreground/70">{message}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-foreground/60">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">{formattedDeadline}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
