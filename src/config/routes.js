import express from "express";
import userRouter from "../routes/userRoutes.js";// Importa as rotas do User

const router = express.Router();

// Adicione aqui todas as rotas do projeto
router.use("/users", userRouter);

export default router;