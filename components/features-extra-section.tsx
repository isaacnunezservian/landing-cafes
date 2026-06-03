"use client";

import { motion } from "framer-motion";
import { Globe, Wifi, Camera, QrCode, CalendarDays, Tv } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Idioma + Moneda",
    description:
      "El comensal elige idioma (Español/Inglés) y moneda (ARS/USD/BRL) al escanear el QR. Ideal para turistas: ven tu carta en su idioma y entienden los precios al instante.",
    badge: null,
  },
  {
    icon: Wifi,
    title: "WiFi por QR",
    description:
      "Tus clientes se conectan al WiFi con un toque, sin pedir la clave. El mismo QR puede llevarlos también a tu carta.",
    badge: null,
  },
  {
    icon: Camera,
    title: "8 piezas para Instagram",
    description:
      "Incluye una sesión de grabación presencial en tu local. Con ese material te entregamos 8 piezas listas para Instagram para que muestres tu cafetería.",
    badge: "Bonus",
  },
  {
    icon: QrCode,
    title: "QR impresos e instalados",
    description:
      "Te llevamos los QR impresos e instalados en las mesas. Vos no tenés que hacer nada.",
    badge: "Bonus",
  },
  {
    icon: CalendarDays,
    title: "Menú del día",
    description:
      "Mostrá el menú del día o promos especiales y cambialos cuando quieras desde tu panel.",
    badge: null,
  },
  {
    icon: Tv,
    title: "Extras a medida",
    description:
      "¿Querés tu menú en las pantallas/TV del local o un cartel con QR para la calle? Lo desarrollamos a tu medida. Contanos qué necesitás.",
    badge: "A medida",
  },
];

const badgeStyles: Record<string, string> = {
  Bonus: "bg-amber-500/10 border-amber-500/30 text-amber-700",
  "A medida": "bg-terracota/10 border-terracota/30 text-terracota",
};

export function FeaturesExtraSection() {
  return (
    <section
      id="funcionalidades"
      className="relative w-full bg-crema py-24 md:py-32 border-b border-espresso-200"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit"
          >
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-sm font-medium text-espresso-500 tracking-wide">
              Funcionalidades
            </span>
          </motion.div>

          <h2 className="text-balance text-4xl font-heading tracking-tight text-espresso-800 md:text-5xl">
            {"Todo lo que incluye tu Cafex".split(" ").map((word, i) => (
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

          <p className="text-balance text-lg leading-relaxed text-espresso-500 max-w-2xl">
            Más que un menú digital. Una experiencia completa para tu local y tus clientes.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col gap-4 p-6 bg-white border border-espresso-200 rounded-2xl hover:shadow-md hover:shadow-espresso-900/5 transition-shadow"
            >
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                {feature.badge && (
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeStyles[feature.badge]}`}
                  >
                    {feature.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-espresso-800 font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-espresso-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
