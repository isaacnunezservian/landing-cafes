"use client";

import React from "react"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Smartphone, Zap, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "1 — Personalizamos",
    description:
      "Tomamos tu logo, tus colores, tus fotos y tu personalidad de marca. Diseñamos un Vitral que se ve como un sitio profesional de primer nivel, no como un template genérico.",
    icon: <Palette className="w-5 h-5" />,
    image: "/images/solution-learn.png",
  },
  {
    id: 2,
    title: "2 — Entregamos",
    description:
      "En 3-5 días hábiles tenés tu Vitral online. Te damos el QR listo para imprimir, la URL para tu bio de Instagram, acceso a tu estudio y una capacitación rápida.",
    icon: <Zap className="w-5 h-5" />,
    image: "/images/solution-detect.png",
  },
  {
    id: 3,
    title: "3 — Vos Administrás",
    description:
      "Desde tu celular cambiás precios en 5 segundos, agregás productos, activás promos del día y desactivás lo que no esté disponible. Sin llamar a nadie, sin costo extra, sin saber de tecnología.",
    icon: <Smartphone className="w-5 h-5" />,
    image: "/images/solution-neutralize.png",
  },
];

export function SolutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="solucion" className="w-full bg-white text-espresso-800 py-24 flex flex-col items-center overflow-hidden border-b border-espresso-200">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-16 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col gap-4 max-w-[600px]">
          <div className="flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-sm font-medium text-espresso-400 tracking-wide">
              La Solución
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-heading leading-[1.1] tracking-tight text-espresso-800">
            {"Creá tu Vitral".split(" ").map((word, i) => (
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
          <p className="text-balance text-espresso-500 text-base leading-relaxed">
            No es un simple listado de precios. Es una experiencia web de alto impacto visual que refleja 
            exactamente el branding de tu marca. Funciona como QR en el local, link en Instagram 
            y aparece en Google. Todo con tu estudio que cualquier persona puede usar.
          </p>
        </div>

        {/* Interactive Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">
          {/* Left: Image Display */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-crema rounded-lg group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={features[activeIndex].image || "/placeholder.svg"}
                  alt={features[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Progress indicator */}
            <div className="absolute bottom-4 left-4 right-4 h-1 flex gap-2">
              {features.map((_, idx) => (
                <div
                  key={idx}
                  className="h-full flex-1 bg-espresso-800/10 overflow-hidden rounded-full"
                >
                  {activeIndex === idx && (
                    <motion.div
                      className="h-full bg-amber-500/80 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                    />
                  )}
                  {idx < activeIndex && (
                    <div className="h-full w-full bg-amber-500/80 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Step List */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative w-full text-left p-6 transition-all duration-300 outline-none rounded-lg",
                  activeIndex === index
                    ? "bg-crema border border-espresso-200"
                    : "bg-transparent border border-transparent hover:bg-crema/50"
                )}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "mt-1 p-2 transition-colors duration-300 rounded-md",
                      activeIndex === index
                        ? "bg-amber-500 text-white"
                        : "bg-espresso-100 text-espresso-400"
                    )}
                  >
                    {feature.icon}
                  </div>

                  <div className="flex-1 space-y-1">
                    <h3
                      className={cn(
                        "text-xl font-semibold transition-colors duration-300",
                        activeIndex === index ? "text-espresso-800" : "text-espresso-400"
                      )}
                    >
                      {feature.title}
                    </h3>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-espresso-500 text-base leading-relaxed overflow-hidden"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    className={cn(
                      "mt-1.5 transition-all duration-300",
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    )}
                  >
                    <ChevronRight className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer/CTA Area */}
        <div className="pt-12 flex justify-center border-t border-espresso-200">
          <motion.a
            href="#precio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-amber-500 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-amber-600 transition-colors"
          >
            Creá tu Vitral
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
