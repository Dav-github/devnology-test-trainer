require("dotenv").config();
const express = require("express");
const app = express();
const rotas = require("./rotas");

app.use(express.json());
app.use(rotas);
app.listen(process.env.PORTA_SERVIDOR);
console.log(`Servidor rodando na porta ${process.env.PORTA_SERVIDOR}`);
