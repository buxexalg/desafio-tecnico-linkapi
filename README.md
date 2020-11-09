# desafio-tecnico-linkapi

Repositório referente ao desafio técnico da LinkAPI

# Teste técnico LinkAPI- Back-end - Cubos

## Integração de APIs.

Repositório referente a uma API REST que tem como função administrar a integração entre a API do Pipedrive e Bling. Os endpoints são responsáveis por identificar propostas marcadas como 'Ganhas' no pipedrive, exportá-las como pedidos de venda para o Bling e salvar o registro em um banco de dados NoSQL MongoDB. Esta API faz parte do processo seletivo no cargo de Back-end da LinkAPI.

# Conteúdos

-   Endpoints
    -   Requisição - Pipedrive
    -   Requisições - Bling
    -   Requisições - MongoDB
-   Instalação
    -   Node.js
    -   Variáveis de ambiente
    -   Dependências

## Endpoints

### Requisição - Pipedrive

#### Listar oportunidadas ganhas.

GET `/deals`\
Retorna todas as oportunidades ganhas com os produtos associadas a elas do Pipedrive.

### Requisições - Bling

#### Listar pedidos.

GET `/orders`\
Retorna todos os pedidos registrados no Bling.

#### Exportar oportunidades.

POST `/export`\
Exporta para o Bling as oportunidades ganhas do pipedrive em conjunto com os seus produtos.

### Requisições - MongoDB

#### Enviar pedidos.

POST `/upload`\
Faz o upload para o MongoDB de todos os pedidos do Bling.

#### Listar collection.

GET `/db`\
Retorna todos os documentos dentro da collection do Bling do MongoDB.

## Instalação

### Node.js

#### Instalação do Node no Windows

Acesse a página oficial do Node.js (https://nodejs.org) e baixe o instalador. Tenha certeza também que tem o `git` disponível no seu PATH, você também pode precisar do `npm`.

#### Instalação do Node no Ubuntu

Você pode instalar facilmente o nodejs e o npm com um apt install, basta seguir os seguintes comandos.

          $ sudo apt install nodejs
          $ sudo apt install npm

#### Outros sistemas operacionais

Você pode achar mais informações sobre a instalação no site oficial do Node.js (https://nodejs.org/) e no site oficial do NPM.

### Variáveis de Ambiente

Os segredos são salvos em variáveis de ambiente utilizando `dotenv`, existe um arquivo de exemplo que você precisa preencher. Acesse o arquivo `.env.example`, renomeie-o para `.env` e preencha as variáveis.

Segue uma relação para entendê-las:

| Variável     | Datatype | Descrição                                                                                                                                                                                                       |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PORT=        | string   | Porta de utilização da aplicação. Configurada por padrão na porta 3000.                                                                                                                                         |
| PIP_TOKEN=   | string   | Token de autenticação do Pipedrive. Como um sistema de autenticação não foi implementado na aplicação, é preciso inserir um estático no arquivo dotenv. O mesmo pode ser feito no medu de usuário do Pipedrive. |
| BLING_TOKEN= | string   | Token de autenticação do Pipedrive. Como um sistema de autenticação não foi implementado na aplicação, é preciso inserir um estático no arquivo dotenv. O mesmo pode ser feito no medu de usuário do Bling.     |
| URI_MONGODB= | string   | URI referente ao MongoDB que será utilizado.                                                                                                                                                                    |

### Outras dependências

Após instalar o Node, execute `$ npm install` para instalar as seguintes dependências:

-   [Koa](https://koajs.com/)
-   [Koa-bodyparser](https://www.npmjs.com/package/koa-bodyparser)
-   [Koa-router](https://www.npmjs.com/package/koa-router)
-   [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-	[MongoDB](https://www.npmjs.com/package/mongodb)
-	[Pipedrive](https://www.npmjs.com/package/pipedrive)
-	[Xmlbuilder2](https://www.npmjs.com/package/xmlbuilder2)
-	[Eslint](https://www.npmjs.com/package/eslint)
-	[Prettier](https://www.npmjs.com/package/prettier)
