import type { Metadata } from "next"
import { TrendingUp, Target, Users, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nós - OnPlif Finanças",
  description:
    "Conheça a OnPlif Finanças e nossa missão de ajudar brasileiros a organizarem suas finanças pessoais e alcançarem seus objetivos financeiros.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sobre a OnPlif Finanças</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Somos um portal dedicado a ajudar pessoas comuns a organizarem suas finanças pessoais, economizarem mais e
            investirem com inteligência.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o conhecimento sobre finanças pessoais, tornando-o acessível e prático para todos os
                brasileiros.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal referência em educação financeira no Brasil, ajudando milhões de pessoas a alcançarem
                seus objetivos.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nossos Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transparência, simplicidade e compromisso com a verdade. Acreditamos em educação financeira honesta e
                acessível.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nossa Comunidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Milhares de leitores que buscam melhorar sua relação com o dinheiro e construir um futuro financeiro
                mais seguro.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">O que fazemos</h2>
          <p className="leading-relaxed mb-4">
            Na OnPlif Finanças, produzimos conteúdo original e de qualidade sobre diversos temas relacionados a finanças
            pessoais:
          </p>

          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Dicas práticas de economia e controle de gastos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Guias completos sobre investimentos para iniciantes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Análises de produtos financeiros (cartões, contas digitais, investimentos)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Ferramentas gratuitas para planejamento financeiro</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Estratégias para sair de dívidas e construir patrimônio</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Nosso compromisso com você</h2>
          <p className="leading-relaxed mb-4">
            Acreditamos que educação financeira deve ser acessível a todos. Por isso, todo nosso conteúdo é gratuito e
            escrito em linguagem simples, sem jargões complicados.
          </p>

          <p className="leading-relaxed mb-4">
            Somos transparentes sobre nossas fontes de receita. Este site é mantido através de publicidade (Google
            AdSense) e programas de afiliados com instituições financeiras. Quando você clica em um link de afiliado e
            realiza uma ação (como abrir uma conta), podemos receber uma comissão.
          </p>

          <p className="leading-relaxed mb-8">
            No entanto, isso nunca influencia nossas recomendações. Só indicamos produtos e serviços que realmente
            acreditamos serem úteis para nossos leitores.
          </p>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Junte-se à nossa comunidade</h3>
            <p className="mb-6">Receba dicas exclusivas de finanças pessoais toda semana diretamente no seu e-mail.</p>
            <a
              href="/newsletter"
              className="inline-block px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Inscrever-se Gratuitamente
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
