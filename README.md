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

---

## Rotas

#### **POST /usuario**

A rota recebe um objeto JSON contendo as propriedades:

- nome\*
- email\*
- senha\*

#### **POST /login**

A rota recebe um objeto JSON contendo as propriedades:

- email\*
- Senha\*

#### **GET /dashboard**

Rota padrão, após o login, aqui devemos listar os blogs cadastrados pelo usuario.

#### **put /usuario**

A rota recebe um objeto JSON contendo as propriedades:

- nome
- email
- senha\*
- novaSenha

Existe uma validação na rota exigindo que ao menos um dos campos (nome,email,novaSenha) sejam preenchidos. caso o usuario mude apenas um dos campos, os outros continuaram com os mesmos dados ja fornecidos no momento do cadastro.

#### **delete /usuario**

A rota recebe um objeto JSON contendo as propriedades

- senha\*

A rota apaga todos os dados inclusive os blogs cadastrados.

#### **post /blog**

A rota recebe um objeto JSON contendo as propriedades

- url\*
- titulo\*

A rota pode cadastrar blogs do usuario, o retorno vem do /dashboard
