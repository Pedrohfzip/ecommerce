// filepath: /home/pedro/Área de trabalho/ecommerce/src/migrations/create-user.js
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable("Users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Users");
  },
};