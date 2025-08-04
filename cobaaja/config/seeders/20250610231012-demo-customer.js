"use strict";

const bcrypt = require("bcrypt");
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
    const customer = [
      {
        fullname: "Syukri Hakim",
        username: "aciieemm",
        email: "syukri20@gmail.com",
        password: await bcrypt.hash("hackim223", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: "Azma Ulya",
        username: "aciieemm",
        email: "azmaul20@gmail.com",
        password: await bcrypt.hash("hackim223", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Customers", customer, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Customers", null, {});
  },
};
