const knex = require("../configuracoes/conexao.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const deletarUsuario = async (req, res) => {
  const { senha } = req.body;

  try {
    // console.log(req.headers.tokenJWT);
    if (!senha) {
      return res.status(400).json("Informe a senha!");
    }

    const tokenJWT = jwt.verify(req.headers.tokenJWT, process.env.SENHA_JWT);

    const usuario = await knex
      .select("*")
      .from("usuarios")
      .where("usuario_id", tokenJWT.id);

    const verificarSenhaCorreta = await bcrypt.compare(senha, usuario[0].senha);

    if (!verificarSenhaCorreta) {
      return res.status(400).json("Senha incorreta!");
    }

    await knex("blog").where("referencia_usuario", tokenJWT.id).del();
    await knex("usuarios").where("usuario_id", tokenJWT.id).del();

    return res.status(204).json("Usuario deletado com sucesso");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("erro interno");
  }
};

module.exports = deletarUsuario;
