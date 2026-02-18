"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll"

interface GallerySectionProps {
  gallery: string[]
  bride: string
  groom: string
}

export function GallerySection({ gallery, bride, groom }: GallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? gallery.length - 1 : selectedIndex - 1)
    }
  }
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === gallery.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <section id="galeria" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fadeIn" duration={700}>
          <h2 className="font-script text-4xl sm:text-5xl text-primary text-center mb-12">
            Galeria
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((photo, index) => (
            <AnimateOnScroll key={photo} animation="scale" delay={index * 80}>
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Foto ${index + 1} de ${bride} y ${groom}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-card hover:text-card/80 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 text-card hover:text-card/80 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={gallery[selectedIndex] || "/placeholder.svg"}
              alt={`Foto ${selectedIndex + 1} de ${bride} y ${groom}`}
              fill
              className="object-contain"
            />
          </div>
          
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 text-card hover:text-card/80 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  )
}
