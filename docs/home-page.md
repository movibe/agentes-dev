# Página Inicial

## Componentes Criados

### Layout

- `Layout.tsx`: Componente base que envolve todas as páginas
- `Navbar.tsx`: Barra de navegação responsiva com menu mobile
- `Footer.tsx`: Rodapé com informações e links úteis

### Templates

- `TemplateCard.tsx`: Card para exibição de templates com suporte a:
  - Imagem de capa
  - Título e descrição
  - Editor utilizado
  - Tecnologias (tags)
  - Sistema de curtidas

## Estrutura da Página Inicial

### Hero Section

- Título principal com destaque
- Descrição do projeto
- Fundo com gradiente animado:
  - Cores claras: primary -> blue -> indigo -> primary
  - Cores escuras: gray -> indigo -> blue -> gray
  - Animação suave de 15 segundos
- Botões de call-to-action:
  - Ver Templates (botão primário)
  - Explorar Editores (botão outline)

### Featured Templates

- Seção com templates em destaque
- Grid responsivo de cards
- Dados mockados para demonstração

## Estilização

- Utilização do Tailwind CSS
- Suporte a tema claro/escuro
- Design responsivo
- Cores personalizadas:
  - Primary: #0070f3
  - Secondary: #1a1a1a
- Animações:
  - Gradiente de fundo no Hero
  - Transições suaves nos botões
  - Hover states interativos

## Próximos Passos

1. Implementar sistema de autenticação
2. Criar página de listagem completa de templates
3. Desenvolver página de detalhes do template
4. Adicionar funcionalidade de curtir templates
5. Implementar sistema de busca e filtros
