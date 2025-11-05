import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso - OnPlif Finanças",
  description: "Termos de uso do site OnPlif Finanças. Leia os termos e condições para uso do nosso conteúdo.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Termos de Uso</h1>
        <p className="text-muted-foreground mb-8">Última atualização: Janeiro de 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="leading-relaxed">
              Ao acessar e usar o site OnPlif Finanças, você concorda em cumprir e estar vinculado a estes Termos de
              Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Uso do Site</h2>
            <h3 className="text-xl font-semibold mb-2">2.1 Licença de Uso</h3>
            <p className="leading-relaxed mb-4">
              Concedemos a você uma licença limitada, não exclusiva e não transferível para acessar e usar nosso site
              para fins pessoais e não comerciais.
            </p>

            <h3 className="text-xl font-semibold mb-2">2.2 Restrições</h3>
            <p className="leading-relaxed mb-4">Você concorda em NÃO:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copiar, modificar ou distribuir nosso conteúdo sem permissão</li>
              <li>Usar o site para fins ilegais ou não autorizados</li>
              <li>Tentar obter acesso não autorizado ao site ou sistemas relacionados</li>
              <li>Interferir ou interromper o funcionamento do site</li>
              <li>Coletar informações de outros usuários sem consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Conteúdo do Site</h2>
            <h3 className="text-xl font-semibold mb-2">3.1 Propriedade Intelectual</h3>
            <p className="leading-relaxed mb-4">
              Todo o conteúdo do site, incluindo textos, gráficos, logotipos, imagens e software, é propriedade da
              OnPlif Finanças ou de seus licenciadores e está protegido por leis de direitos autorais.
            </p>

            <h3 className="text-xl font-semibold mb-2">3.2 Natureza Informativa</h3>
            <p className="leading-relaxed">
              O conteúdo fornecido em nosso site é apenas para fins informativos e educacionais. Não constitui
              aconselhamento financeiro, jurídico ou profissional. Você deve consultar um profissional qualificado antes
              de tomar decisões financeiras.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Isenção de Responsabilidade</h2>
            <h3 className="text-xl font-semibold mb-2">4.1 Sem Garantias</h3>
            <p className="leading-relaxed mb-4">
              O site é fornecido "como está" e "conforme disponível". Não garantimos que o site será ininterrupto,
              seguro ou livre de erros.
            </p>

            <h3 className="text-xl font-semibold mb-2">4.2 Precisão das Informações</h3>
            <p className="leading-relaxed mb-4">
              Embora nos esforcemos para fornecer informações precisas e atualizadas, não garantimos a exatidão,
              integridade ou atualidade do conteúdo. As informações financeiras podem mudar rapidamente.
            </p>

            <h3 className="text-xl font-semibold mb-2">4.3 Resultados</h3>
            <p className="leading-relaxed">
              Não garantimos resultados específicos ao seguir nossas dicas ou recomendações. Resultados financeiros
              variam de pessoa para pessoa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Links para Sites de Terceiros</h2>
            <p className="leading-relaxed">
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, políticas de
              privacidade ou práticas desses sites. O acesso a sites de terceiros é por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Publicidade e Afiliados</h2>
            <h3 className="text-xl font-semibold mb-2">6.1 Google AdSense</h3>
            <p className="leading-relaxed mb-4">
              Usamos o Google AdSense para exibir anúncios em nosso site. Não controlamos o conteúdo dos anúncios
              exibidos.
            </p>

            <h3 className="text-xl font-semibold mb-2">6.2 Links de Afiliados</h3>
            <p className="leading-relaxed">
              Nosso site contém links de afiliados. Podemos receber comissões quando você clica nesses links e realiza
              uma ação. Isso não afeta o preço que você paga. Para mais informações, consulte nossa{" "}
              <a href="/divulgacao" className="text-primary hover:underline">
                Política de Divulgação de Afiliados
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
            <p className="leading-relaxed">
              Na máxima extensão permitida por lei, a OnPlif Finanças não será responsável por quaisquer danos diretos,
              indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nosso site,
              incluindo perda de lucros, dados ou outras perdas intangíveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Indenização</h2>
            <p className="leading-relaxed">
              Você concorda em indenizar e isentar a OnPlif Finanças de quaisquer reivindicações, danos, obrigações,
              perdas, responsabilidades, custos ou dívidas resultantes de: (a) seu uso do site; (b) violação destes
              Termos de Uso; ou (c) violação de direitos de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Modificações dos Termos</h2>
            <p className="leading-relaxed">
              Reservamos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor
              imediatamente após a publicação no site. Seu uso continuado do site após as alterações constitui aceitação
              dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Rescisão</h2>
            <p className="leading-relaxed">
              Podemos encerrar ou suspender seu acesso ao site imediatamente, sem aviso prévio, por qualquer motivo,
              incluindo violação destes Termos de Uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Lei Aplicável</h2>
            <p className="leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será
              resolvida nos tribunais brasileiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contato</h2>
            <p className="leading-relaxed">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através da nossa{" "}
              <a href="/contato" className="text-primary hover:underline">
                página de contato
              </a>
              .
            </p>
          </section>

          <section className="bg-muted border-l-4 border-primary p-6 rounded-r-lg">
            <p className="font-semibold mb-2">Importante:</p>
            <p className="text-sm leading-relaxed">
              Ao usar o site OnPlif Finanças, você reconhece que leu, entendeu e concordou em estar vinculado a estes
              Termos de Uso e à nossa Política de Privacidade.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
