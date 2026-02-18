import React from "react"
import type { Metadata } from 'next'
import { Great_Vibes, Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Invitación de Boda Digital',
  description: 'Crea tu invitación de boda digital personalizada',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${greatVibes.variable} ${cormorant.variable} ${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
