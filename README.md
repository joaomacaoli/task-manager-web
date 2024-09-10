
# Task Manager - Frontend

Este é o repositório do frontend do projeto **Task Manager**, desenvolvido utilizando **Next.js** e **TailwindCSS**. O projeto tem como objetivo gerenciar tarefas, permitindo ao usuário criar, editar, deletar e visualizar suas tarefas de forma eficiente.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TailwindCSS**: Framework CSS para estilização rápida e eficiente.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vercel**: Plataforma de deploy e hospedagem do frontend.

## Funcionalidades

- Login e autenticação de usuários.
- Criação, edição, exclusão e visualização de tarefas.
- Integração com backend (NestJS) via API.
- Layout responsivo com **TailwindCSS**.

## Pré-requisitos

Para rodar o projeto localmente, é necessário ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com base no arquivo `.env.example` fornecido. Certifique-se de preencher corretamente as variáveis de ambiente necessárias, como a URL da API do backend.

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/joaomacaoli/task-manager-web.git
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse o projeto no navegador:

```
http://localhost:3000
```

## Deploy

O frontend foi deployado utilizando a plataforma **Vercel**. Para fazer o deploy da sua própria versão, siga os passos abaixo:

1. Crie uma conta na [Vercel](https://vercel.com/).
2. Conecte o seu repositório na Vercel.
3. Adicione as variáveis de ambiente necessárias na Vercel.
4. Configure o deploy automático a partir do branch principal.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
