# Unpliq Finanças

Site completo de finanças pessoais com blog e monetização via programas de afiliados.

## Características

- ✅ Design responsivo e moderno
- ✅ 10 artigos originais sobre finanças pessoais
- ✅ Sistema de blog completo
- ✅ Google Analytics
- ✅ SEO otimizado (sitemap, robots.txt, meta tags)
- ✅ Páginas legais (Privacidade, Termos, Sobre, Contato)
- ✅ Newsletter
- ✅ Structured data (JSON-LD)
- ✅ Botão voltar ao topo
- ✅ Menu fixo responsivo

## Tecnologias

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript
- Vercel Analytics

## Configuração

### 1. Google Analytics

Substitua `G-XXXXXXXXXX` em `app/layout.tsx` pelo seu ID do Google Analytics.

### 2. Google Search Console

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione sua propriedade
3. Substitua `SEU_CODIGO_DE_VERIFICACAO_AQUI` em `app/layout.tsx`
4. Envie o sitemap: `https://seudominio.com.br/sitemap.xml`

### 3. Newsletter

Configure o formulário de newsletter em `components/newsletter.tsx` com seu serviço preferido:
- Mailchimp
- ConvertKit
- Sendinblue
- Buttondown

### 4. Domínio

Atualize todas as URLs de `https://unpliqfinancas.com.br` para seu domínio real em:
- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx`
- `app/artigos/[slug]/page.tsx`

## Estrutura de Pastas

\`\`\`
├── app/
│   ├── artigos/          # Sistema de blog
│   ├── sobre/            # Página sobre
│   ├── contato/          # Página de contato
│   ├── politica-privacidade/
│   ├── termos-uso/
│   ├── divulgacao/       # Divulgação de afiliados
│   ├── newsletter/
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Homepage
│   ├── sitemap.ts        # Sitemap dinâmico
│   └── robots.ts         # Robots.txt
├── components/           # Componentes reutilizáveis
├── lib/
│   └── articles.ts       # Dados dos artigos
└── public/               # Imagens e assets
\`\`\`

## Artigos Incluídos

1. 5 erros que te fazem perder dinheiro todo mês
2. Como economizar R$500 sem perceber
3. Vale a pena investir no Nubank ou guardar na poupança?
4. O método dos 3 potes: forma simples de controlar seus gastos
5. Cartões de crédito que dão dinheiro de volta
6. Como montar uma reserva de emergência mesmo ganhando pouco
7. Dicas para começar a investir sem medo
8. Melhores apps pra controlar suas finanças
9. Como sair das dívidas em 3 etapas
10. A diferença entre ficar rico e parecer rico

## Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte o repositório na Vercel
3. Deploy automático

### Outros Hosts

\`\`\`bash
npm run build
npm run start
\`\`\`

## Monetização

### Afiliados

Configure links de afiliados em `lib/articles.ts` e crie redirecionamentos em `/go/[slug]`.

## Checklist de Lançamento

- [ ] Substituir IDs do Google Analytics
- [ ] Configurar Google Search Console
- [ ] Atualizar URLs para seu domínio
- [ ] Configurar newsletter
- [ ] Testar responsividade
- [ ] Testar velocidade (Lighthouse)
- [ ] Verificar SEO (meta tags, sitemap)
- [ ] Configurar backup

## Suporte

Para dúvidas ou suporte, entre em contato através do formulário de contato do site.

## Licença

Todos os direitos reservados © 2025 Unpliq Finanças
\`\`\`

```typescriptreact file="components/ad-banner.tsx" isDeleted="true"
...deleted...
