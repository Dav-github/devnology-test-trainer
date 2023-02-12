const express = require("express");
const app = express();
const PORT = 8694;
const rotas = require("./rotas");

app.use(express.json());
app.use(rotas);
app.listen(PORT);
console.log(`Servidor rodando na porta ${PORT}`);
