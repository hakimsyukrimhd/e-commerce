"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */

    const user = [
      {
        name: "Fadil",
        username: "fadil112",
        email: "fadil@gmail.com",
        password: await bcrypt.hash("fadiillss", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Farhan",
        username: "frh7",
        email: "farhanss@gmail.com",
        password: await bcrypt.hash("fahjh", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Users", user, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
