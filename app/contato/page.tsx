import type { Metadata } from "next"
import { Mail, MessageSquare, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato - Unpliq Finanças",
  description:
    "Entre em contato com a equipe Unpliq Finanças. Estamos aqui para ajudar com suas dúvidas sobre finanças pessoais.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Entre em Contato</h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Tem alguma dúvida, sugestão ou quer fazer uma parceria? Estamos aqui para ajudar!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">E-mail</h3>
            <p className="text-sm text-muted-foreground mb-2">Envie sua mensagem para:</p>
            <a href="mailto:contato@unpliqfinancas.com.br" className="text-primary hover:underline">
              contato@unpliqfinancas.com.br
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Horário de Atendimento</h3>
            <p className="text-sm text-muted-foreground">Segunda a Sexta</p>
            <p className="text-sm text-muted-foreground">9h às 18h</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Redes Sociais</h3>
            <p className="text-sm text-muted-foreground mb-2">Siga-nos nas redes:</p>
            <div className="flex justify-center gap-2">
              <a href="#" className="text-primary hover:underline text-sm">
                Instagram
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-primary hover:underline text-sm">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Assunto
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione um assunto</option>
                <option value="duvida">Dúvida sobre finanças</option>
                <option value="sugestao">Sugestão de conteúdo</option>
                <option value="parceria">Proposta de parceria</option>
                <option value="erro">Reportar erro no site</option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            Respondemos todas as mensagens em até 48 horas úteis.
          </p>
        </div>

        <div className="mt-12 bg-muted rounded-lg p-6">
          <h3 className="font-bold mb-4">Perguntas Frequentes</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Vocês oferecem consultoria financeira individual?</h4>
              <p className="text-sm text-muted-foreground">
                Não oferecemos consultoria individual. Nosso foco é educação financeira através de conteúdo gratuito.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Como posso sugerir um tema para artigo?</h4>
              <p className="text-sm text-muted-foreground">
                Use o formulário acima selecionando "Sugestão de conteúdo". Adoramos receber ideias dos nossos leitores!
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Vocês fazem parcerias com marcas?</h4>
              <p className="text-sm text-muted-foreground">
                Sim! Entre em contato através do formulário selecionando "Proposta de parceria" e descreva sua ideia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
