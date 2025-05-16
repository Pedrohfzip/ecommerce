import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const userRouter = express.Router();

// Rota para criar um novo usuário
userRouter.post("/", createUser);

// Rota para listar todos os usuários
userRouter.get("/", getAllUsers);

// Rota para buscar um usuário por ID
userRouter.get("/:id", getUserById);

// Rota para atualizar um usuário
userRouter.put("/:id", updateUser);

// Rota para deletar um usuário
userRouter.delete("/:id", deleteUser);

export default userRouter;