# Santuário de Nossa Senhora da Conceição da Muxima 🇦🇴

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Diocese de Viana](https://img.shields.io/badge/Diocese-Viana-gold?style=for-the-badge)](https://diocesedeviana.ao)
[![42 Luanda](https://img.shields.io/badge/42-Luanda-black?style=for-the-badge)](https://42luanda.com)

> Plataforma digital oficial e institucional do **Santuário de Nossa Senhora da Conceição da Muxima** (*Mama Muxima*), erguido em 1599 às margens do Rio Kwanza, Município da Quiçama, Província de Luanda / Diocese de Viana, Angola. Monumento Nacional desde 1924 e o maior centro de peregrinação mariana da África Subsaariana.

---

## 🌟 Funcionalidades e Arquitetura

- **Next.js 15 (App Router) + React 19 + TypeScript**: renderização híbrida otimizada (SSG/SSR) garantindo carregamento instantâneo e pontuações máximas em Core Web Vitals.
- **Galeria Fotográfica Interativa**: acervo documental com dezenas de fotografias históricas e contemporâneas, organizadas por categorias, dotada de **Lightbox em ecrã inteiro** com controlos de navegação por teclado (`←`, `→`, `Esc`).
- **Diocese e Responsáveis**: páginas dedicadas à liderança espiritual do Santuário, com retratos oficiais de **Sua Ex.ª Rev.ª Dom Emílio Sumbelelo** (Bispo da Diocese de Viana) e do **Reitor Padre Mpindi Alberto**.
- **Notícias e Comunicados Oficiais**: sistema de publicação com páginas dinâmicas individuais (`/noticias/[slug]`), metadados Open Graph e botão de partilha rápida via WhatsApp.
- **Calendário e Liturgia**:
  - Contagem decrescente em tempo real para a **Grande Peregrinação** anual (31 de agosto a 7 de setembro).
  - Cálculo algorítmico do tempo litúrgico e Páscoa (algoritmo de Meeus).
  - Componente **Oração do Dia**, renovada diariamente para os fiéis.
- **Cartório e Intenções de Oração**: formulário de contacto com validação no servidor, protecção anti-spam via *honeypot* e integração com Formspree/backend diocesano.
- **Otimização de Mídia**: compressão avançada de imagens em formatos modernos **WebP** e **AVIF** via pipeline nativo do Next.js e Sharp.
- **SEO & Acessibilidade**: `sitemap.xml` dinâmico, `robots.txt`, metadados semânticos, JSON-LD (`Church` Schema) e conformidade com diretrizes WCAG.

---

## 📂 Estrutura do Projeto

```text
muxima-next/
├── public/
│   ├── favicon.ico
│   └── img/
│       ├── dev/                   # Retrato oficial do desenvolvedor (WebP/PNG)
│       ├── responsaveis/          # Retratos oficiais de D. Emílio e Pe. Mpindi
│       ├── fortaleza-e-rio-kwanza/
│       ├── igreja/
│       ├── muxima-peregrinacoes/
│       ├── nova-basilica/
│       └── visita-do-papa/
├── src/
│   ├── app/
│   │   ├── agenda/                # Horários de missas, confissões e terço
│   │   ├── basilica/              # Projeto e evolução da Nova Basílica
│   │   ├── como-chegar/           # Acessos rodoviários e mapas
│   │   ├── contactos/             # Atendimento paroquial e cartório
│   │   ├── galeria/               # Galeria multimédia com Lightbox
│   │   ├── historia/              # Linha cronológica desde 1589
│   │   ├── noticias/              # Portal de comunicados e artigos
│   │   │   └── [slug]/            # Artigo individual com partilha
│   │   ├── pastoral/              # Grupos pastorais e congregações
│   │   ├── peregrinacao/          # Guia do peregrino e romaria
│   │   ├── responsaveis/          # Diocese de Viana e Reitoria
│   │   ├── santuario/             # Ficha técnica e história do templo
│   │   ├── voluntariado/          # Inscrições de voluntários e doações
│   │   ├── globals.css            # Folha de estilos semântica com temas e kanda
│   │   ├── layout.tsx             # Layout global com Header e Footer
│   │   ├── page.tsx               # Página inicial com Hero da Procissão
│   │   ├── robots.ts              # Geração dinâmica de robots.txt
│   │   └── sitemap.ts             # Geração dinâmica de sitemap.xml
│   ├── components/
│   │   ├── Calendario.tsx         # Calendário litúrgico
│   │   ├── Countdown.tsx          # Contagem decrescente para a Peregrinação
│   │   ├── Figure.tsx             # Elemento figure com legenda e proporção
│   │   ├── Footer.tsx             # Rodapé com créditos de desenvolvimento
│   │   ├── Formularios.tsx        # Formulário de contacto e intenções
│   │   ├── Galeria.tsx            # Lightbox e filtros fotográficos
│   │   ├── Header.tsx             # Navegação principal e menu móvel
│   │   ├── Hoje.tsx               # Informações litúrgicas do dia
│   │   ├── OracaoDoDia.tsx        # Oração diária para os devotos
│   │   └── PageHero.tsx           # Cabeçalho padrão de páginas internas
│   ├── config/
│   │   └── site.ts                # Definições globais, contactos e redes
│   ├── content/
│   │   └── index.ts               # Base de dados textual, cronologia e acervo
│   └── lib/
│       └── calendar.ts            # Funções litúrgicas e datas móveis
└── package.json
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (v18.18+ ou v20+ recomendado)
- **npm** ou **pnpm** / **yarn**

### 1. Clonar o repositório
```bash
git clone https://github.com/jomanuel/muxima-next.git
cd muxima-next
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Copie o ficheiro de exemplo `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```

Edite `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
FORM_ENDPOINT=https://formspree.io/f/seu-id-de-formulario
```

### 4. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Compilação para Produção

Para gerar o build de produção estático/otimizado:
```bash
npm run build
```

Para testar o build localmente em modo de produção:
```bash
npm start
```

---

## 🏛️ Diocese e Responsáveis do Santuário

- **Bispo Diocesano**: Sua Ex.ª Rev.ª Dom Emílio Sumbelelo (*Diocese de Viana*)
- **Reitor do Santuário**: Reverendo Padre Mpindi Alberto
- **Comunidades e Ordens Associadas**: Missionários de Nossa Senhora da Salette (Padres Saletinos) e Congregação das Filhas de Jesus.

---

## 💻 Engenharia e Desenvolvimento

Projeto concebido, desenvolvido e mantido por:

* **João Manuel** — *Engenheiro de Software & Desenvolvedor Web* (42 Luanda)
* **LinkedIn**: [linkedin.com/in/jomanuel](https://www.linkedin.com/in/jomanuel)
* **E-mail**: [joaomandavela8@gmail.com](mailto:joaomandavela8@gmail.com)

---

## 📄 Licença

Este projeto é desenvolvido para o serviço e património cultural e espiritual do **Santuário de Nossa Senhora da Conceição da Muxima** e da **Diocese de Viana, Angola**.
Todos os direitos reservados aos seus respetivos titulares.
