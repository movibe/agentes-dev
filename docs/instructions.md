# Instruções para Criação do Projeto

Este documento fornece diretrizes detalhadas para a criação de um sistema de cadastro de templates de projetos, permitindo que os usuários selecionem diferentes editores de código e tecnologias para a criação de agentes personalizados. O projeto será desenvolvido utilizando Next.js, Tailwind CSS, Zustand e React Query no front-end, com Supabase para autenticação e banco de dados no back-end.

## 1. Configuração do Ambiente de Desenvolvimento

- **Next.js**: Framework React que facilita a renderização do lado do servidor e a geração de sites estáticos.

- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.

- **Zustand**: Biblioteca leve para gerenciamento de estado em React.

- **React Query**: Biblioteca para gerenciamento de estados assíncronos e cache de dados de servidor.

- **Supabase**: Plataforma que fornece serviços de autenticação e banco de dados em tempo real.

## 2. Estrutura do Projeto

### 2.1. Página Inicial

- **Catálogo de Templates**: Exibir uma lista de templates com filtros por editor de código, tecnologias (React, Tailwind, Node) e número de curtidas.

- **Opção de Cadastro**: Permitir que os usuários se cadastrem utilizando autenticação via GitHub.

- **Detalhes do Projeto**: Fornecer informações sobre o funcionamento e objetivos do projeto.

- **Espaços para Anúncios**: Reservar áreas para possíveis anúncios ou parcerias.

- **Interação com Templates**: Permitir que os usuários curtam e comentem em cada template.

### 2.2. Cadastro de Usuário

- **Autenticação**: Utilizar o Supabase para autenticação via GitHub.

- **Informações Adicionais**: Solicitar nome e e-mail durante o processo de cadastro.

### 2.3. Cadastro de Template

- **Seleção de Editor de Código**: Permitir que o usuário escolha ou cadastre um novo editor de código.

- **Criação/Edição de Template**:

  - **Cadastro de Perguntas**: Incluir perguntas que auxiliarão na geração de instruções para diferentes projetos.

  - **Geração de Instruções**: Com base nas respostas, gerar instruções específicas para cada tipo de projeto.

## 3. Tecnologias Utilizadas

- **Front-end**:

  - **Next.js**: Para estruturação e roteamento das páginas.

  - **Tailwind CSS**: Para estilização moderna e responsiva.

  - **Zustand**: Para gerenciamento de estado de forma simples e eficiente.

  - **React Query**: Para gerenciamento de dados assíncronos e cache.

- **Back-end**:

  - **Supabase**: Para autenticação e banco de dados em tempo real.

## 4. Padrões de Codificação

- **Linter**: Configurar o ESLint para manter a consistência e qualidade do código.

- **Estilo de Código**: Seguir as melhores práticas de codificação, incluindo nomenclatura consistente e organização de arquivos.

## 5. Estilização

- **Layout**: Desenvolver um design moderno e responsivo utilizando Tailwind CSS.

- **Temas**: Implementar opções de tema claro e escuro para melhor experiência do usuário.

## 6. Documentação

- **Comentários**: Adicionar comentários claros e concisos no código para facilitar o entendimento.

- **Arquivos de Documentação**: Manter um arquivo README.md atualizado com instruções de uso e desenvolvimento.

## 7. Tratamento de Erros

- **Front-end**: Implementar boundaries de erro para capturar exceções em componentes.

- **Back-end**: Tratar erros de API com mensagens amigáveis ao usuário.

- **Monitoramento**: Integrar serviço de monitoramento para registro de erros (ex: Sentry).

## 8. Considerações Finais

Seguindo estas diretrizes, o desenvolvimento do sistema será alinhado com as melhores práticas, garantindo uma aplicação robusta, eficiente e de fácil manutenção.
