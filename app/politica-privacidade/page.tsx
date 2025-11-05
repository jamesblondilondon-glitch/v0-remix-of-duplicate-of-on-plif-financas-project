import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - OnPlif Finanças",
  description: "Política de privacidade do OnPlif Finanças. Saiba como coletamos, usamos e protegemos seus dados.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-8">Última atualização: Janeiro de 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
            <p className="leading-relaxed">
              A OnPlif Finanças ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política
              de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita
              nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Informações que Coletamos</h2>
            <h3 className="text-xl font-semibold mb-2">2.1 Informações Fornecidas por Você</h3>
            <p className="leading-relaxed mb-4">
              Podemos coletar informações que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e endereço de e-mail (quando você se inscreve em nossa newsletter)</li>
              <li>Informações de contato (quando você nos envia uma mensagem)</li>
              <li>Comentários e feedback que você compartilha conosco</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-6">2.2 Informações Coletadas Automaticamente</h3>
            <p className="leading-relaxed mb-4">
              Quando você visita nosso site, coletamos automaticamente certas informações, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas e tempo gasto no site</li>
              <li>Fonte de referência (como você chegou ao nosso site)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Como Usamos Suas Informações</h2>
            <p className="leading-relaxed mb-4">Usamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enviar nossa newsletter (se você se inscreveu)</li>
              <li>Responder às suas perguntas e solicitações</li>
              <li>Melhorar nosso site e conteúdo</li>
              <li>Analisar como os visitantes usam nosso site</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Cookies e Tecnologias Similares</h2>
            <p className="leading-relaxed mb-4">
              Usamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Cookies são pequenos
              arquivos de texto armazenados em seu dispositivo.
            </p>
            <h3 className="text-xl font-semibold mb-2">Tipos de Cookies que Usamos:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site
              </li>
              <li>
                <strong>Cookies de Análise:</strong> Nos ajudam a entender como os visitantes usam o site (Google
                Analytics)
              </li>
              <li>
                <strong>Cookies de Publicidade:</strong> Usados para exibir anúncios relevantes (Google AdSense)
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar sua experiência no site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Google AdSense</h2>
            <p className="leading-relaxed">
              Usamos o Google AdSense para exibir anúncios em nosso site. O Google pode usar cookies para exibir
              anúncios baseados em suas visitas anteriores ao nosso site e a outros sites. Você pode desativar o uso de
              cookies pelo Google visitando as{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Configurações de anúncios do Google
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Google Analytics</h2>
            <p className="leading-relaxed">
              Usamos o Google Analytics para analisar o uso do nosso site. O Google Analytics coleta informações
              anônimas sobre como os visitantes usam o site. Essas informações nos ajudam a melhorar nosso conteúdo e
              experiência do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Links de Afiliados</h2>
            <p className="leading-relaxed">
              Nosso site contém links de afiliados para produtos e serviços de terceiros. Quando você clica nesses links
              e realiza uma ação (como abrir uma conta), podemos receber uma comissão. Isso não afeta o preço que você
              paga. Para mais informações, consulte nossa{" "}
              <a href="/divulgacao" className="text-primary hover:underline">
                Política de Divulgação de Afiliados
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Compartilhamento de Informações</h2>
            <p className="leading-relaxed mb-4">
              Não vendemos suas informações pessoais. Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provedores de serviços que nos ajudam a operar o site (como serviços de e-mail marketing)</li>
              <li>Autoridades legais, quando exigido por lei</li>
              <li>Parceiros de publicidade (de forma anônima e agregada)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Seus Direitos</h2>
            <p className="leading-relaxed mb-4">Você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar as informações que temos sobre você</li>
              <li>Solicitar a correção de informações incorretas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Cancelar a inscrição em nossa newsletter a qualquer momento</li>
              <li>Optar por não receber cookies (através das configurações do navegador)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Segurança</h2>
            <p className="leading-relaxed">
              Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração,
              divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Menores de Idade</h2>
            <p className="leading-relaxed">
              Nosso site não é direcionado a menores de 18 anos. Não coletamos intencionalmente informações de menores
              de idade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Alterações a Esta Política</h2>
            <p className="leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
              significativas publicando a nova política em nosso site com uma nova data de "Última atualização".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contato</h2>
            <p className="leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através da nossa{" "}
              <a href="/contato" className="text-primary hover:underline">
                página de contato
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
