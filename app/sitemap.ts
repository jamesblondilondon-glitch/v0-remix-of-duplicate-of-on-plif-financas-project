import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unpliqfinancas.com.br"

  // Static pages
  const staticPages = [
    "",
    "/artigos",
    "/sobre",
    "/contato",
    "/politica-privacidade",
    "/termos-uso",
    "/divulgacao",
    "/newsletter",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : ("weekly" as const),
    priority: route === "" ? 1 : 0.8,
  }))

  // Article pages
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/artigos/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
