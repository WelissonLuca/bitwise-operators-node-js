## Rodando o projeto

Este projeto consiste de uma API feita em Node.js que consome um banco PostgreSQL. Há um arquivo `.nvmrc` no projeto caso queira realizar a instalação usando o [nvm](https://github.com/nvm-sh/nvm).

Para rodar o projeto é necessário rodar um banco PostgreSQL, sugiro o uso do docker e docker-compose. O projeto já contém um arquivo do docker-compose, então basta usar o seguinte comando:

`docker-compose up`

Usei o dotenv para variáveis de ambiente, então pode-se renomear o arquivo `.env.example` para `.env` e aproveitar as variáveis de ambiente de lá. Por padrão elas apontam para o banco PostgreSQL so docker-compose.

O próximo passo é instalar as depêndencias:

`npm install`

Depois é necessário rodar a migration para criar as tabelas no banco:

`npm run sequelize:migrate`

E então pode-se rodar com nodemon:

`npm run dev`

Para facilitar os testes dos endpoints, pode ser usado o arquivo `JWT.postman_collection.json`.
