"use client"

import { Phone, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll"

interface RSVPSectionProps {
  title: string
  message: string
  deadline: string
  phone: string
  whatsapp: string
  bride: string
  groom: string
}

export function RSVPSection({
  title,
  message,
  deadline,
  phone,
  whatsapp,
  bride,
  groom,
}: RSVPSectionProps) {
  const formattedDeadline = new Date(deadline + "T00:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const whatsappMessage = encodeURIComponent(
    `Hola! Confirmo mi asistencia a la boda de ${bride} y ${groom}. Mi nombre es: `
  )

  return (
    <section id="asistencia" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll animation="fadeIn" duration={700}>
          <h2 className="font-script text-4xl sm:text-5xl text-primary mb-4">
            {title}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeUp" delay={100}>
          <p className="text-foreground/70 font-serif mb-2">{message}</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeIn" delay={200}>
          <div className="flex items-center justify-center gap-2 text-foreground/60 mb-8">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">{formattedDeadline}</span>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimateOnScroll animation="fadeUp" delay={0}>
            <Button
              size="lg"
              className="gap-2"
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`,
                  "_blank"
                )
              }
            >
              <MessageCircle className="w-5 h-5" />
              Confirmar por WhatsApp
            </Button>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={120}>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent"
              onClick={() => window.open(`tel:${phone}`, "_blank")}
            >
              <Phone className="w-5 h-5" />
              Llamar
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
