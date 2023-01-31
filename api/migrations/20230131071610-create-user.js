"use strict";
var bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,

        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};

User.beforeCreate(async (user) => {
  user.password = bcrypt.hashSync(user.password, 10);
});
