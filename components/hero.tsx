"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, QrCode, Smartphone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 scale-105">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover blur-[3px] brightness-60"
        >
          <source src="/images/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Navigation */}
        

        {/* Hero Content */}
        <div className="flex flex-1 flex-col items-center px-6 pt-16 pb-20 text-center md:pt-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2"
          >
            <QrCode className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-amber-300">Te lo entregamos en 72hs!</span>
          </motion.div>

          <h1 className="font-heading max-w-4xl text-balance text-5xl tracking-tight text-crema md:text-6xl lg:text-7xl">
            {"No vendas café, vendé una experiencia".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ filter: "blur(10px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <p className="mt-6 max-w-xl text-balance text-center text-sm leading-relaxed text-crema/80 md:text-lg">
            Cargamos tu menú en una página web única, diseñada  con tus colores, tu logo y tu personalidad. 
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-amber-500 px-6 text-white hover:bg-amber-600 rounded-lg"
              asChild
            >
              <Link href="#precio">Quiero saber más</Link>
            </Button>
            
          </div>

          {/* Social Proof Mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-8"
          >
            <div className="flex items-center gap-2.5 rounded-full border border-amber-400/20 bg-amber-500/10 px-4 py-2">
              <Smartphone className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-sm text-crema/90 font-medium">Cambiá tus precios desde el celu</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-full border border-crema/15 bg-crema/5 px-4 py-2">
              <QrCode className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-sm text-crema/70">QR para tu local</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-full border border-crema/15 bg-crema/5 px-4 py-2">
              <svg className="h-4 w-4 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="text-sm text-crema/70">Link para Instagram</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
