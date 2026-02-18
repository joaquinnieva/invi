"use client"

import { useEffect, useState } from "react"
import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll"

interface CountdownSectionProps {
  date: string
  time: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownSection({ date, time }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const weddingDate = new Date(`${date}T${time}:00`)
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [date, time])

  if (!mounted) {
    return (
      <section id="countdown" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll animation="fadeIn" duration={700}>
            <h2 className="font-script text-4xl sm:text-5xl text-primary mb-12">
              Cuenta Regresiva
            </h2>
          </AnimateOnScroll>
          <div className="flex justify-center gap-4 md:gap-8">
            {["Dias", "Horas", "Minutos", "Segundos"].map((label) => (
              <AnimateOnScroll key={label} animation="fadeUp" delay={["Dias","Horas","Minutos","Segundos"].indexOf(label) * 120}>
                <div className="text-center">
                  <div className="bg-card rounded-xl p-4 md:p-6 shadow-lg min-w-[70px] md:min-w-[100px]">
                    <span className="text-3xl md:text-5xl font-bold text-primary">
                      --
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/60">{label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="countdown" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll animation="fadeIn" duration={700}>
          <h2 className="font-script text-4xl sm:text-5xl text-primary mb-12">
            Cuenta Regresiva
          </h2>
        </AnimateOnScroll>

        <div className="flex justify-center gap-4 md:gap-8">
          <AnimateOnScroll animation="fadeUp" delay={0}>
            <TimeBlock value={timeLeft.days} label="Dias" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={120}>
            <TimeBlock value={timeLeft.hours} label="Horas" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={240}>
            <TimeBlock value={timeLeft.minutes} label="Minutos" />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" delay={360}>
            <TimeBlock value={timeLeft.seconds} label="Segundos" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-card rounded-xl p-4 md:p-6 shadow-lg min-w-[70px] md:min-w-[100px]">
        <span className="text-3xl md:text-5xl font-bold text-primary">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <p className="mt-2 text-sm text-foreground/60">{label}</p>
    </div>
  )
}
