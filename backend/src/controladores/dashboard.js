const jwt = require("jsonwebtoken");
const knex = require("../configuracoes/conexao.js");

const dashboard = async (req, res) => {
  try {
    const decodeToken = await jwt.verify(
      req.headers.tokenJWT,
      process.env.SENHA_JWT
    );

    const blogsEncontrados = await knex("blog").where(
      "referencia_usuario",
      decodeToken.id
    );

    return res.json(blogsEncontrados);
  } catch (error) {
    return res.status(500).json("erro interno");
  }
};

module.exports = dashboard;
