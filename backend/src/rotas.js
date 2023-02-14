const express = require("express");
const atualizarUsuario = require("./controladores/atualizarUsuario.js");
const app = express();
const cadastrarUsuario = require("./controladores/cadastrarUsuario.js");
const dashboard = require("./controladores/dashboard.js");
const login = require("./controladores/login.js");
const verificadorLogin = require("./intermediarios/verificadorLogin.js");

app.post("/cadastrar/usuario", cadastrarUsuario);
app.post("/login", login);

app.use(verificadorLogin);

app.get("/dashboard", dashboard);
app.post("/atualizar/usuario", atualizarUsuario);

module.exports = app;
