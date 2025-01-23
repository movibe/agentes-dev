# Configuração Inicial do Projeto

## Estrutura de Arquivos

```
agentes-dev/
├── docs/
│   ├── instructions.md
│   ├── setup.md
│   ├── README.md
│   └── CHANGELOG.md
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── store/
│   └── services/
├── .eslintrc.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Dependências Principais

- Next.js 14.1.0
- React 18.2.0
- TypeScript 5.3.0
- Tailwind CSS 3.4.0
- Zustand 4.5.0
- React Query 5.0.0
- Supabase JS 2.39.0

## Configurações

### TypeScript

- Configurado com suporte a paths para importações absolutas
- Strict mode habilitado
- Suporte a JSX preservado

### ESLint

- Extends Next.js core web vitals
- Regras TypeScript configuradas
- Hooks rules ativadas

### Tailwind CSS

- Configurado para processar arquivos em src/
- Tema customizado com cores primárias e secundárias
- Suporte a dark mode via classe

## Próximos Passos

1. Instalar dependências com `pnpm install`
2. Iniciar o servidor de desenvolvimento com `pnpm dev`
3. Começar a desenvolver os componentes e páginas
