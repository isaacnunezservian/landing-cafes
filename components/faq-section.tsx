"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "¿Cuánto tarda en estar listo?",
    answer:
      "72 horas. Nos pasás fotos de la carta, tu logo y los precios, y en 72 hs tenés tu Cafex listo para usar. Nosotros nos encargamos de la carga completa del menú, el diseño y la puesta en producción. Vos no tenés que hacer nada más.",
  },
  {
    id: "2",
    question: "¿Puedo cambiar los precios yo solo?",
    answer:
      "Sí, absolutamente. Entrás a tu panel desde tu celular o computadora, cambiás el precio y listo. Se actualiza en tu Cafex al instante. No necesitás llamarnos ni pagar extra.",
  },
  {
    id: "3",
    question: "¿Mis clientes tienen que descargar alguna app?",
    answer:
      "No. Es una página web. Se abre directamente en el navegador del celular. No necesita descarga, no necesita registro, no necesita nada. Escanean el QR o tocan el link y ya están viendo tu Cafex.",
  },
  {
    id: "4",
    question: "¿Sirve como página web y para Instagram?",
    answer:
      "Sí, las dos cosas. Cafex es ideal como página web para posicionarte en Google y como link para tu bio de Instagram. Está totalmente optimizada por su diseño y calidad visual. Incluso si lo necesitás, podemos hacer 2 versiones: una para el QR en tu local y otra para Instagram.",
  },
  {
    id: "5",
    question: "¿Necesito saber de tecnología para administrarlo?",
    answer:
      "No. Tu panel es tan simple como editar un mensaje de WhatsApp. Si sabés usar un celular, podés administrar tu Cafex. Además, te damos una capacitación presencial incluida.",
  },
  {
    id: "6",
    question: "Ya tengo un menú en PDF, ¿por qué cambiar?",
    answer:
      "Un PDF es estático. Cada vez que cambian los precios, hay que regenerarlo, rediseñarlo y redistribuirlo. Además, no se ve bien en celular, no tiene interactividad, y no refleja la calidad de tu marca. Tu Cafex se actualiza en 5 segundos, tiene botón de WhatsApp, mapa, reviews, galería, y se ve increíble en cualquier dispositivo.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white py-24 md:py-32 border-b border-espresso-200"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit">
              <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
              <span className="text-sm font-medium text-espresso-400 tracking-wide">
                FAQ
              </span>
            </div>
            
            <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-heading text-espresso-800 tracking-tight leading-[1.1]">
              {"Preguntas frecuentes".split(" ").map((word, i) => (
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

            <p className="text-balance text-base md:text-lg text-espresso-500 leading-relaxed max-w-md">
              Respuestas rápidas sobre Cafex. 
              Si no encontrás lo que buscás, escribinos por WhatsApp y te respondemos al instante.
            </p>

            <a
              href="https://wa.me/5491170061908?text=Hola%2C%20tengo%20una%20consulta%20sobre%20Cafex"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors text-sm font-medium w-fit"
            >
              Consultar por WhatsApp →
            </a>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={cn(
                  "border-t border-espresso-200",
                  index === faqs.length - 1 && "border-b"
                )}
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-lg md:text-xl font-normal text-espresso-800 group-hover:text-espresso-600 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-espresso-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-12">
                        <p className="text-base leading-relaxed text-espresso-500">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
