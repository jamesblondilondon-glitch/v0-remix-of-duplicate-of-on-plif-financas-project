"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Check } from "lucide-react"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call - Replace with actual newsletter service integration
    setTimeout(() => {
      setStatus("success")
      setEmail("")
      setName("")
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
            <Mail className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Inscreva-se na Nossa Newsletter</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Receba dicas exclusivas de finanças pessoais, investimentos e economia toda semana no seu e-mail.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center">
            <div className="inline-flex p-3 bg-primary rounded-full mb-4">
              <Check className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Inscrição Confirmada!</h2>
            <p className="text-muted-foreground mb-4">
              Obrigado por se inscrever! Verifique seu e-mail para confirmar sua inscrição.
            </p>
            <button onClick={() => setStatus("idle")} className="text-primary hover:underline font-medium">
              Inscrever outro e-mail
            </button>
          </div>
        ) : (
          <>
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu@email.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Inscrevendo..." : "Inscrever-se Gratuitamente"}
                </button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Ao se inscrever, você concorda com nossa{" "}
                <a href="/politica-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                . Você pode cancelar a inscrição a qualquer momento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Gratuito</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1x</div>
                <p className="text-sm text-muted-foreground">Por semana</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <p className="text-sm text-muted-foreground">Spam</p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">O que você vai receber:</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dicas Práticas Semanais</h3>
                    <p className="text-sm text-muted-foreground">
                      Estratégias simples para economizar, investir e organizar suas finanças
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Conteúdo Exclusivo</h3>
                    <p className="text-sm text-muted-foreground">
                      Artigos e guias que não publicamos no site, apenas para assinantes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Novidades em Primeira Mão</h3>
                    <p className="text-sm text-muted-foreground">
                      Seja o primeiro a saber sobre novos artigos, ferramentas e recursos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ofertas Especiais</h3>
                    <p className="text-sm text-muted-foreground">
                      Promoções exclusivas de parceiros selecionados (bancos, corretoras, etc.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
