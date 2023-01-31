"use strict";
let csvToJson = require("convert-csv-to-json");
/** @type {import('sequelize-cli').Migration} */
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
    let fileInputName = "ibox-product.csv";

    let json = csvToJson.formatValueByType().getJsonFromCsv(fileInputName);
    json.forEach((el) => {
      delete el['"id'];
      delete el['real_pdp_url"'];
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("products", json, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", null, {});
  },
};
