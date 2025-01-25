# Initial Project Setup

## File Structure

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

## Main Dependencies

- Next.js 14.1.0
- React 18.2.0
- TypeScript 5.3.0
- Tailwind CSS 3.4.0
- Zustand 4.5.0
- React Query 5.0.0
- Supabase JS 2.39.0

## Configurations

### TypeScript

- Configured with path support for absolute imports
- Strict mode enabled
- JSX support preserved

### ESLint

- Extends Next.js core web vitals
- TypeScript rules configured
- Hooks rules enabled

### Tailwind CSS

- Configured to process files in src/
- Custom theme with primary and secondary colors
- Dark mode support via class

## Next Steps

1. Install dependencies with `pnpm install`
2. Start development server with `pnpm dev`
3. Begin developing components and pages
