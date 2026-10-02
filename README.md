# Santuário da Muxima — Next.js 15

Sítio institucional do Santuário de Nossa Senhora da Conceição da Muxima (Mama Muxima), Diocese de Viana, Angola.
Migração do ficheiro HTML único para **Next.js 15 (App Router) + React 19 + TypeScript**, sem dependências de UI.

## Arrancar
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Copie `.env.example` para `.env.local` e defina `FORM_ENDPOINT` (Formspree, backend da Diocese) e `NEXT_PUBLIC_SITE_URL`.

## Estrutura
- `src/config/site.ts` — antigo `CONFIG` (contactos, domínio, redes, peregrinação, flags)
- `src/content/index.ts` — textos editáveis: cronologia, horários, notícias, grupos, galeria
- `src/lib/calendar.ts` — Páscoa (Meeus) e eventos do ano litúrgico; ano da próxima peregrinação
- `src/components/` — Header, Footer, Countdown, Calendário, Formulários, Galeria, Figure
- `src/app/` — 15 rotas reais (`/historia`, `/basilica`, `/agenda`…), `api/contacto`, `sitemap.ts`, `robots.ts`
- `public/img/` — colocar aqui as fotografias (nomes em `src/content/index.ts`); se faltar uma, mostra «Fotografia em atualização»

## Pendências antes de publicar
1. Fotografias definitivas em `public/img/` (os CDN temporários expiram).
2. Confirmar `telefone` e `email` em `site.ts` (são placeholders).
3. Licenciamento das 7 fotos do Papa (Getty): álbum desactivado por defeito (`mostrarAlbumPapa`).
4. Domínio definitivo (`NEXT_PUBLIC_SITE_URL`) e `FORM_ENDPOINT`.
5. **Rever datas editoriais:** as notícias e o texto de balanço referem a romaria de 2027 como já ocorrida; confirmar/actualizar em `src/content/index.ts` e a percentagem da obra em `basilica/page.tsx`.
6. Confirmar Reitor, horários, programa e FAQ com o Santuário.
7. Instagram/WhatsApp oficiais; versões EN/UMB; loja e donativos em linha; transmissão ao vivo.

## Mudanças face à versão HTML
Rotas reais em vez de hash-router (melhor SEO e partilha), HTML renderizado no servidor, metadados por página, JSON-LD `Church`, sitemap/robots, honeypot e validação no servidor para formulários, visual sóbrio (azul, dourado, serifa clássica, faixa *kanda* no rodapé).
Ainda não migrados: pesquisa interna (Ctrl+K), modo escuro e lightbox. Lê-se «Hoje no Santuário» no cliente.
