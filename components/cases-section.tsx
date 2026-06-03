"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    name: "El Cuartito",
    image: "/images/cases/el-cuartito.png",
  },
  {
    name: "Av Santa Fe 1234",
    image: "/images/cases/av-santafe-1234.png",
  },
  {
    name: "Heladerías Gizeh",
    image: "/images/cases/gizeh.png",
  },
  {
    name: "Magno Sapori",
    image: "/images/cases/magno-sapori.png",
  },
  {
    name: "Ludlow Coffee House",
    image: "/images/cases/ludlow-coffe.png",
  },
];

export function CasesSection() {
  return (
    <section id="casos" className="relative w-full bg-white py-24 md:py-32 border-b border-espresso-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit mb-8"
          >
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-sm font-medium text-espresso-500 tracking-wide">
              Casos de Éxito
            </span>
          </motion.div>
          <h2 className="text-balance text-4xl font-heading tracking-tight text-espresso-800 md:text-5xl">
            {"Marcas que ya confían en Cafex".split(" ").map((word, i) => (
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
        </div>

        {/* Hero Video — Fillippo */}
        <motion.a
          href="https://fillippo.online/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative block aspect-[2/1] w-full rounded-2xl overflow-hidden group mb-10 md:mb-14 cursor-pointer shadow-2xl shadow-espresso-900/20"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover brightness-[0.85] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-[0.7]"
          >
            <source src="/images/cases/fillippo-showcase.mp4" type="video/mp4" />
          </video>

          {/* Permanent subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

          {/* Center CTA — always visible, animated bounce */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-7 py-3.5 rounded-full shadow-xl group-hover:bg-white transition-all duration-500"
            >
              <span className="text-espresso-800 font-semibold text-sm md:text-base">Hacé clic para verlo en vivo</span>
              <ArrowUpRight className="w-5 h-5 text-amber-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.div>
          </div>
        </motion.a>

        {/* Hero Video — Magno (mobile/vertical format) */}
        <div className="flex flex-col items-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit mb-6"
          >
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-sm font-medium text-espresso-500 tracking-wide">Último lanzamiento</span>
          </motion.div>
          <motion.a
            href="https://magnosapori.online"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative block aspect-[9/16] w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden group cursor-pointer shadow-2xl shadow-espresso-900/20"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover brightness-[0.85] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-[0.7]"
            >
              <source src="/images/cases/magno-showcase.mp4" type="video/mp4" />
            </video>

            {/* Permanent subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

            {/* Center CTA */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-7 py-3.5 rounded-full shadow-xl group-hover:bg-white transition-all duration-500"
              >
                <span className="text-espresso-800 font-semibold text-sm md:text-base">Hacé clic para verlo en vivo</span>
                <ArrowUpRight className="w-5 h-5 text-amber-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.div>
            </div>
          </motion.a>
        </div>

        {/* Case Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {cases.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative aspect-[16/10] rounded-xl overflow-hidden group"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <span className="text-white font-heading text-sm md:text-base drop-shadow-lg">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
