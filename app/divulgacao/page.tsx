import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Divulgação de Afiliados - OnPlif Finanças",
  description: "Política de divulgação de links de afiliados do OnPlif Finanças. Transparência sobre nossas parcerias.",
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Divulgação de Afiliados</h1>
        <p className="text-muted-foreground mb-8">Última atualização: Janeiro de 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="font-semibold mb-2">Transparência é nosso compromisso</p>
            <p className="leading-relaxed">
              Acreditamos em total transparência com nossos leitores. Esta página explica como ganhamos dinheiro através
              de links de afiliados e como isso funciona.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4">O que são Links de Afiliados?</h2>
            <p className="leading-relaxed">
              Links de afiliados são links especiais que rastreiam quando você clica e realiza uma ação (como abrir uma
              conta, fazer uma compra ou se inscrever em um serviço). Quando você usa esses links, podemos receber uma
              comissão da empresa parceira.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Como Funciona?</h2>
            <p className="leading-relaxed mb-4">Aqui está um exemplo prático:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Você lê nosso artigo sobre "Melhores cartões de crédito com cashback" e clica em um link para o site do
                Nubank
              </li>
              <li>Você abre uma conta no Nubank através desse link</li>
              <li>O Nubank nos paga uma comissão por ter indicado você</li>
              <li>
                <strong>Importante:</strong> Você não paga nada a mais por isso. O preço é exatamente o mesmo.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Quais Empresas Temos Parceria?</h2>
            <p className="leading-relaxed mb-4">
              Temos parcerias de afiliados com diversas empresas do setor financeiro, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bancos digitais (Nubank, Inter, C6 Bank, etc.)</li>
              <li>Corretoras de investimentos</li>
              <li>Empresas de cartões de crédito</li>
              <li>Plataformas de educação financeira</li>
              <li>Aplicativos de controle financeiro</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Isso Influencia Nossas Recomendações?</h2>
            <p className="leading-relaxed mb-4">
              <strong>Não.</strong> Nossa integridade editorial é inegociável. Aqui está nosso compromisso:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Só recomendamos produtos e serviços que realmente acreditamos serem úteis</li>
              <li>Testamos e pesquisamos antes de recomendar</li>
              <li>Somos honestos sobre prós e contras</li>
              <li>Não escondemos informações negativas</li>
              <li>Se um produto não é bom, dizemos isso, mesmo que tenhamos parceria</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Como Identificar Links de Afiliados?</h2>
            <p className="leading-relaxed mb-4">
              Sempre que possível, identificamos links de afiliados de forma clara:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Incluímos avisos no início dos artigos que contêm links de afiliados</li>
              <li>Usamos a tag rel="sponsored" nos links (conforme recomendado pelo Google)</li>
              <li>Somos transparentes sobre nossas parcerias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Outras Fontes de Receita</h2>
            <p className="leading-relaxed mb-4">Além de links de afiliados, também ganhamos dinheiro através de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google AdSense:</strong> Anúncios exibidos em nosso site
              </li>
              <li>
                <strong>Parcerias diretas:</strong> Algumas empresas nos pagam para criar conteúdo patrocinado (sempre
                claramente identificado)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Você Não Precisa Usar Nossos Links</h2>
            <p className="leading-relaxed">
              Se você preferir não usar nossos links de afiliados, tudo bem! Você pode ir diretamente ao site da empresa
              digitando o endereço no navegador. Continuaremos fornecendo conteúdo gratuito e de qualidade de qualquer
              forma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Conformidade Legal</h2>
            <p className="leading-relaxed">
              Esta divulgação está em conformidade com as diretrizes da Comissão Federal de Comércio (FTC) dos EUA e com
              as leis brasileiras de publicidade e proteção ao consumidor. Acreditamos em total transparência com nossos
              leitores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Vocês recomendam produtos apenas pela comissão?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Não. Só recomendamos produtos que acreditamos serem genuinamente úteis. Nossa reputação é mais
                  importante que qualquer comissão.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">O preço é diferente se eu usar o link de afiliado?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Não. O preço é exatamente o mesmo. Você não paga nada a mais por usar nosso link.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Vocês testam os produtos antes de recomendar?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sempre que possível, sim. Também fazemos pesquisas extensivas e lemos avaliações de outros usuários.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <p className="leading-relaxed">
              Se você tiver dúvidas sobre nossa política de afiliados ou sobre qualquer recomendação específica, entre
              em contato conosco através da nossa{" "}
              <a href="/contato" className="text-primary hover:underline">
                página de contato
              </a>
              .
            </p>
          </section>

          <div className="bg-muted border-l-4 border-primary p-6 rounded-r-lg mt-8">
            <p className="font-semibold mb-2">Nosso Compromisso</p>
            <p className="leading-relaxed">
              Continuaremos sendo transparentes sobre nossas parcerias e mantendo a qualidade e honestidade do nosso
              conteúdo. Sua confiança é nosso maior ativo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
