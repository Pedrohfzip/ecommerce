import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());

//Routes

//Error

app.get("/", (req, res) => {
  // ...existing code...
});

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


