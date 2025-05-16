import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import routes from "./config/routes.js"; // Importa as rotas
dotenv.config();

const app = express();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/", routes); 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Error


//Server
sequelize.authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida!");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1);
  });


