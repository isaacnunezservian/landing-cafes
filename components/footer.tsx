import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-crema border-t border-espresso-200">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-12">
        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Founder Photo — warm ring accent */}
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-terracota opacity-20 blur-sm" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-xl shadow-amber-500/10">
                <Image
                  src="/images/fundador.png"
                  alt="Rafael, fundador de Cafex"
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
            </div>
          </div>

          {/* Message + CTAs */}
          <div className="flex-1 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-3">
              <span className="font-heading text-2xl tracking-wide text-espresso-800">Cafex</span>
              <span className="text-xs font-mono text-amber-600 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">Fundador</span>
            </Link>
            <p className="text-base text-espresso-600 leading-relaxed mb-6 max-w-lg">
              Hola, soy Rafael! Podés visitar mi LinkedIn o escribirme directamente. Va a ser un gustazo ayudarte!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/isaac-nunez-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white font-medium text-sm px-5 py-3 rounded-xl transition-colors shadow-md shadow-[#0A66C2]/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Mi LinkedIn
              </a>

            </div>
            <a
              href="mailto:isaac.nunezservian@gmail.com"
              className="mt-4 inline-block text-xs text-espresso-400 hover:text-espresso-600 transition-colors"
            >
              isaac.nunezservian@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-espresso-200 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-espresso-400">
            © {new Date().getFullYear()} Cafex. Buenos Aires, Argentina.
          </p>
          <p className="text-amber-600 text-xs font-medium">Tu marca, en cada detalle.</p>
        </div>
      </div>
    </footer>
  );
}
