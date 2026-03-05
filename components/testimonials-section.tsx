"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Pasamos de reimprimir el menú cada 3 semanas a cambiar precios desde el celular en segundos. Lo que gastábamos en impresión ya lo recuperamos. Y encima, nuestro Vitral se ve increíble — nuestros clientes nos preguntan quién nos hizo la página.",
    author: "Valentina Ruiz",
    role: "DUEÑA DE CAFÉ BOTÁNICO — PALERMO, CABA",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Valentina&backgroundColor=6B5B95",
  },
  {
    id: 2,
    quote:
      "Pusimos el link en la bio de Instagram y las preguntas de '¿cuánto sale?' bajaron un 80%. Ahora los clientes llegan sabiendo lo que quieren pedir. Es otro nivel de experiencia.",
    author: "Martín Giménez",
    role: "FUNDADOR DE TOSTADO SPECIALTY COFFEE — BELGRANO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Martin&backgroundColor=88498F",
  },
  {
    id: 3,
    quote:
      "Lo que más me gustó es que nuestro Vitral parece nuestro al 100%. Los colores, el logo, las fotos de nuestros productos. No hay ningún logo de tercero. Mis clientes creen que invertimos una fortuna en la web.",
    author: "Lucía Fernández",
    role: "CO-FUNDADORA DE DULCE MASA BAKERY — RECOLETA",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucia&backgroundColor=C55A7B",
  },
  {
    id: 4,
    quote:
      "Tenemos heladería y cafetería. El Vitral maneja ambas secciones de forma independiente. Cuando se acaba un gusto de helado, lo desactivo desde tu estudio y listo. Sin llamar a nadie. Es una genialidad.",
    author: "Diego Moretti",
    role: "GERENTE DE GELATO & BREW — SAN TELMO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diego&backgroundColor=4A5899",
  },
  {
    id: 5,
    quote:
      "Hacemos promos de lunes a viernes y antes era un caos comunicarlas. Ahora las cargo en el estudio en 30 segundos, las comparto en historias con el link, y cuando termina la promo la saco. Facilísimo.",
    author: "Camila Herrera",
    role: "ENCARGADA DE RITUAL CAFÉ — VILLA CRESPO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camila&backgroundColor=6B7280",
  },
  {
    id: 6,
    quote:
      "El botón de WhatsApp flotante fue un golazo. Ahora recibimos pedidos directos sin pagar comisiones de apps de delivery. Y la sección de reviews nos ayudó a pasar de 15 a 60 reseñas en Google en dos meses.",
    author: "Tomás Aguirre",
    role: "DUEÑO DE LA ESTACIÓN COFFEE — CABALLITO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tomas&backgroundColor=7C3AED",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonios" className="w-full bg-white py-24 md:py-32 border-b border-espresso-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
            <span className="text-sm font-medium text-espresso-400 tracking-wide">
              Testimonios
            </span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <h2 className="text-balance text-4xl md:text-5xl font-heading text-espresso-800">
              {"Lo que dicen nuestras marcas".split(" ").map((word, i) => (
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
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={prevTestimonial}
                className="p-3 border border-espresso-200 bg-white text-espresso-800 hover:bg-crema transition-colors rounded-lg"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 border border-espresso-200 bg-white text-espresso-800 hover:bg-crema transition-colors rounded-lg"
                aria-label="Testimonio siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .concat(
              testimonials.slice(
                0,
                Math.max(0, currentIndex + 3 - testimonials.length)
              )
            )
            .map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-8 ${
                  index !== 2 ? "md:border-r border-espresso-200 border-b md:border-b-0" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="text-amber-500 text-4xl font-heading mb-6">&ldquo;</div>

                {/* Testimonial Text */}
                <p className="text-espresso-700 text-base leading-relaxed mb-8 min-h-[200px]">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <div>
                    <div className="text-espresso-800 font-medium text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-espresso-400 text-xs uppercase tracking-wider">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
