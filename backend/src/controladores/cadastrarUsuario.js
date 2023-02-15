const knex = require("../configuracoes/conexao");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      return res.status(400).json("informe todos os campos");
    }

    const verificarEmailRepetido = await knex("usuarios").where("email", email);

    if (verificarEmailRepetido.length !== 0) {
      return res.status(400).json("E-mail em uso");
    }

    const senha_cript = await bcrypt.hash(senha, 10);

    const usuarioCadastrado = await knex("usuarios").insert({
      nome,
      email,
      senha: senha_cript,
    });

    if (!usuarioCadastrado) {
      return res.status(500).json("Erro interno");
    }

    return res.status(201).json("Usuario cadastrado com sucesso!");
  } catch (error) {
    return res.status(500).json("Erro interno");
  }
};

module.exports = cadastrarUsuario;
