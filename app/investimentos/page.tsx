import { getAllArticles } from "@/lib/articles"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investimentos - Unpliq Finanças",
  description:
    "Aprenda a investir seu dinheiro com segurança. Guias práticos sobre Tesouro Direto, CDB, ações e muito mais.",
}

export default function InvestimentosPage() {
  const allArticles = getAllArticles()
  const investimentosArticles = allArticles.filter(
    (article) => article.category === "Investimentos" || article.tags.includes("investimentos"),
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Investimentos</h1>
        <p className="text-lg text-muted-foreground">
          Aprenda a investir seu dinheiro com segurança e inteligência. Guias práticos sobre Tesouro Direto, CDB, ações,
          fundos imobiliários e muito mais para fazer seu patrimônio crescer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {investimentosArticles.map((article) => (
          <article
            key={article.id}
            className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
          >
            <Link href={`/artigos/${article.slug}`}>
              <div className="relative h-48 w-full">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {article.category}
                </span>
                <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{article.title}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
