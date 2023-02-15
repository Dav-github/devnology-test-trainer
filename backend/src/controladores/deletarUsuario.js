const knex = require("../configuracoes/conexao.js");
const jwt = require("jsonwebtoken");

const deletarUsuario = async (req, res) => {
  try {
    console.log(req.headers.tokenJWT);
    return res.json("deletarUsuario");
  } catch (error) {
    return res.status(500).json("erro interno");
  }
};

module.exports = deletarUsuario;
