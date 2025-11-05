import Link from "next/link"
import { TrendingUp, Target, PiggyBank } from "lucide-react"

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-12 md:pt-20">
      <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
          Organize suas <span className="text-primary">Finanças Pessoais</span> de forma simples
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl leading-relaxed">
          Dicas práticas, guias completos e ferramentas para você controlar seu dinheiro, economizar mais e investir com
          segurança.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link
            href="/dicas"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Ver Dicas
          </Link>
          <Link
            href="/ferramentas"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-muted transition-colors border border-border"
          >
            Ferramentas Grátis
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border">
            <div className="p-3 bg-primary/10 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Investimentos</h3>
            <p className="text-sm text-muted-foreground text-center text-balance">
              Aprenda a investir seu dinheiro de forma segura e rentável
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border">
            <div className="p-3 bg-primary/10 rounded-full">
              <PiggyBank className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Economia</h3>
            <p className="text-sm text-muted-foreground text-center text-balance">
              Dicas práticas para economizar dinheiro no dia a dia
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border">
            <div className="p-3 bg-primary/10 rounded-full">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Planejamento</h3>
            <p className="text-sm text-muted-foreground text-center text-balance">
              Organize suas metas financeiras e alcance seus objetivos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
