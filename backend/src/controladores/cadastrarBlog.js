const jwt = require("jsonwebtoken");
const knex = require("../configuracoes/conexao.js");

const cadastrarBlog = async (req, res) => {
  const { url, titulo } = req.body;

  try {
    if (!url || !titulo) {
      return res.status(400).json("Informe todos os campos");
    }

    const tokenJWT = await jwt.verify(
      req.headers.tokenJWT,
      process.env.SENHA_JWT
    );

    const blogCadastrado = await knex("blog").insert(
      {
        url,
        titulo,
        referencia_usuario: tokenJWT.id,
      },
      ["url", "titulo"]
    );

    return res.json(blogCadastrado);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Erro interno");
  }
};
module.exports = cadastrarBlog;
