"use client";

import { motion } from "framer-motion";
import { Smartphone, Star, QrCode, TrendingUp, Users, Globe } from "lucide-react";

const stats = [
  {
    icon: <Smartphone className="w-5 h-5 text-amber-500" />,
    value: "92%",
    label: "de argentinos navegan desde el celular",
  },
  {
    icon: <Star className="w-5 h-5 text-amber-500" />,
    value: "75%",
    label: "juzga credibilidad por la presencia web",
  },
  {
    icon: <QrCode className="w-5 h-5 text-amber-500" />,
    value: "+300%",
    label: "creció el uso de QR en gastronomía",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-amber-500" />,
    value: "67%",
    label: "descubre cafeterías por redes sociales",
  },
  {
    icon: <Users className="w-5 h-5 text-amber-500" />,
    value: "80%",
    label: "busca un negocio online antes de visitarlo",
  },
  {
    icon: <Globe className="w-5 h-5 text-amber-500" />,
    value: "<2s",
    label: "tiempo de carga en conexión 4G",
  },
];

export function LogoSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b border-espresso-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-4 text-center font-heading text-4xl text-espresso-800 tracking-tight md:text-5xl">
          {"Los números no mienten".split(" ").map((word, i) => (
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
        <p className="mb-12 text-center text-espresso-400 text-base max-w-2xl mx-auto">
          La transformación digital en gastronomía ya no es opcional. Estos datos muestran por qué tu cafetería necesita presencia web profesional hoy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center gap-3 p-6 border border-espresso-200 bg-crema/50 rounded-lg hover:bg-crema transition-colors"
            >
              <div className="p-2 bg-amber-50 border border-amber-200 rounded-md">
                {stat.icon}
              </div>
              <span className="text-3xl font-heading text-espresso-800 tracking-tight">{stat.value}</span>
              <span className="text-xs text-espresso-400 text-center leading-tight">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
