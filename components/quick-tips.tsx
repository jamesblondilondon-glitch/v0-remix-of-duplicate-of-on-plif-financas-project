import { Lightbulb, Wallet, CreditCard, TrendingDown } from "lucide-react"

const tips = [
  {
    icon: Lightbulb,
    title: "Regra 50-30-20",
    description: "Divida sua renda: 50% necessidades, 30% desejos, 20% poupança",
  },
  {
    icon: Wallet,
    title: "Controle Diário",
    description: "Anote todos os gastos por 30 dias para identificar vazamentos",
  },
  {
    icon: CreditCard,
    title: "Cartão Consciente",
    description: "Use cartão de crédito apenas se puder pagar à vista",
  },
  {
    icon: TrendingDown,
    title: "Corte Supérfluos",
    description: "Cancele assinaturas que você não usa há mais de 2 meses",
  },
]

export function QuickTips() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Dicas Rápidas de Dinheiro</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, index) => {
          const Icon = tip.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{tip.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
