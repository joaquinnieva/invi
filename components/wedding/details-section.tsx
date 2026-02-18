"use client"

import { MapPin, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll"

interface DetailsSectionProps {
  ceremony: {
    name: string
    address: string
    time: string
    mapUrl: string
  }
  reception: {
    name: string
    address: string
    time: string
    mapUrl: string
  }
}

export function DetailsSection({
  ceremony,
  reception,
}: DetailsSectionProps) {
  return (
    <section id="detalles" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll animation="fadeIn" duration={700}>
          <h2 className="font-script text-4xl sm:text-5xl text-primary text-center mb-4">
            Detalles
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeUp" delay={100}>
          <p className="text-center text-foreground/70 font-serif mb-12 max-w-2xl mx-auto">
            Nos encantaria contar con tu presencia en este dia tan especial para nosotros.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremonia */}
          <AnimateOnScroll animation="fadeUp" duration={700}>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="font-script text-3xl text-primary mb-4">Ceremonia</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{ceremony.time} hrs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{ceremony.name}</p>
                  <p className="text-sm text-foreground/60">{ceremony.address}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 gap-2 bg-transparent"
                onClick={() => window.open(ceremony.mapUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Ver en Google Maps
              </Button>
            </div>
            </div>
          </AnimateOnScroll>

          {/* Recepcion */}
          <AnimateOnScroll animation="fadeUp" delay={150} duration={700}>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="font-script text-3xl text-primary mb-4">Recepcion</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{reception.time} hrs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{reception.name}</p>
                  <p className="text-sm text-foreground/60">{reception.address}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 gap-2 bg-transparent"
                onClick={() => window.open(reception.mapUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Ver en Google Maps
              </Button>
            </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
