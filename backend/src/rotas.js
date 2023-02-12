const express = require("express");
const app = express();
const cadastrarUsuario = require("./controladores/cadastrarUsuario.js");
const login = require("./controladores/login.js");

app.get("/", (req, res) => {
  res.json("ready to code!");
});

app.post("/cadastrar/usuario", cadastrarUsuario);
app.post("/login", login);

module.exports = app;
