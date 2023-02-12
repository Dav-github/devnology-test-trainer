const express = require("express");
const app = express();
const cadastrarUsuario = require("./controladores/cadastrarUsuario.js");

app.get("/", (req, res) => {
  res.json("ready to code!");
});

app.post("/cadastrar/usuario", cadastrarUsuario);

module.exports = app;
