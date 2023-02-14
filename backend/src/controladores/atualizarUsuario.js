const knex = require("../configuracoes/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const atualizarUsuario = async (req, res) => {
  const { nome, email, senha, novaSenha } = req.body;

  try {
    if (!senha) {
      return res.status(400).json("Informe a senha");
    }

    const tokenJWT = await jwt.verify(
      req.headers.tokenJWT,
      process.env.SENHA_JWT
    );

    const usuario = await knex("usuarios").where("usuario_id", tokenJWT.id);

    const verificarSenhaCorreta = await bcrypt.compare(senha, usuario[0].senha);

    if (!verificarSenhaCorreta) {
      return res.status(400).json("Senha incorreta!");
    }

    const novaSenhaCripto = await bcrypt.hash(novaSenha, 10);

    const atualizarDados = {
      nome: nome ? nome : usuario[0].nome,
      email: email ? email : usuario[0].email,
      senha: novaSenha ? novaSenhaCripto : usuario[0].senha,
    };

    console.log(atualizarDados);

    return res.json();
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro interno");
  }
};

module.exports = atualizarUsuario;
