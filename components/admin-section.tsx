"use client";

import { motion } from "framer-motion";
import { FileEdit, Play } from "lucide-react";
import { useState } from "react";

const ADMIN_VIDEO_URL = "https://www.youtube.com/watch?v=oY0hm4p46k4";

export function AdminSection() {
  const [playing, setPlaying] = useState(false);

  // Detect URL type
  const isYouTube =
    ADMIN_VIDEO_URL.includes("youtube.com") || ADMIN_VIDEO_URL.includes("youtu.be");
  const isVimeo = ADMIN_VIDEO_URL.includes("vimeo.com");
  const isEmbed = isYouTube || isVimeo;

  return (
    <section
      id="admin"
      className="relative w-full bg-white py-24 md:py-32 border-b border-espresso-200"
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
              Tu Panel de Administrador
            </span>
          </motion.div>

          <h2 className="text-balance text-4xl font-heading tracking-tight text-espresso-800 md:text-5xl">
            {"Administrá todo sin depender de nadie".split(" ").map((word, i) => (
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
            Tu panel de admin es tan simple como editar un mensaje de WhatsApp. Cambiá precios,
            agregá productos y gestioná promos del día — desde tu celular, en segundos.
          </p>
        </div>

        {/* Video Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-espresso-900/20 aspect-video mb-16 bg-espresso-800"
        >
          {playing && ADMIN_VIDEO_URL !== "REEMPLAZAR_CON_URL_EXTERNA" ? (
            isEmbed ? (
              <iframe
                src={
                  isYouTube
                    ? ADMIN_VIDEO_URL.replace("watch?v=", "embed/") + "?autoplay=1"
                    : ADMIN_VIDEO_URL.replace("vimeo.com/", "player.vimeo.com/video/") +
                      "?autoplay=1"
                }
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <video
                src={ADMIN_VIDEO_URL}
                controls
                autoPlay
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )
          ) : (
            /* Poster / click-to-play state */
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 group cursor-pointer"
              aria-label="Reproducir video del panel de administrador"
            >
              {/* Gradient poster */}
              <div className="absolute inset-0 bg-gradient-to-br from-espresso-800 via-espresso-700 to-espresso-900" />
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22 /></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22 fill=%22%23ffffff%22/></svg>')",
                }}
              />

              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-amber-500 shadow-lg shadow-amber-500/40 group-hover:bg-amber-400 transition-colors"
                >
                  <Play className="w-9 h-9 text-white ml-1" fill="currentColor" />
                </motion.div>
                <p className="text-crema/90 font-semibold text-base md:text-lg">
                  Ver cómo funciona el panel de admin
                </p>
                <p className="text-crema/50 text-sm">~1 minuto</p>
              </div>
            </button>
          )}
        </motion.div>

        {/* Carta Editable Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl bg-crema border border-espresso-200 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
              <FileEdit className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-espresso-800 font-heading text-xl md:text-2xl">
                  Carta editable
                </h3>
                <span className="text-xs font-semibold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                  Nuevo
                </span>
              </div>
              <p className="text-espresso-500 leading-relaxed">
                ¿Querés cambiar un precio en tu carta impresa? Nos das una imagen de tu carta y la
                convertimos en una{" "}
                <strong className="text-espresso-700">imagen editable</strong> desde tu panel.
                Cambiás el precio vos mismo y descargás la imagen lista para imprimir, con el mismo
                diseño y formato de siempre.{" "}
                <strong className="text-espresso-700">Sin diseñador, sin esperas.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
