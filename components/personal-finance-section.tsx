import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"

const financePosts = [
  {
    slug: "cartoes-cashback",
    title: "Cartões de crédito que dão dinheiro de volta",
    excerpt: "Conheça os melhores cartões com cashback e como aproveitá-los ao máximo.",
    image: "/cartao-credito-cashback.jpg",
    readTime: "4 min",
  },
  {
    slug: "comecar-investir",
    title: "Dicas para começar a investir sem medo",
    excerpt: "Guia completo para dar os primeiros passos no mundo dos investimentos.",
    image: "/investimento-iniciante-grafico.jpg",
    readTime: "7 min",
  },
  {
    slug: "apps-controle-financeiro",
    title: "Melhores apps pra controlar suas finanças",
    excerpt: "Aplicativos gratuitos e pagos para organizar seu dinheiro pelo celular.",
    image: "/aplicativo-financas-celular.jpg",
    readTime: "5 min",
  },
]

export function PersonalFinanceSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Finanças Pessoais</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {financePosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/artigos/${post.slug}`}>
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors text-balance leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
