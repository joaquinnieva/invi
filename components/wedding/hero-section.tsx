"use client"

import { Calendar } from "lucide-react"
import Image from "next/image"
import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll"

interface HeroSectionProps {
  bride: string
  groom: string
  displayDate: string
  mainMessage: string
  heroBackground: string
  photos: {
    left: string[]
    right: string[]
  }
}

export function HeroSection({
  bride,
  groom,
  displayDate,
  mainMessage,
  heroBackground,
  photos,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/70 z-10" />
        <Image
          src={heroBackground || "/placeholder.svg"}
          alt="Fondo de boda"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center w-full max-w-7xl mx-auto px-4">
        {/* Left Photos */}
        <div className="hidden lg:flex flex-col gap-4 -mr-8">
          {photos.left.map((photo, index) => (
            <AnimateOnScroll key={photo} animation="fadeLeft" delay={index * 120}>
              <div
                className={`relative rounded-2xl overflow-hidden shadow-xl bg-card ${
                  index === 0
                    ? "w-32 h-40 -translate-x-8"
                    : index === 1
                    ? "w-48 h-64 z-10"
                    : "w-36 h-44 translate-x-4 -translate-y-4"
                }`}
              >
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Foto de ${bride} y ${groom}`}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Center Content */}
        <AnimateOnScroll animation="scale" duration={800}>
          <div className="flex flex-col items-center text-center z-20 px-8 py-12 bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl">
            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
              {bride} & {groom}
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-6 font-serif">
              {mainMessage}
            </p>
            <div className="flex items-center gap-3 text-foreground/70">
              <Calendar className="w-5 h-5" />
              <span className="text-lg font-serif tracking-wider">{displayDate}</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right Photos */}
        <div className="hidden lg:flex flex-col gap-4 -ml-8">
          {photos.right.map((photo, index) => (
            <AnimateOnScroll key={photo} animation="fadeRight" delay={index * 120}>
              <div
                className={`relative rounded-2xl overflow-hidden shadow-xl bg-card ${
                  index === 0
                    ? "w-48 h-64 z-10"
                    : "w-40 h-52 translate-x-8 -translate-y-4"
                }`}
              >
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Foto de ${bride} y ${groom}`}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Mobile Photos */}
      <div className="lg:hidden absolute bottom-8 left-0 right-0 flex justify-center gap-4 px-4 z-20">
        <AnimateOnScroll animation="fadeUp" delay={0}>
          <div className="relative w-24 h-32 rounded-xl overflow-hidden shadow-lg bg-card">
            <Image
              src={photos.left[1] || photos.left[0] || "/placeholder.svg"}
              alt={`Foto de ${bride} y ${groom}`}
              fill
              className="object-cover"
            />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeUp" delay={120}>
          <div className="relative w-24 h-32 rounded-xl overflow-hidden shadow-lg bg-card translate-y-4">
            <Image
              src={photos.right[0] || "/placeholder.svg"}
              alt={`Foto de ${bride} y ${groom}`}
              fill
              className="object-cover"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
