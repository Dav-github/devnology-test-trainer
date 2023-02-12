const knex = require("../configuracoes/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    if (!email || !senha) {
      return res.status(400).json("Todos os campos são obrigatório");
    }

    const usuario = await knex("usuarios").where("email", email);

    if (usuario.length === 0) {
      return res.status(400).json("E-mail ou senha invalidos!");
    }

    const senhaValida = await bcrypt.compare(senha, usuario[0].senha);

    if (!senhaValida) {
      return res.status(400).json("E-mail ou senha invalidos!");
    }

    const tokenJWT = await jwt.sign(
      { id: usuario[0].id },
      process.env.SENHA_JWT
    );

    const { senha: _, ...usuarioLogado } = usuario[0];

    const retornoUsuarioLogado = {
      usuarioLogado,
      token: tokenJWT,
    };

    return res.status(200).json(retornoUsuarioLogado);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro interno");
  }
};

module.exports = login;
