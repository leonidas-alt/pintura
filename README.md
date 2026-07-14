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

## Variáveis de ambiente
Configure em `.env.local`:
```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```
Use apenas números, com código do país e DDD. Se ausente ou inválido, botões do WhatsApp são ocultados ou exibem aviso no formulário.

## Como alterar informações
- Profissional: `src/data/professional.ts`
- Serviços: `src/data/services.ts`
- Portfólio, depoimentos, FAQ e regiões: `src/data/content.ts`
- Imagens: substitua os arquivos em `public/images`

## Funcionalidades atuais
- Páginas institucionais e comerciais completas
- Formulário de orçamento em quatro etapas
- Pré-visualização e remoção de fotos antes do envio
- Mensagem organizada para abertura via `wa.me`
- SEO básico com metadata, Open Graph, sitemap e robots
- Componentes reutilizáveis e dados centralizados

## Melhorias futuras
- Integração com API ou painel administrativo
- Envio real de arquivos por backend
- Depoimentos reais verificados
- Domínio e URL final no sitemap/robots
- Analytics e eventos de conversão
