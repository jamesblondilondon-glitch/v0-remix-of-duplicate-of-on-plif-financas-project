import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://unpliqfinancas.com.br"),
  title: {
    default: "Unpliq Finanças - Organize suas Finanças Pessoais",
    template: "%s | Unpliq Finanças",
  },
  description:
    "Dicas práticas de finanças pessoais, investimentos e economia para ajudar você a organizar seu dinheiro e alcançar seus objetivos financeiros.",
  keywords: [
    "finanças pessoais",
    "investimentos",
    "economia",
    "dinheiro",
    "cartões de crédito",
    "poupança",
    "reserva de emergência",
    "controle financeiro",
  ],
  authors: [{ name: "Unpliq Finanças" }],
  creator: "Unpliq Finanças",
  publisher: "Unpliq Finanças",
  openGraph: {
    title: "Unpliq Finanças - Organize suas Finanças Pessoais",
    description: "Dicas práticas de finanças pessoais, investimentos e economia.",
    type: "website",
    locale: "pt_BR",
    url: "https://unpliqfinancas.com.br",
    siteName: "Unpliq Finanças",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unpliq Finanças",
    description: "Dicas práticas de finanças pessoais, investimentos e economia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "SEU_CODIGO_DE_VERIFICACAO_AQUI",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Unpliq Finanças",
              url: "https://unpliqfinancas.com.br",
              description:
                "Dicas práticas de finanças pessoais, investimentos e economia para transformar sua vida financeira.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://unpliqfinancas.com.br/artigos?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
