const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn("Users", "userType", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user", // Valores possíveis: 'user', 'admin'
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Users", "userType");
  },
};
