import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, Tag, ArrowLeft } from "lucide-react"
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles"
import type { Metadata } from "next"

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Artigo não encontrado",
    }
  }

  return {
    title: `${article.title} - Unpliq Finanças`,
    description: article.metaDescription,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: article.image || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.image || "/placeholder.svg"],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article.slug, article.category)

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Unpliq Finanças",
      logo: {
        "@type": "ImageObject",
        url: "https://unpliqfinancas.com.br/favicon.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://unpliqfinancas.com.br/artigos/${article.slug}`,
    },
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://unpliqfinancas.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artigos",
        item: "https://unpliqfinancas.com.br/artigos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://unpliqfinancas.com.br/artigos/${article.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          href="/artigos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para artigos
        </Link>

        {/* Article header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{article.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.date}>{new Date(article.date).toLocaleDateString("pt-BR")}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>

          {/* Affiliate disclosure */}
          <div className="bg-muted border-l-4 border-primary p-4 mb-8 rounded-r-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Divulgação:</strong> Este artigo pode conter links de afiliados. Podemos receber uma comissão se
              você realizar uma compra através destes links, sem custo adicional para você.
            </p>
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none mb-8">
            {article.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace("##", "").trim()}
                  </h2>
                )
              }

              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={index} className="font-semibold my-4">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                )
              }

              return (
                <p key={index} className="mb-4 leading-relaxed text-foreground">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-2">Gostou deste artigo?</h3>
            <p className="mb-4">Receba conteúdo exclusivo sobre finanças pessoais toda semana no seu e-mail.</p>
            <Link
              href="/newsletter"
              className="inline-block px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Inscrever-se na Newsletter
            </Link>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <article
                    key={related.id}
                    className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/artigos/${related.slug}`}>
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors text-balance leading-snug">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  )
}
