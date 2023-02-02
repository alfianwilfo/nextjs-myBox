"use strict";

/** @type {import('sequelize-cli').Migration} */
var bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let data = [
      { username: "admin", password: "123456" },
      { username: "alfian", password: "123456" },
    ];
    data.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = bcrypt.hashSync(el.password, 10);
    });

    await queryInterface.bulkInsert("admins", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("admins", null, {});
  },
};
