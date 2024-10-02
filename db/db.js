//bibliotecas/modulos
const Sequelize = require("sequelize");
//configuração banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./videoteca.sqlite",
});
//tratando possíveis erros e autenticação no banco
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
} catch (erro) {
  console.log("Erro ao conectar ao banco", erro);
}

module.exports = sequelize;
