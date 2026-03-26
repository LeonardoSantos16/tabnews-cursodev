# TabNews Clone

Projeto focado em fundamentos de engenharia de software, arquitetura de sistemas. Atualmente o repositório reflete a base técnica construída junto com o Felipe Deschamps durante o **Curso.dev**.

> **Status:** Em desenvolvimento. Após a conclusão da base metodológica do curso, o projeto passará por uma refatoração estrutural para implementação de novas funcionalidades autorais.

## Tech Stack

- **Framework:** Next.js
- **Linguagem:** JavaScript (Node.js)
- **Banco de Dados:** PostgreSQL
- **Testes:** Jest (TDD)
- **Infraestrutura:** Docker & Docker Compose
- **Deploy:** Vercel

## Implementação Técnica (Fase 1: Fundação)

Nesta etapa, o foco está na qualidade da infraestrutura e segurança da aplicação:

- **Sistema de Autenticação:** Fluxo completo de usuários e sessões utilizando Cookies (HttpOnly/Secure) e hashing de senhas.
- **Gestão de Banco de Dados:** Evolução do esquema via migrations controladas com `node-pg-migrate`.
- **Estratégia de Testes:** Implementação de testes de integração e ponta a ponta (E2E) garantindo a integridade das rotas de API.
- **Resiliência:** Lógica de tratamento de erros e gerenciamento de conexões com o banco de dados.
- **CI (Integração Contínua):** Automação de testes via GitHub Actions.

## 🚀 Roadmap de Evolução (Pós-Curso)

Ao finalizar a base do curso, as seguintes melhorias serão implementadas para diferenciar este repositório:

- [ ] **Refatoração de Arquitetura:** Migração para padrões de Clean Architecture para maior desacoplamento.
- [ ] **Sistema de Tags:** Organização de conteúdo por categorias customizadas.
- [ ] **Interface Autoral:** Redesign da UI para uma identidade visual própria.

## 💻 Como rodar o projeto

```bash
git clone [https://github.com/seu-usuario/clone-tabnews.git](https://github.com/seu-usuario/clone-tabnews.git)
npm install
npm run services:up
npm run dev
```
