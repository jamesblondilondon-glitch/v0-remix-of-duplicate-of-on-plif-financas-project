"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call - Replace with actual newsletter service integration
    setTimeout(() => {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex p-3 bg-primary-foreground/10 rounded-full mb-4">
          <Mail className="h-8 w-8" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Receba Dicas Semanais</h2>
        <p className="text-primary-foreground/90 mb-6 leading-relaxed">
          Cadastre-se e receba toda semana dicas exclusivas de finanças pessoais, investimentos e economia direto no seu
          e-mail.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : status === "success" ? "Inscrito!" : "Inscrever"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-primary-foreground/90">Obrigado! Verifique seu e-mail para confirmar.</p>
        )}
      </div>
    </div>
  )
}
