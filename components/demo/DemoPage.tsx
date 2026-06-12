"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import { DemoConfig, DemoConfigProvider } from "@/lib/demo-config-context"
import { MENU_DATA, Category } from "@/lib/demo-menu-data"

function ThemeStyle({ config }: { config: DemoConfig }) {
  const t = config.theme
  const css = `:root {
  --color-nav-bg: ${t.navBg};
  --color-nav-icon: ${t.navIconColor};
  --color-accent-gold: ${t.accentGold};
  --color-item-name: ${t.itemNameColor};
  --color-price: ${t.priceColor};
  --color-body-bg: ${t.bodyBg};
  --color-card-bg: ${t.cardBg};
  --color-category-nav-bg: ${t.categoryNavBg ?? t.bodyBg};
  --color-category-active: ${t.categoryActiveColor ?? t.accentGold};
  --color-category-inactive: ${t.categoryInactiveColor ?? '#666666'};
  --color-item-divider: ${t.itemDividerColor ?? '#282828'};
  --color-hero-cta: ${t.heroCTAColor ?? '#ffffff'};
  --color-whatsapp-btn: ${t.whatsappBtnColor ?? '#25D366'};
  --color-footer-bg: ${t.footerBg ?? t.bodyBg};
  --color-footer-text: ${t.footerTextColor ?? '#999999'};
  --color-footer-accent: ${t.footerAccentColor ?? t.accentGold};
}`
  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

function DemoHero({ config }: { config: DemoConfig }) {
  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden">
      {config.hero.videoPath && (
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={config.hero.videoPath} type="video/mp4" />
        </video>
      )}
      {!config.hero.videoPath && config.hero.imageFallbackPath && (
        <img src={config.hero.imageFallbackPath} alt="" className="absolute inset-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative flex flex-col items-center min-h-[100dvh] px-6 pt-20 pb-16">
        <div className="w-full flex justify-center">
          <img
            src={config.brand.logoHeroPath}
            alt={config.brand.name}
            className="w-full max-w-[340px] md:max-w-[400px] lg:max-w-[540px] h-auto drop-shadow-2xl"
          />
        </div>
        <div className="flex-1" />
        <button
          onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <span className="text-lg font-medium" style={{ color: "var(--color-hero-cta)" }}>
            {config.hero.ctaText}
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" style={{ color: "var(--color-hero-cta)" }} />
        </button>
      </div>
    </section>
  )
}

function DemoHeader({ config }: { config: DemoConfig }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const menu = document.getElementById("menu")
    if (!menu) return
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0, rootMargin: "-60px 0px 0px 0px" }
    )
    observer.observe(menu)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`hidden md:block sticky top-0 z-50 border-b border-white/10 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ backgroundColor: "var(--color-nav-bg)" }}
    >
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
        <Image
          src={config.brand.logoNavbarPath}
          alt={config.brand.name}
          width={48}
          height={48}
          className="h-12 w-12 object-contain rounded-sm"
        />
        <div className="flex items-center gap-8">
          {[{ name: "Inicio", href: "#home" }, { name: "Menú", href: "#menu" }, { name: "Contacto", href: "#footer" }].map((link) => (
            <button
              key={link.name}
              onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}

function DemoMenu({ config }: { config: DemoConfig }) {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0]?.id || "")
  const categoryImages = config.categories?.images || []

  const categories = MENU_DATA.map((cat, i) => ({
    ...cat,
    image: categoryImages[i] ?? cat.image,
  }))

  return (
    <section id="menu" className="min-h-screen py-8" style={{ backgroundColor: "var(--color-body-bg)" }}>
      {/* Category navigation */}
      <div className="sticky top-0 z-40 overflow-x-auto scrollbar-hide py-3 px-4" style={{ backgroundColor: "var(--color-category-nav-bg)" }}>
        <div className="flex gap-2 min-w-max mx-auto max-w-7xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
              style={{
                color: activeCategory === cat.id ? "var(--color-category-active)" : "var(--color-category-inactive)",
                borderBottom: activeCategory === cat.id ? "2px solid var(--color-category-active)" : "2px solid transparent",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <div className="max-w-4xl mx-auto px-4 mt-6 space-y-10">
        {categories.map((cat) => (
          <div key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-20">
            {/* Category header with optional image */}
            <div className="flex items-center gap-4 mb-4">
              {cat.image && (
                <img src={cat.image} alt={cat.name} className="w-16 h-16 rounded-lg object-cover" />
              )}
              <h2 className="text-xl font-bold" style={{ color: "var(--color-accent-gold)" }}>
                {cat.name}
              </h2>
            </div>

            {/* Items */}
            <div className="space-y-1">
              {cat.items.filter((item) => item.isAvailable).map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start py-3 border-b"
                  style={{ borderColor: "var(--color-item-divider)" }}
                >
                  <div className="flex-1 pr-4">
                    <span className="font-medium" style={{ color: "var(--color-item-name)" }}>
                      {item.name}
                    </span>
                    {item.description && (
                      <p className="text-sm mt-0.5 opacity-70" style={{ color: "var(--color-item-name)" }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="font-bold whitespace-nowrap" style={{ color: "var(--color-price)" }}>
                    ${item.price.toLocaleString("es-AR")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DemoFooter({ config }: { config: DemoConfig }) {
  return (
    <footer id="footer" className="py-12 px-6" style={{ backgroundColor: "var(--color-footer-bg)" }}>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Image
          src={config.brand.logoNavbarPath}
          alt={config.brand.name}
          width={64}
          height={64}
          className="mx-auto h-16 w-16 object-contain"
        />
        <p className="text-lg font-medium" style={{ color: "var(--color-footer-accent)" }}>
          {config.brand.name}
        </p>
        <p className="whitespace-pre-line text-sm" style={{ color: "var(--color-footer-text)" }}>
          {config.contact.address}
        </p>
        {config.hours.length > 0 && (
          <div className="space-y-1">
            {config.hours.map((h, i) => (
              <p key={i} className="text-sm" style={{ color: "var(--color-footer-text)" }}>
                <span className="font-medium">{h.days}:</span> {h.hours}
              </p>
            ))}
          </div>
        )}
        {config.contact.phone && (
          <a
            href={`tel:${config.contact.phone}`}
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: "var(--color-footer-accent)" }}
          >
            <Phone className="w-4 h-4" /> {config.contact.phone}
          </a>
        )}
        <p className="text-xs pt-4" style={{ color: "var(--color-footer-text)" }}>
          Powered by{" "}
          <a href="https://cafex.digital" target="_blank" rel="noopener noreferrer" className="underline">
            Cafex
          </a>
        </p>
      </div>
    </footer>
  )
}

function DemoWhatsApp({ config }: { config: DemoConfig }) {
  const phone = config.contact.whatsapp.replace(/[^0-9]/g, "")
  if (!phone) return null

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ backgroundColor: "var(--color-whatsapp-btn)" }}
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.314 0-4.462-.752-6.202-2.023l-.432-.324-2.927.981.981-2.927-.324-.432A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
      </svg>
    </a>
  )
}

export default function DemoPage({ config }: { config: DemoConfig }) {
  return (
    <DemoConfigProvider config={config}>
      <ThemeStyle config={config} />
      <main className="min-h-screen" style={{ backgroundColor: "var(--color-body-bg)" }}>
        <DemoHeader config={config} />
        <DemoHero config={config} />
        <DemoMenu config={config} />
        <DemoFooter config={config} />
        <DemoWhatsApp config={config} />
      </main>
    </DemoConfigProvider>
  )
}
