// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      routes: [
        '/',
        '/quem-sou',
        '/solucoes',
        '/contato',
        '/blog',
        '/blog/',
        '/blog/a-clickzacao-da-vida',
        '/blog/a-engenharia-do-prejuizo',
        '/blog/a-reuniao-fantasma-voce-esta-presente-ou-apenas-conectado',
        '/blog/comunicacao-nao-violenta-jamais-vai-ser-perfumaria',
        '/blog/empresas-precisam-enxergar-alem-do-cracha'
      ],
      crawlLinks: true,
      autoSubfolderIndex: true
    }
  },
  nitro: process.env.npm_lifecycle_event === 'build:static' ? false : undefined
});
