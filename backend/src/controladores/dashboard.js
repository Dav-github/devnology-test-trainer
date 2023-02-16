const jwt = require("jsonwebtoken");
const knex = require("../configuracoes/conexao.js");

const dashboard = async (req, res) => {
  try {
    const decodeToken = await jwt.verify(
      req.headers.tokenJWT,
      process.env.SENHA_JWT
    );

    const { titulo } = req.params;

    if (titulo) {
      const retornoPesquisa = await knex("blog")
        .where("referencia_usuario", decodeToken.id)
        .whereILike("titulo", `%${req.params.titulo}%`);

      if (retornoPesquisa.length === 0) {
        return res.status(400).json("blog não encontrado");
      }
      return res.json(retornoPesquisa);
    }

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
