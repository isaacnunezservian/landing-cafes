"use client";

import { motion } from "framer-motion";
import { Instagram, Cpu, Printer, UserCog } from "lucide-react";

const painPoints = [
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Perdés clientes en Instagram",
    description: "Hoy la gente quiere ver precios antes de ir. Si no los mostrás, eligen al que sí lo hace.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Te estás quedando atrás",
    description: "La IA y lo digital definen quién crece y quién no. Sin presencia digital, perdés terreno cada día.",
  },
  {
    icon: <Printer className="w-6 h-6" />,
    title: "Reimprimís menús todo el tiempo",
    description: "Con inflación, los precios cambian cada semanas. Reimprimir es caro, lento y nunca llega a tiempo.",
  },
  {
    icon: <UserCog className="w-6 h-6" />,
    title: "Dependés de un diseñador",
    description: "Cada cambio requiere contactar, esperar y pagar. Tiempo y plata que podrías ahorrarte.",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="relative w-full bg-crema py-24 md:py-32 border-b border-espresso-200">
      {/* Subtle grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22 /></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22 fill=%22%232C1810%22/></svg>'\")",
      }} />
      
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 md:px-12 lg:px-16">
        <div className="space-y-8 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit">
            <div className="w-2.5 h-2.5 bg-terracota rounded-full" />
            <span className="text-sm font-medium text-espresso-500 tracking-wide">
              El Problema
            </span>
          </div>
          <h2 className="text-balance text-5xl font-heading tracking-tight text-espresso-800 md:text-6xl lg:text-5xl">
            {"Tu imagen no está a la altura de tu café".split(" ").map((word, i) => (
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
          
          <p className="text-balance text-lg leading-relaxed text-espresso-500 md:text-xl max-w-3xl">
            Tu café tiene productos increíbles y un ambiente cuidado. 
            Pero si tu presencia digital no transmite eso, estás perdiendo clientes antes de que prueben tu café.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-4xl">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 p-6 border border-espresso-200 bg-white rounded-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-terracota/10 border border-terracota/20 rounded-md text-terracota">
                {point.icon}
              </div>
              <div>
                <h3 className="text-espresso-800 font-semibold text-lg mb-2">{point.title}</h3>
                <p className="text-espresso-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-12 sm:flex-row sm:justify-center">
          <a href="#casos" className="bg-amber-500 px-8 py-3 font-semibold text-white rounded-lg transition-all hover:bg-amber-600 active:scale-95">
            Ver Casos de Éxito
          </a>
        </div>
      </div>
    </section>
  );
}
