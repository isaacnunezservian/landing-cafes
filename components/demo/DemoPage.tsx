"use client"

import { useState, useEffect, useRef, useCallback, type ReactElement } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X, MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import {
  IconCoffee, IconBread, IconToolsKitchen2, IconCake, IconTag, IconCookie,
} from "@tabler/icons-react"
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
}
@keyframes fade-in { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
.demo-fade-in { animation: fade-in 0.7s ease-out forwards; }
.demo-fade-in-delay { opacity:0; animation: fade-in 0.7s ease-out 0.2s forwards; }
@keyframes logo-glow {
  0%,100% { filter: drop-shadow(0 0 10px rgba(255,245,220,0.35)) drop-shadow(0 0 28px rgba(255,230,180,0.18)); }
  50% { filter: drop-shadow(0 0 22px rgba(255,245,220,0.65)) drop-shadow(0 0 50px rgba(255,220,140,0.30)); }
}
.demo-logo-glow { animation: logo-glow 3.5s cubic-bezier(0.45,0,0.55,1) infinite; }
@keyframes slide-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
.demo-slide-up { animation: slide-up 0.4s ease-out both; }
@keyframes pulse-subtle { 0%,100% { box-shadow:0 0 0 0 rgba(255,255,255,0.15); } 50% { box-shadow:0 0 20px 4px rgba(255,255,255,0.1); } }
.demo-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
.demo-scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none; }
.demo-scrollbar-hide::-webkit-scrollbar { display:none; }
`
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
      <div className="absolute inset-0 bg-black/80 md:bg-black/70 lg:bg-black/65" />

      <div className="relative flex flex-col items-center min-h-[100dvh] px-6 pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="demo-fade-in w-full flex justify-center">
          <img
            src={config.brand.logoHeroPath}
            alt={config.brand.name}
            className="w-full max-w-[340px] md:max-w-[400px] lg:max-w-[540px] h-auto demo-logo-glow md:[animation:none] md:drop-shadow-2xl"
          />
        </div>
        <div className="flex-1" />
        <div className="demo-fade-in-delay flex flex-col items-center">
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex flex-col items-center gap-2 px-12 py-5 md:px-14 md:py-5 lg:px-16 lg:py-6 border-2 border-white/40 bg-white/5 font-serif text-white rounded-sm text-2xl md:text-2xl lg:text-3xl tracking-widest hover:bg-white/15 hover:border-white/60 hover:scale-105 active:scale-95 transition-all duration-300 demo-pulse-subtle"
          >
            <span className="absolute inset-0 rounded-sm bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">{config.hero.ctaText}</span>
            <ChevronDown className="relative w-6 h-6 text-white/80 animate-bounce group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-16 h-px bg-white/20" />
      </div>
    </section>
  )
}

function DemoHeader({ config }: { config: DemoConfig }) {
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "#home" },
    { name: "Menú", href: "#menu" },
    { name: "Contacto", href: "#footer" },
  ]

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

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
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
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--color-nav-icon)" }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <button
          className="hidden md:inline-flex px-6 py-2 rounded-sm text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "var(--color-accent-gold)", color: "var(--color-nav-bg)" }}
          onClick={() => scrollTo("#footer")}
        >
          Visitanos
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden" style={{ color: "var(--color-nav-icon)" }}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 p-6 flex flex-col gap-4" style={{ backgroundColor: "var(--color-nav-bg)" }}>
          {navigation.map((item) => (
            <button key={item.name} onClick={() => scrollTo(item.href)} className="text-left text-sm font-medium" style={{ color: "var(--color-nav-icon)" }}>
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

const CATEGORY_ICONS: Record<string, ReactElement> = {
  cafeteria: <IconCoffee size={20} />,
  panaderia: <IconBread size={20} />,
  cocina: <IconToolsKitchen2 size={20} />,
  postres: <IconCake size={20} />,
  promociones: <IconTag size={20} />,
  merienda: <IconCookie size={20} />,
}

function CategoryNav({ categories, active, onSelect }: { categories: Category[]; active: string; onSelect: (id: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleSelect = useCallback((id: string) => {
    onSelect(id)
    const btn = document.querySelector(`[data-cat-btn="${id}"]`) as HTMLElement | null
    if (btn && scrollRef.current) {
      const container = scrollRef.current
      const scrollLeft = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: "smooth" })
    }
  }, [onSelect])

  return (
    <div
      ref={scrollRef}
      className="sticky top-0 z-40 overflow-x-auto demo-scrollbar-hide py-3 px-4 border-b border-white/5"
      style={{ backgroundColor: "var(--color-category-nav-bg)" }}
    >
      <div className="flex gap-1 min-w-max mx-auto max-w-7xl justify-center">
        {categories.map((cat) => {
          const isActive = active === cat.id
          return (
            <button
              key={cat.id}
              data-cat-btn={cat.id}
              onClick={() => handleSelect(cat.id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200"
              style={{
                color: isActive ? "var(--color-category-active)" : "var(--color-category-inactive)",
                backgroundColor: isActive ? "var(--color-card-bg)" : "transparent",
              }}
            >
              {CATEGORY_ICONS[cat.id] || <IconCoffee size={20} />}
              <span>{cat.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function DemoMenu({ config }: { config: DemoConfig }) {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0]?.id || "")
  const categoryImages = config.categories?.images || []

  const categories: Category[] = MENU_DATA.map((cat, i) => ({
    ...cat,
    image: categoryImages[i] ?? cat.image,
  }))

  // IntersectionObserver for active category detection
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    categories.forEach((cat) => {
      const el = document.getElementById(`cat-${cat.id}`)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveCategory(cat.id) },
        { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToCategory = (id: string) => {
    setActiveCategory(id)
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="menu" className="relative min-h-screen" style={{ backgroundColor: "var(--color-body-bg)" }}>
      <CategoryNav categories={categories} active={activeCategory} onSelect={scrollToCategory} />

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, catIdx) => (
          <div key={cat.id} id={`cat-${cat.id}`} className="demo-slide-up scroll-mt-20" style={{ animationDelay: `${catIdx * 0.05}s` }}>
            {/* Category card */}
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--color-card-bg)" }}>
              {/* Category image */}
              {cat.image && (
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <h2 className="absolute bottom-4 left-4 text-2xl font-serif font-bold text-white drop-shadow-lg">
                    {cat.name}
                  </h2>
                </div>
              )}
              {!cat.image && (
                <div className="px-5 pt-5">
                  <h2 className="text-xl font-serif font-bold" style={{ color: "var(--color-accent-gold)" }}>
                    {cat.name}
                  </h2>
                </div>
              )}

              {/* Items */}
              <div className="p-5 space-y-0">
                {cat.items.filter((item) => item.isAvailable).map((item, idx) => (
                  <div key={item.id}>
                    <div className="flex justify-between items-baseline py-3">
                      <div className="flex-1 pr-3">
                        <span className="font-medium text-sm" style={{ color: "var(--color-item-name)" }}>
                          {item.name}
                        </span>
                        {item.description && (
                          <p className="text-xs mt-0.5 opacity-60" style={{ color: "var(--color-item-name)" }}>
                            {item.description}
                          </p>
                        )}
                      </div>
                      {/* Dotted separator */}
                      <span className="flex-1 mx-2 border-b border-dotted opacity-20" style={{ borderColor: "var(--color-item-name)" }} />
                      <span className="font-bold text-sm whitespace-nowrap" style={{ color: "var(--color-price)" }}>
                        ${item.price.toLocaleString("es-AR")}
                      </span>
                    </div>
                    {idx < cat.items.filter((i) => i.isAvailable).length - 1 && (
                      <div className="border-b opacity-10" style={{ borderColor: "var(--color-item-divider)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DemoFooter({ config }: { config: DemoConfig }) {
  const { brand, contact, hours, values } = config
  const addressLines = contact.address.split("\n")

  return (
    <footer id="footer" className="border-t border-white/10" style={{ backgroundColor: "var(--color-footer-bg)", color: "var(--color-footer-text)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-footer-text)" }}>
              {brand.description}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4" style={{ color: "var(--color-footer-accent)" }}>Horarios</h4>
            <div className="space-y-2" style={{ color: "var(--color-footer-text)" }}>
              <div className="flex items-start gap-2">
                <Clock size={18} className="mt-1 shrink-0" style={{ color: "var(--color-footer-accent)" }} />
                <div>
                  {hours.map((slot) => (
                    <div key={slot.days} className="mb-1">
                      <p className="font-medium">{slot.days}</p>
                      <p>{slot.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4" style={{ color: "var(--color-footer-accent)" }}>Contacto</h4>
            <div className="space-y-3" style={{ color: "var(--color-footer-text)" }}>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0" style={{ color: "var(--color-footer-accent)" }} />
                <p>
                  {addressLines.map((line, i) => (
                    <span key={i}>{line}{i < addressLines.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
              {contact.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={18} style={{ color: "var(--color-footer-accent)" }} />
                  <p>{contact.phone}</p>
                </div>
              )}
              {contact.whatsapp && (
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} style={{ color: "var(--color-footer-accent)" }} />
                  <p>{contact.whatsapp}</p>
                </div>
              )}
            </div>
          </div>

          {/* Values */}
          {values && values.length > 0 && (
            <div>
              <h4 className="font-serif text-lg font-bold mb-4" style={{ color: "var(--color-footer-accent)" }}>Nuestros Valores</h4>
              <div className="space-y-2" style={{ color: "var(--color-footer-text)" }}>
                {values.map((value) => (
                  <p key={value}>• {value}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Google Maps */}
        {contact.googleMapsEmbedUrl && (
          <div className="mb-12 w-full">
            <iframe
              src={contact.googleMapsEmbedUrl}
              className="w-full h-64 md:h-80 rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

        <div className="border-t border-white/10 pt-8 text-center text-sm" style={{ color: "var(--color-footer-text)" }}>
          <p>&copy; {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs opacity-60">
            Powered by{" "}
            <a href="https://cafex.digital" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
              Cafex
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function DemoWhatsApp({ config }: { config: DemoConfig }) {
  const phone = config.contact.whatsapp.replace(/[^0-9]/g, "")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const menuSection = document.getElementById("menu")
    if (!menuSection) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0 }
    )
    observer.observe(menuSection)
    return () => observer.disconnect()
  }, [])

  if (!phone) return null

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(`Hola ${config.brand.name} ☕ Me gustaría hacer una consulta`)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escribinos por WhatsApp!
      </span>
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
