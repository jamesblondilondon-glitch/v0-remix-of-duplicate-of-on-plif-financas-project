import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"

const economyPosts = [
  {
    slug: "metodo-3-potes",
    title: "O método dos 3 potes: forma simples de controlar seus gastos",
    excerpt: "Sistema prático para organizar seu dinheiro em categorias e nunca mais perder o controle.",
    image: "/potes-organizacao-dinheiro.jpg",
    readTime: "5 min",
  },
  {
    slug: "reserva-emergencia",
    title: "Como montar uma reserva de emergência mesmo ganhando pouco",
    excerpt: "Passo a passo para criar sua reserva financeira, independente do seu salário.",
    image: "/reserva-emergencia-seguranca.jpg",
    readTime: "6 min",
  },
]

export function EconomySection() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Economia e Investimentos</h2>
        <Link
          href="/investimentos"
          className="text-primary hover:text-accent transition-colors flex items-center gap-2"
        >
          Ver mais
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {economyPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col md:flex-row gap-4 bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col justify-center">
              <Link href={`/artigos/${post.slug}`}>
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors text-balance leading-snug">
                  {post.title}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
