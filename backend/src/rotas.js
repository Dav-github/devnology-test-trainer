const express = require("express");
const app = express();
const cadastrarUsuario = require("./controladores/cadastrarUsuario.js");
const login = require("./controladores/login.js");
const verificadorLogin = require("./intermediarios/verificadorLogin.js");

app.post("/cadastrar/usuario", cadastrarUsuario);
app.post("/login", login);

app.use(verificadorLogin);

app.get("/", (req, res) => {
  res.json("ready to code!");
});

module.exports = app;
