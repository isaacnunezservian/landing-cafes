import { readdir, readFile } from "fs/promises"
import path from "path"
import { notFound } from "next/navigation"
import { DemoConfig } from "@/lib/demo-config-context"
import DemoPage from "@/components/demo/DemoPage"

export async function generateStaticParams() {
  try {
    const demosDir = path.join(process.cwd(), "demos")
    const entries = await readdir(demosDir, { withFileTypes: true })
    return entries
      .filter((e) => e.isDirectory())
      .map((e) => ({ slug: e.name }))
  } catch {
    return []
  }
}

async function getDemoConfig(slug: string): Promise<DemoConfig | null> {
  try {
    const configPath = path.join(process.cwd(), "demos", slug, "config.json")
    const raw = await readFile(configPath, "utf-8")
    return JSON.parse(raw) as DemoConfig
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const config = await getDemoConfig(slug)

  if (!config) {
    return { title: "Demo no encontrado" }
  }

  const faviconPath = config.brand.logoNavbarPath

  return {
    title: config.seo?.title ?? `${config.brand.name} | Menú Digital`,
    description: config.seo?.description ?? config.brand.description,
    icons: {
      icon: faviconPath,
      apple: faviconPath,
    },
    openGraph: {
      title: config.seo?.title ?? `${config.brand.name} | Menú Digital`,
      description: config.seo?.description ?? config.brand.description,
      images: [{ url: faviconPath }],
    },
  }
}

export default async function DemoSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const config = await getDemoConfig(slug)

  if (!config) {
    notFound()
  }

  return <DemoPage config={config} />
}
