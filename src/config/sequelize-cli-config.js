// filepath: /home/pedro/Área de trabalho/ecommerce/src/config/sequelize-cli-config.js
import dotenv from "dotenv";
import sequelize from "./db.js";

dotenv.config();

export default {
  development: {
    username: "postgres",
    password: "mysecretpassword",
    database: "mydatabase",
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
  },
};