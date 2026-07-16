# Site profissional para pintor autônomo

Estrutura inicial de um site rápido, responsivo e orientado à conversão de pedidos de orçamento pelo WhatsApp.

## Tecnologias
- Next.js App Router
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Lucide React

## Estrutura
- `src/app`: rotas, metadata, sitemap e robots
- `src/components`: layout, seções, formulário e UI reutilizável
- `src/data`: dados mockados e configuração do profissional
- `src/lib`: utilitários de WhatsApp
- `src/schemas`: validação Zod
- `src/types`: tipos compartilhados
- `public/images`: placeholders locais de serviços, portfólio e antes/depois

## Instalação
```bash
npm install
```

## Execução
```bash
cp .env.example .env.local
npm run dev
```
Acesse `http://localhost:3000`.

## Funcionalidades atuais
- Páginas institucionais e comerciais completas
- Formulário de orçamento em quatro etapas
- Pré-visualização e remoção de fotos antes do envio
- Mensagem organizada para abertura via `wa.me`
- SEO básico com metadata, Open Graph, sitemap e robots
- Componentes reutilizáveis e dados centralizados
