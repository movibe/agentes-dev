# Página de Registro

## Componentes Criados

### Form

- `Input.tsx`: Componente de input reutilizável com suporte a:
  - Label
  - Validação de erros
  - Tema claro/escuro
  - Estilização customizada

### Schemas

- `auth.ts`: Schema de validação usando Zod para:
  - Nome (min: 3, max: 50 caracteres)
  - Email (formato válido)
  - Senha (min: 8 caracteres, maiúscula, minúscula e número)
  - Confirmação de senha

## Funcionalidades

### Formulário de Registro

- Validação em tempo real dos campos
- Feedback visual de erros
- Estado de loading durante submissão
- Integração com React Hook Form e Zod

### Autenticação Social

- Botão de login com GitHub (preparado para integração com Supabase)
- Separador visual entre formulário e autenticação social

## Estilização

- Design responsivo
- Suporte a tema claro/escuro
- Feedback visual nos estados:
  - Hover
  - Focus
  - Error
  - Loading
- Consistência com a identidade visual do projeto

## Próximos Passos

1. Implementar integração com Supabase Auth
2. Adicionar mais provedores de autenticação social
3. Criar página de login
4. Implementar redirecionamento após autenticação
5. Adicionar testes unitários e de integração
