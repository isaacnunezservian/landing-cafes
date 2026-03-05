"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Sparkles, Shield, Laptop, Coffee, Palette, MapPin, Star, QrCode, Upload, MonitorSmartphone } from "lucide-react";

const features = [
  { icon: Palette, text: "Diseño 100% personalizado a tu identidad de marca" },
  { icon: MonitorSmartphone, text: "Panel de admin: cambiá precios desde el celu en 5 segundos" },
  { icon: QrCode, text: "QR listo para imprimir en tu local" },
  { icon: Upload, text: "Carga completa del menú — solo pasanos fotos de tu carta" },
  { icon: Coffee, text: "Capacitación presencial en tu cafetería" },
  { icon: Laptop, text: "Videollamadas ilimitadas para personalizar juntos" },
  { icon: Shield, text: "Dominio propio incluido por 1 año" },
  { icon: Star, text: "Mantenimiento incluido por 1 año" },
  { icon: Sparkles, text: "Funcionalidades extra a pedido, sin costo adicional" },
  { icon: MapPin, text: "Desarrollo presencial en tu cafetería si lo preferís" },
  { icon: Star, text: "Sección de sugerencias y reviews para Google Maps" },
  { icon: MessageCircle, text: "Botón de WhatsApp integrado para tus clientes" },
];

export function PricingSection() {
  return (
    <section
      id="precio"
      className="relative w-full bg-espresso-800 py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-2 border border-amber-500/30 rounded-full w-fit"
          >
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-sm font-medium text-amber-400 tracking-wide">Precio</span>
          </motion.div>
          <h2 className="text-balance text-4xl md:text-5xl tracking-tight leading-tight font-heading text-crema">
            {"Todo incluido, un solo precio".split(" ").map((word, i) => (
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
          <p className="text-crema/60 text-base max-w-xl">
            No estás pagando por un menú. Estás invirtiendo en una presencia digital profesional que trabaja para vos 24/7.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl border-2 border-amber-500 bg-gradient-to-b from-espresso-600/50 to-espresso-800/80 backdrop-blur-sm shadow-2xl shadow-amber-500/10 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />

            <div className="p-8 md:p-12">
              {/* Price Block */}
              <div className="text-center mb-10">
                {/* Discount Badge */}
                <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/40 px-5 py-2 rounded-full mb-5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                  <span className="text-sm font-semibold text-red-400">Oferta válida hasta el 08/03</span>
                </div>

                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="font-mono text-2xl md:text-3xl text-crema/40 line-through decoration-red-500/60 decoration-2">
                    $500.000
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="font-mono text-6xl md:text-7xl font-bold text-crema tracking-tighter">
                    $300.000
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 px-4 py-1.5 rounded-full mt-3 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-amber-400">Todo incluido · Ahorrás $200.000</span>
                </div>
                <p className="text-crema/50 text-base font-mono">ARS · Pago único</p>
                <p className="text-crema/40 text-sm mt-2">Después del primer año: mantenimiento $50.000/año</p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-crema/10" />
                <span className="text-xs text-crema/40 font-medium tracking-wider uppercase">Qué incluye</span>
                <div className="flex-1 h-px bg-crema/10" />
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 mt-0.5">
                      <feature.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-sm text-crema/80 leading-relaxed pt-1">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <motion.a
                  href="https://wa.me/5491170061908?text=Hola%2C%20quiero%20crear%20mi%20Cafex"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-base px-10 py-4 rounded-xl transition-colors shadow-lg shadow-amber-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quiero mi Cafex
                </motion.a>
                <p className="text-crema/40 text-sm mt-4">
                  Respondemos en minutos · Sin compromisos
                </p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
