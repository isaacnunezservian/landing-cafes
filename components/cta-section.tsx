"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(44,24,16,0.7), rgba(44,24,16,0.5))" }} />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h2 className="text-balance text-4xl font-heading tracking-tight text-crema md:text-5xl lg:text-6xl">
            {"Tu marca merece un Cafex a la altura".split(" ").map((word, i) => (
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
          </h2>
          <p className="text-balance mt-6 max-w-xl text-base leading-relaxed text-crema/80 md:text-lg">
            En menos de una semana, tus clientes ven algo extraordinario. 
            Precios actualizados, diseño premium, cero dependencia. Tu marca, en cada detalle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-amber-500 px-8 text-white hover:bg-amber-600 rounded-lg"
              asChild
            >
              <a
                href="https://wa.me/5491170061908?text=Hola%2C%20quiero%20crear%20mi%20Cafex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Creá tu Cafex
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-crema/30 bg-transparent text-crema hover:bg-crema/10 hover:text-crema px-8 rounded-lg"
              asChild
            >
              <a href="#precio">
                Ver Planes
              </a>
            </Button>
          </div>
          <p className="mt-6 text-crema/50 text-sm">
            Listo en 72 horas · Sin compromisos · Revisiones incluidas
          </p>
        </div>
      </div>
    </section>
  );
}
