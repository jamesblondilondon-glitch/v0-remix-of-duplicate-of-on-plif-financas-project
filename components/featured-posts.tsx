import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const featuredPosts = [
  {
    id: 1,
    slug: "5-erros-que-te-fazem-perder-dinheiro",
    title: "5 erros que te fazem perder dinheiro todo mês",
    excerpt:
      "Descubra os principais erros financeiros que podem estar sabotando seu orçamento e aprenda como evitá-los.",
    image: "/pessoa-preocupada-com-contas.jpg",
    category: "Finanças Pessoais",
    readTime: "5 min",
    date: "2025-01-15",
  },
  {
    id: 2,
    slug: "como-economizar-500-reais",
    title: "Como economizar R$500 sem perceber",
    excerpt: "Estratégias simples e práticas para economizar dinheiro todos os meses sem grandes sacrifícios.",
    image: "/cofrinho-moedas-economia.jpg",
    category: "Economia",
    readTime: "4 min",
    date: "2025-01-14",
  },
  {
    id: 3,
    slug: "nubank-ou-poupanca",
    title: "Vale a pena investir no Nubank ou guardar na poupança?",
    excerpt: "Comparação completa entre investir no Nubank e manter o dinheiro na poupança tradicional.",
    image: "/investimento-digital-celular.jpg",
    category: "Investimentos",
    readTime: "6 min",
    date: "2025-01-13",
  },
]

export function FeaturedPosts() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Destaques do Dia</h2>
        <Link href="/artigos" className="text-primary hover:text-accent transition-colors flex items-center gap-2">
          Ver todos
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/artigos/${post.slug}`}>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors text-balance leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("pt-BR")}</time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
