# devnology-test-trainer

## Objetivo

Você deve construir um sistema para salvar links de artigos de tecnologia.

- Desenvolva uma API gerenciar links, com a URL e um título/label. Os links também podem ser editados e excluídos.
- Construa uma interface, como quiser, para que um usuário possa ver e gerenciar os links manualmente
- Automatize este processo de salvar links com um web crawler que importe artigos de seus blogs favoritos, como a devGo.
- Hospede sua aplicação em algum servidor.

Fique a vontade para incluir mais funcionalidades. Seja criativo, pense sempre na experiência de usuário e construa um sistema que realmente possa ser bem utilizado.

## Back-end

## Banco de dados

Foi Criado um banco de dados chamado "app" com as seguintes tabelas atraves do arquivo de dump.

_Endereço do arquivo: ./backend/dump.sql_

**usuario:**

- id (Chave primaria)
- email (Email usado para login unique)
- senha (Salvar senha criptografada)
- nome (String)

**blog:**

- id (Chave primaria)
- url (string)
- titulo (string)
- id_usuario (foreign key table usuario(id))

**favoritos: escopo extra**

- id (primary key)
- id_usuario (foreign key table usuario(id))
- id_blog (foreign key table id_blog(id))

---

## Rotas

#### **POST /cadastrar/usuario**

_Endereço do arquivo: ./backend/src/controladores/cadastrarUsuario.js_

A rota recebe um objeto JSON contendo as propriedades:

- nome\*
- email\*
- senha\*

#### **POST /login**

_Endereço do arquivo: ./backend/src/controladores/login.js_

A rota recebe um objeto JSON contendo as propriedades:

- email\*
- Senha\*

#### **GET /dashboard**

Rota padrão, após o login, aqui devemos listar os blogs cadastrados pelo usuario.

#### **POST /atualizar/usuario**

A rota recebe um objeto em JSON contendo as propriedades:

- nome
- email
- senha\*
- novaSenha\*

Caso o nome e email seja uma string vazia esses dados não devem sofrer alteração no banco de dados.

#### **POST /deletar/usuario**

A rota recebe um objeto em JSON contendo as propriedades:

- email\*
- senha\*
