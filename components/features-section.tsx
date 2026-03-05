"use client";

import React from "react"
import { motion } from "framer-motion";
import { 
  QrCode, 
  Smartphone, 
  Palette, 
  MessageCircle, 
  MapPin, 
  Star, 
  Image, 
  Zap,
  ToggleLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: "1",
    icon: <Zap className="w-5 h-5 text-white" />,
    title: "Precios en Tiempo Real",
    description:
      "Cambiá precios desde tu celular en 5 segundos. Sin llamar a nadie, sin costo extra. Ideal para economías con precios dinámicos.",
  },
  {
    id: "2",
    icon: <Palette className="w-5 h-5 text-white" />,
    title: "Diseño 100% Personalizado",
    description:
      "Tus colores, tu tipografía, tu logo. No es un template genérico — es una pieza de diseño web única que refleja tu marca.",
  },
  {
    id: "3",
    icon: <QrCode className="w-5 h-5 text-white" />,
    title: "QR + Link para Redes",
    description:
      "QR listo para mesas y barra. URL para tu bio de Instagram, WhatsApp Business, Google Maps y cualquier red social.",
  },
  {
    id: "4",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    title: "Tu Estudio Autónomo",
    description:
      "Agregá productos, activá promos, desactivá lo que se acabó. Tan simple como editar un mensaje de WhatsApp.",
  },
  {
    id: "5",
    icon: <MessageCircle className="w-5 h-5 text-white" />,
    title: "WhatsApp Integrado",
    description:
      "Botón flotante siempre visible. Un click abre WhatsApp con mensaje pre-armado para pedidos directos. Sin comisiones de apps de delivery.",
  },
  {
    id: "6",
    icon: <Star className="w-5 h-5 text-white" />,
    title: "Google Reviews",
    description:
      "Sección dedicada que invita a dejar reseñas en Google Maps. Más reseñas = más visibilidad = más clientes.",
  },
  {
    id: "7",
    icon: <Image className="w-5 h-5 text-white" />,
    title: "Galería Fotográfica",
    description:
      "Sección con fotos profesionales del local, productos y ambiente. Efecto hover con zoom y overlay de texto.",
  },
  {
    id: "8",
    icon: <MapPin className="w-5 h-5 text-white" />,
    title: "Mapa de Google Integrado",
    description:
      "El cliente ve la ubicación exacta del local sin salir de la página. Incluye horarios, dirección y contacto en el footer.",
  },
  {
    id: "9",
    icon: <ToggleLeft className="w-5 h-5 text-white" />,
    title: "Activar/Desactivar Productos",
    description:
      "¿Se acabó el cheesecake? Lo desactivás con un click. Cuando vuelva el stock, lo reactivás. Sin eliminar nada.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function FeaturesSection() {
  return (
    <section
      id="funcionalidades"
      className={cn(
        "w-full bg-crema py-24 border-b border-espresso-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 mb-16"
        >
          <div className="flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-sm font-medium text-espresso-400 tracking-wide">
              Funcionalidades
            </span>
          </div>
          <h2 className="text-balance text-espresso-800 text-4xl md:text-5xl lg:text-6xl font-heading leading-[1.1] max-w-[700px] tracking-tight">
            {"Todo lo que tu Vitral incluye".split(" ").map((word, i) => (
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
          <p className="text-espresso-500 text-base leading-relaxed max-w-xl">
            No solo un menú: es un sitio web completo con galería, mapa, WhatsApp, reviews, 
            contacto y tu estudio de administración. Todo optimizado para mobile.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-16"
        >
          {DEFAULT_FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col group"
            >
              {/* Icon */}
              <div className="mb-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-b from-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 transform transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h4 className="text-espresso-800 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-balance text-espresso-500 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 overflow-x-auto"
        >
          <h3 className="text-espresso-800 text-2xl font-heading mb-8 tracking-tight">¿Por qué no un PDF o un template genérico?</h3>
          <div className="bg-white rounded-lg border border-espresso-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-espresso-200">
                  <th className="p-4 pr-6 text-espresso-400 text-sm font-medium">Característica</th>
                  <th className="p-4 pr-6 text-espresso-400 text-sm font-medium">Competencia genérica</th>
                  <th className="p-4 text-amber-500 text-sm font-medium">Vitral</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Diseño", "Template igual para todos", "100% personalizado a tu marca"],
                  ["Identidad visual", "Sin colores ni logo propios", "Tus colores, fuentes y logo"],
                  ["Experiencia", "Listado de texto plano", "Hero, galería, animaciones premium"],
                  ["Funcionalidades", "Solo muestra precios", "WhatsApp, mapa, reviews, sugerencias"],
                  ["Edición de precios", "Interfaz básica", "Tu estudio intuitivo y elegante"],
                  ["Marca del proveedor", "Logo del proveedor visible", "100% tu marca, sin terceros"],
                ].map(([feature, competitor, ours], idx) => (
                  <tr key={idx} className="border-b border-espresso-100 last:border-b-0">
                    <td className="p-4 pr-6 text-espresso-800 font-medium">{feature}</td>
                    <td className="p-4 pr-6 text-espresso-400">{competitor}</td>
                    <td className="p-4 text-espresso-700">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-amber-500 text-white hover:bg-amber-600 px-8 rounded-lg"
            asChild
          >
            <a href="#precio">Ver Planes y Precios</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-espresso-200 text-espresso-800 hover:bg-crema bg-white px-8 rounded-lg"
            asChild
          >
            <a href="#testimonios">Ver Testimonios</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
