const express = require("express");
const atualizarUsuario = require("./controladores/atualizarUsuario.js");
const cadastrarBlog = require("./controladores/cadastrarBlog.js");
const app = express();
const cadastrarUsuario = require("./controladores/cadastrarUsuario.js");
const dashboard = require("./controladores/dashboard.js");
const deletarUsuario = require("./controladores/deletarUsuario.js");
const login = require("./controladores/login.js");
const verificadorLogin = require("./intermediarios/verificadorLogin.js");

app.post("/usuario", cadastrarUsuario);
app.post("/login", login);

app.use(verificadorLogin);

app.get("/dashboard", dashboard);
app.put("/usuario", atualizarUsuario);
app.delete("/usuario", deletarUsuario);

app.post("/blog", cadastrarBlog);

module.exports = app;
