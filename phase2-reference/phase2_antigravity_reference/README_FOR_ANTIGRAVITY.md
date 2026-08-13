# Phase 2 — Hostinger original source reference

These files were extracted directly from the original Hostinger Horizons export supplied by the site owner.

Use them ONLY as source-of-truth reference while adapting the already-created Lovable/TanStack project. Do not copy the old routing/Helmet setup blindly; preserve the existing Lovable architecture and reproduce content, order, links, classes/visual behavior and assets faithfully.

## Authoritative files
- `original-hostinger-src/pages/QuemSouPage.jsx` — complete original `/quem-sou` page
- `original-hostinger-src/pages/SolucoesPage.jsx` — complete original `/solucoes` page, including service text and YouTube data
- `original-hostinger-src/components/EditorialSection.jsx` — original shared editorial component reference
- `original-hostinger-src/components/PullQuote.jsx` — original pull-quote component reference
- `original-hostinger-src/index.css` — original global style reference

## Instructions for Antigravity
1. Read both page files before implementation.
2. Treat every visible string, section order, CTA label, YouTube URL, external link and visual class as authoritative.
3. Adapt React Router/Helmet constructs to the current TanStack Start project; do not revert the project architecture.
4. Reuse the already-hosted Lovable assets from `src/lib/assets.ts` instead of Hostinger CDN URLs whenever the corresponding asset exists.
5. Preserve the Phase 1 homepage and shared layout.
6. Implement only `/quem-sou` and `/solucoes`, then test desktop/mobile and stop.
