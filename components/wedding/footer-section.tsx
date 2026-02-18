"use client"

import { Heart, Instagram } from "lucide-react"
import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll"

interface FooterSectionProps {
  bride: string
  groom: string
  hashtag?: string
  instagram?: string
}

export function FooterSection({
  bride,
  groom,
  hashtag,
  instagram,
}: FooterSectionProps) {
  return (
    <footer className="py-12 px-4 bg-primary/5">
      <div className="max-w-2xl mx-auto text-center">
        {hashtag && (
          <AnimateOnScroll animation="fadeUp" duration={700}>
            <div className="mb-6">
              <p className="text-sm text-foreground/60 mb-2">
                Comparte tus fotos con nuestro hashtag
              </p>
              <p className="font-script text-2xl text-primary">{hashtag}</p>
            </div>
          </AnimateOnScroll>
        )}

        {instagram && (
          <AnimateOnScroll animation="fadeIn" delay={120}>
            <a
              href={`https://instagram.com/${instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8"
            >
              <Instagram className="w-5 h-5" />
              <span>{instagram}</span>
            </a>
          </AnimateOnScroll>
        )}

        <AnimateOnScroll animation="fadeIn" delay={200}>
          <div className="flex items-center justify-center gap-2 text-foreground/50 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>
              para {bride} & {groom}
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}
