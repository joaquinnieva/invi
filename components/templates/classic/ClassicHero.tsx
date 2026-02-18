import Image from "next/image"

type Props = {
  bride: string
  groom: string
  displayDate: string
  mainMessage: string
  heroBackground: string
  featuredPhoto?: string
}

export function ClassicHero({
  bride,
  groom,
  displayDate,
  mainMessage,
  heroBackground,
  featuredPhoto,
}: Props) {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background/90" />
        <Image
          src={heroBackground || "/placeholder.svg"}
          alt="Fondo clásico"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="relative z-10 w-full px-6">
        <div className="mx-auto max-w-sm sm:max-w-md rounded-[2rem] bg-white/85 backdrop-blur-md shadow-2xl ring-1 ring-border/60 overflow-hidden">
          <Image
            src={featuredPhoto || "/placeholder.svg"}
            alt="Foto destacada"
            width={800}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="px-6 py-6 text-center">
            <p className="text-xs tracking-widest text-foreground/60 uppercase">You&apos;re invited</p>
            <h1 className="mt-2 font-script text-5xl sm:text-6xl text-foreground">
              {bride} &amp; {groom}
            </h1>
            <p className="mt-3 font-serif italic text-foreground/70">{mainMessage}</p>
            <p className="mt-4 font-serif text-foreground/80">{displayDate}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
