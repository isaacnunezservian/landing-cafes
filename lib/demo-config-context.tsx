"use client"

import { createContext, useContext } from "react"

export interface DemoConfig {
  slug: string
  brand: {
    name: string
    tagline: string
    description: string
    logoHeroPath: string
    logoNavbarPath: string
    logoNavbarExt?: string
  }
  theme: {
    navBg: string
    navIconColor: string
    accentGold: string
    itemNameColor: string
    priceColor: string
    bodyBg: string
    cardBg: string
    categoryNavBg?: string
    categoryActiveColor?: string
    categoryInactiveColor?: string
    itemDividerColor?: string
    heroCTAColor?: string
    whatsappBtnColor?: string
    aboutBg?: string
    aboutTitleColor?: string
    aboutAccentColor?: string
    reviewsBg?: string
    reviewsTextColor?: string
    reviewsStarColor?: string
    suggestionsBg?: string
    suggestionsTextColor?: string
    suggestionsAccentColor?: string
    footerBg?: string
    footerTextColor?: string
    footerAccentColor?: string
  }
  hero: {
    videoPath: string | null
    imageFallbackPath: string | null
    ctaText: string
    videoExt?: string
  }
  categories?: {
    images: (string | null)[]
  }
  contact: {
    address: string
    phone: string
    whatsapp: string
    googleMapsEmbedUrl: string
    googlePlaceId: string
  }
  hours: { days: string; hours: string }[]
  values: string[]
  seo?: {
    title: string
    description: string
    keywords: string
  }
  about?: {
    features?: {
      emoji: string
      title: string
      description: string
    }[]
  }
}

const DemoConfigContext = createContext<DemoConfig | null>(null)

export function DemoConfigProvider({
  config,
  children,
}: {
  config: DemoConfig
  children: React.ReactNode
}) {
  return (
    <DemoConfigContext.Provider value={config}>
      {children}
    </DemoConfigContext.Provider>
  )
}

export function useDemoConfig() {
  const config = useContext(DemoConfigContext)
  if (!config) throw new Error("useDemoConfig must be used within DemoConfigProvider")
  return config
}
