const jwt = require("jsonwebtoken");
const knex = require("../configuracoes/conexao.js");

const verificadorLogin = async (req, res, next) => {
  try {
    const tokenJWT = req.headers.authorization.replace("Bearer ", "").trim();

    if (tokenJWT === "Bearer") {
      return res.status(403).json("Não autorizado!");
    }

    const usuario = await jwt.verify(tokenJWT, process.env.SENHA_JWT);
    if (!usuario.id) {
      return res.status(403).json("Não autorizado!");
    }

    const verificarUsuarioExistente = await knex("usuarios").where(
      "usuario_id",
      usuario.id
    );

    if (verificarUsuarioExistente.length === 0) {
      return res.status(403).json("Não autorizado!");
    }

    next();
  } catch (error) {
    return res.status(500).json("Erro interno");
  }
};

module.exports = verificadorLogin;
