import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { getAllArticles } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Todos os Artigos - OnPlif Finanças",
  description: "Confira todos os nossos artigos sobre finanças pessoais, investimentos, economia e dicas de dinheiro.",
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Todos os Artigos</h1>
        <p className="text-lg text-muted-foreground">
          Explore nosso conteúdo completo sobre finanças pessoais, investimentos e economia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/artigos/${article.slug}`}>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors text-balance leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                  <time dateTime={article.date}>{new Date(article.date).toLocaleDateString("pt-BR")}</time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
