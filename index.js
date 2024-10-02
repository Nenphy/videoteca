//bibliotecas/modulos utilizados
const database = require("./db/db");
const express = require("express");
const app = express();
const porta = 443;
const hand = require("express-handlebars");
//MODELS
const Video = require("./models/Video");
const VideoRoutes = require("./routes/routesVideo");
//CONTROLLERS
const VideosControllers = require("./controllers/ControllerVideo");

//UTILIZAÇÃO DO HANDLEBARS
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//ROTAS
app.use("/", VideoRoutes);

//sincronismo com o banco de dados
try {
  database.sync().then(() => {
    app.listen(porta, () => {
      console.log("Servidor rodando");
    });
  });
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados.", erro);
}
