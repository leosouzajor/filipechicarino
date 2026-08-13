# Migração fiel: filipechicarino.com.br (Hostinger Horizons → Lovable)

Análise concluída sobre o código exportado, os 20 arquivos de imagem e o site publicado. Objetivo: réplica fiel, sem redesign.

## 1. Páginas e rotas encontradas (10)

| Rota | Origem | Título SEO |
|---|---|---|
| `/` | HomePage.jsx | Filipe Chicarino - Comunicação Humanizada e Não-Violenta |
| `/quem-sou` | QuemSouPage.jsx | Quem Sou \| Filipe Chicarino - O Facilitador |
| `/solucoes` | SolucoesPage.jsx | Soluções \| Filipe Chicarino |
| `/blog` | BlogPage.jsx | Blog \| Filipe Chicarino - Insights sobre Comunicação e Liderança |
| `/contato` | ContatoPage.jsx | Contato \| Filipe Chicarino |
| `/blog/empresas-precisam-enxergar-alem-do-cracha` | Article1.jsx | Empresas precisam enxergar além do crachá |
| `/blog/comunicacao-nao-violenta-jamais-vai-ser-perfumaria` | Article2.jsx | Comunicação não Violenta jamais vai ser perfumaria |
| `/blog/a-clickzacao-da-vida` | Article3.jsx | A Clickzação da Vida |
| `/blog/a-reuniao-fantasma-voce-esta-presente-ou-apenas-conectado` | Article4.jsx | A Reunião Fantasma: você está presente ou apenas conectado? |
| `/blog/a-engenharia-do-prejuizo` | Article5.jsx | A engenharia do prejuízo |

Cada rota tem título + description próprios (registrados no manifesto) — serão preservados literalmente.

## 2. Estrutura global

- Header fixo (branco, sombra suave) + `<main>` + Footer navy, em todas as páginas.
- Home é composta por seções, nesta ordem: Hero → Quem Sou → NR-1 → Parceiros → Narrativas → Blog → Contato.
- Scroll-to-top a cada troca de rota.
- Toasts globais (usados no formulário).

## 3. Componentes compartilhados

- `Header` — logo (imagem), menu Início / Quem Sou / Soluções / Blog / Contato, ícones Instagram e LinkedIn, menu mobile animado com hambúrguer.
- `Footer` — 4 colunas: marca + descrição + redes; Menu; Soluções (Palestras, Treinamentos, Histórias Humanizadas); Contato (e-mail, telefone (27) 981178654, Espírito Santo - Brasil); rodapé com ano dinâmico.
- Seções da home: `HeroSection`, `QuemSouSection`, `NR1Section`, `ParceirosSection`, `NarrativasSection`, `BlogSection`, `ContactSection`.
- `EditorialSection`, `PullQuote` (usados nas páginas internas/artigos), `ScrollToTop`.

## 4. Imagens (20 arquivos, todos presentes)

- 1 logo do header.
- 1 imagem do Hero.
- 1 retrato (seção Quem Sou / autor).
- 1 avatar do autor nos cards de blog.
- 12 logos de parceiros (Fundação Carmelia, Governo do Estado, IJSN, Senac, Afort, Água Viva, Pfizer, Fortlev, EDP, Calwan, ICEPI, Fuego Uruguaio) — carrossel duplicado (loop) na home.
- 1 capa de artigo (A engenharia do prejuízo).
- 3 imagens na página Soluções.

Todas serão hospedadas no CDN da Lovable (conforme sua escolha), com o mapeamento arquivo → local de uso documentado. As 4 capas de artigo hoje vindas do Unsplash serão baixadas e também hospedadas na Lovable.

## 5. Tipografia, cores e padrões

- Fontes Google: Playfair Display (títulos, serif) + Inter (corpo), line-height 1.7.
- Paleta: navy `#001F3F`, terracota `#C85A3A`, creme `#F5F3EF`, branco.
- Padrões: cards brancos raio 8px com sombra suave e leve elevação no hover; botão primário terracota; botão secundário outline navy; headings responsivos; blocos de texto limitados a 800px; seções com padding vertical generoso; scrollbar customizada; animações de entrada (fade/slide) em quase todas as seções.

## 6. Arquitetura do blog

Estático, não CMS. `/blog` lista 5 artigos a partir de um array no arquivo (título, subtítulo, data, tempo de leitura, categoria "ARTIGO", capa, link). Cada artigo é uma página própria com conteúdo em JSX, cabeçalho (data, tempo de leitura), subtítulo com barra terracota, citações em destaque e link "Voltar para o Blog". A migração manterá esse modelo, apenas centralizando os metadados dos cards para evitar divergência entre `/blog` e a seção de blog da home.

## 7. Formulários e interativos

- Formulário de contato: nome, e-mail, empresa, assunto, mensagem, com validação visual de campos obrigatórios. Envio permanece simulado + toast de sucesso, idêntico ao atual (sua escolha).
- Outros interativos: menu mobile, carrossel de parceiros em loop, cards de vídeo que abrem o YouTube em nova aba, links mailto/tel, animações de scroll.

## 8. SEO

Títulos e descriptions de todas as 10 rotas são preservados. Serão migrados para o mecanismo nativo de metadados por rota (equivalente ao Helmet original), acrescentando og/twitter derivados do mesmo texto — sem inventar conteúdo novo. `index.html` original tinha título genérico "Hostinger Horizons" e favicon do Vite: será corrigido para a marca.

## 9. Dependências externas

- Google Fonts (Playfair Display, Inter).
- YouTube: 12 vídeos (6 na home, 6 em Soluções) usando thumbnails `img.youtube.com` e links para youtube.com — mantidos.
- Unsplash: 4 capas de artigo → serão internalizadas.
- `transparenttextures.com` (padrão "cubes") usado como textura em Quem Sou → será internalizado para não depender de terceiros.
- Ícones Lucide e animações Framer Motion — mantidos.

## 10. Divergências entre export e site publicado

Comparação do conteúdo publicado com o código exportado: textos, ordem das seções, parceiros, vídeos e cards de blog são idênticos — não há divergência de conteúdo. Diferenças puramente técnicas:

- O site publicado ainda serve as imagens do CDN do Hostinger; após a migração passarão a vir do CDN da Lovable.
- O export usa React Router + react-helmet; no Lovable o roteamento e os metadados são nativos do framework (renderização no servidor), o que melhora o SEO sem alterar o visual.
- O `index.html` exportado não tem título/favicon próprios (o site publicado injeta isso pelo Helmet).

## Plano de migração passo a passo

1. **Fundação visual** — fontes Playfair/Inter, tokens de cor (navy, terracota, creme) e as classes utilitárias do original (section-padding, container-width, card-premium, btn-primary/secondary, heading-xl/lg, text-content-optimized), replicando também scrollbar e line-height.
2. **Assets** — subir as 20 imagens ao CDN da Lovable, mais as 4 capas do Unsplash e a textura, com um módulo central de referências e o mapeamento de uso.
3. **Layout compartilhado** — Header (com menu mobile) e Footer idênticos, scroll-to-top por rota, toasts globais.
4. **Home** — as 7 seções na ordem original, com textos, imagens, carrossel de parceiros e grid de vídeos preservados.
5. **Páginas internas** — `/quem-sou`, `/solucoes`, `/contato`, com todo o conteúdo e o formulário (validação + toast simulado).
6. **Blog** — listagem `/blog` a partir de metadados centralizados + as 5 páginas de artigo com o conteúdo integral.
7. **SEO por rota** — título e description exatos de cada página, mais og/twitter, favicon e robots/sitemap com as 10 rotas.
8. **Verificação** — conferir cada rota em desktop e mobile contra o site publicado (textos, seções, espaçamentos, imagens) e corrigir divergências.
9. **Publicação e domínio** — publicar e, quando você quiser, apontar `filipechicarino.com.br` para a Lovable. As URLs permanecem as mesmas, então não há perda de SEO.

### Notas técnicas

- Stack de destino: TanStack Start (React + Vite, com renderização no servidor); rotas em `src/routes` espelhando os caminhos atuais, incluindo os slugs de artigo.
- Framer Motion e Lucide serão instalados para reproduzir animações e ícones exatamente como no original.
- Nenhum backend será adicionado nesta etapa (formulário simulado, conforme escolhido); ativar Lovable Cloud para envio real é um passo futuro fácil.
