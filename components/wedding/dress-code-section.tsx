"use client"

import { Shirt } from "lucide-react"
import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll"

interface DressCodeSectionProps {
  enabled: boolean
  title: string
  code: string
  colors: string[]
  colorNames: string[]
  note?: string
}

export function DressCodeSection({
  enabled,
  title,
  code,
  colors,
  colorNames,
  note,
}: DressCodeSectionProps) {
  if (!enabled) return null

  return (
    <section id="dresscode" className="py-16 px-4 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll animation="scale" duration={600}>
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
            <Shirt className="w-6 h-6 text-primary" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeIn" duration={700}>
          <h2 className="font-script text-3xl sm:text-4xl text-primary mb-3">
            {title}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={100}>
          <p className="text-xl font-serif text-foreground/80 mb-6">{code}</p>
        </AnimateOnScroll>

        {colors.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {colors.map((color, index) => (
              <AnimateOnScroll key={color} animation="scale" delay={index * 100}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-full shadow-md border-2 border-card"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-foreground/60">
                    {colorNames[index]}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {note && (
          <AnimateOnScroll animation="fadeIn" delay={200}>
            <p className="text-sm text-foreground/60 italic">{note}</p>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  )
}
