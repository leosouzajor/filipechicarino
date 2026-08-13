# Migração fiel: filipechicarino.com.br (Hostinger Horizons → Lovable)

Análise aprovada. Implementação dividida em fases controladas. Prioridade: fidelidade visual e de conteúdo — sem redesign, sem refatoração, sem "melhorias".

Fonte autoritativa de texto, estrutura, links e comportamento: o código exportado do Hostinger.
Referência visual (aparência, proporções, espaçamentos, responsivo, posição das imagens): https://filipechicarino.com.br

---

# FASE 1 — única fase a implementar agora

## 1.1 Fundação visual

- Fontes Playfair Display (títulos) e Inter (corpo), carregadas via Google Fonts no head.
- Cores exatas: navy `#001F3F`, terracota `#C85A3A`, creme `#F5F3EF`, branco `#FFFFFF`.
- `body` com fundo creme, texto navy, line-height 1.7, antialiasing; headings em serif.
- Utilitários replicados do original, com os mesmos valores:
  - `section-padding` (py-24 md:py-32, px-4/8/16)
  - `container-width` (container, max-w-7xl)
  - `card-premium` (branco, raio 8px, sombra 0 4px 12px rgba(0,0,0,.08), hover -1px)
  - `image-premium`
  - `btn-primary` (terracota, hover #B84A2A) e `btn-secondary` (outline navy)
  - `heading-xl`, `heading-lg`, `text-content-optimized` (max 800px)
- Scrollbar customizada (trilha creme, polegar navy, hover terracota) e `scroll-behavior: smooth`.
- Animações de entrada com Framer Motion, com os mesmos parâmetros do original (fade/slide, viewport once).

## 1.2 Assets

- Subir ao CDN da Lovable as 20 imagens originais enviadas (logo, hero, retrato, avatar do autor, 12 logos de parceiros, capa de artigo, 3 imagens da página Soluções).
- Baixar e hospedar as 4 capas de artigo do Unsplash hoje usadas pelo site.
- Baixar e hospedar a textura externa (padrão "cubes") usada pelo site.
- Nenhuma imagem gerada, substituída ou recortada — enquadramentos só se necessário para reproduzir o site atual.
- Módulo central de referências de imagem, com o mapeamento arquivo → onde é usado.

## 1.3 Layout compartilhado

- **Header** fixo, branco com sombra suave: logo (imagem original), navegação desktop com os rótulos atuais (Início, Quem Sou, Soluções, Blog, Contato) em caixa alta com sublinhado terracota no hover, ícones Instagram e LinkedIn com os links atuais.
- **Navegação mobile**: botão hambúrguer/X, painel animado (altura + opacidade), itens com divisórias e blocos Instagram/LinkedIn com rótulo.
- **Footer** navy em 4 colunas: marca + descrição + redes; Menu; Soluções (Palestras, Treinamentos, Histórias Humanizadas); Contato (e-mail, (27) 981178654, Espírito Santo - Brasil); linha final com ano dinâmico e "Desenvolvido com excelência".
- **ScrollToTop** por troca de rota.
- **Infraestrutura de toasts** montada globalmente (usada mais tarde pelo formulário).
- Links do Header para `/quem-sou`, `/solucoes`, `/blog` e `/contato` permanecem no menu, mas as páginas NÃO serão criadas nesta fase.

## 1.4 Homepage `/` — apenas ela

Reproduzida nesta ordem exata:

1. **Hero** — título, subtítulo e os dois botões com os rótulos atuais ("Conheça Nossas Soluções", "Solicitar Proposta"), imagem original do hero.
2. **Quem Sou** — rótulo "Autoridade", título "O HumanizaDOR", texto integral, CTA "CONHEÇA A TRAJETÓRIA", retrato original e selo "20 Anos de Experiência".
3. **NR-1** — seção completa com textos originais.
4. **Parceiros** — rótulo "Credibilidade", os 12 logos na ordem atual, com a duplicação usada no loop.
5. **Narrativas** — rótulo "Produção Audiovisual", "Narrativas que Conectam", link "Ver Portfolio Completo" e os 6 cards de vídeo com thumbnails do YouTube e os mesmos links.
6. **Blog** — rótulo "Insights", "Blog & Artigos", "Ver todos os artigos" e os cards dos artigos com data, tempo de leitura, categoria, capa, avatar e "Ler artigo", apontando para as URLs atuais (as páginas de artigo só existirão em fase posterior).
7. **Contato** — a seção de contato da home, exatamente como está hoje.

SEO da home nesta fase: apenas título e description atuais.
Título: `Filipe Chicarino - Comunicação Humanizada e Não-Violenta`
Description: `Filipe Chicarino é facilitador em comunicação humanizada. Palestras sobre NR-1, treinamentos em CNV e produção audiovisual para empresas.`
Sem Open Graph, Twitter, sitemap, robots ou qualquer outro acréscimo de SEO nesta fase.

## 1.5 Fora do escopo da Fase 1

- Rotas `/quem-sou`, `/solucoes`, `/blog`, `/contato` e as 5 páginas de artigo.
- Comportamento do formulário de contato (permanece como hoje quando a página for feita).
- Qualquer refatoração da arquitetura do blog.
- Qualquer metadado de SEO além de título e description da home.
- Nenhuma seção nova, nenhum rótulo alterado, nenhum link social ou de vídeo alterado.

## 1.6 Verificação da Fase 1

- Rodar o projeto e abrir `/`.
- Conferir a home em desktop e mobile (inclusive o menu mobile abrindo e fechando).
- Verificar erros de runtime e de console.
- Comparar seção por seção com a home publicada: textos, ordem, espaçamentos, proporções, imagens, hover dos botões e links.
- Relatar quaisquer divergências visuais ou de comportamento encontradas.
- **PARAR.** Nada de Fase 2 sem sua aprovação explícita da homepage.

---

# Fases seguintes (apenas para contexto — não serão implementadas agora)

- **Fase 2** — `/quem-sou` e `/solucoes` (conteúdo integral, textura, imagens e grid de vídeos).
- **Fase 3** — `/contato` com o formulário mantendo exatamente o comportamento atual (validação visual + toast simulado, sem backend).
- **Fase 4** — `/blog` e as 5 páginas de artigo com o conteúdo integral.
- **Fase 5** — SEO completo: título/description por rota, Open Graph/Twitter, favicon, sitemap e robots.
- **Fase 6** — publicação e, quando você quiser, apontamento do domínio `filipechicarino.com.br`. As URLs se mantêm idênticas, sem perda de SEO.

---

## Notas técnicas

- Stack de destino: TanStack Start (React + Vite, com renderização no servidor). Rotas em `src/routes`; na Fase 1 apenas `/` é criada (substituindo o placeholder do template).
- Framer Motion e Lucide serão instalados para reproduzir animações e ícones idênticos ao original.
- Tailwind v4: os utilitários do original serão declarados no CSS de tema do projeto, mantendo os mesmos valores.
- Imagens servidas pelo CDN da Lovable via ponteiros de asset; as thumbnails e links do YouTube permanecem externos, como hoje.
- Nenhum backend nesta fase.
