"use client"

import { useState } from "react"
import { Gift, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/wedding/animate-on-scroll"

interface GiftSectionProps {
  enabled: boolean
  title: string
  message: string
  bankName: string
  accountHolder: string
  accountNumber: string
  clabe: string
}

export function GiftSection({
  enabled,
  title,
  message,
  bankName,
  accountHolder,
  accountNumber,
  clabe,
}: GiftSectionProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  if (!enabled) return null

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text.replace(/\s/g, ""))
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch {
      // Fallback silencioso
    }
  }

  return (
    <section id="regalo" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll animation="scale" duration={600}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fadeIn" duration={700}>
          <h2 className="font-script text-4xl sm:text-5xl text-primary mb-4">
            {title}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeUp" delay={100}>
          <p className="text-foreground/70 font-serif mb-8">
            {message}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" duration={700}>
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg text-left">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Banco</p>
              <p className="font-medium">{bankName}</p>
            </div>
            
            <div>
              <p className="text-sm text-foreground/60 mb-1">Titular</p>
              <p className="font-medium">{accountHolder}</p>
            </div>
            
            <div>
              <p className="text-sm text-foreground/60 mb-1">Numero de Cuenta</p>
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium font-mono">{accountNumber}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(accountNumber, "account")}
                  className="shrink-0"
                >
                  {copiedField === "account" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-foreground/60 mb-1">CLABE</p>
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium font-mono text-sm md:text-base">{clabe}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(clabe, "clabe")}
                  className="shrink-0"
                >
                  {copiedField === "clabe" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
