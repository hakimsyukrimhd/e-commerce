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
        name: "Hakim",
        username: "kimha123",
        email: "kimhaa@gmail.com",
        password: await bcrypt.hash("kimhaaa", 10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Abdi",
        username: "Abdin",
        email: "abdi23@gmail.com",
        password: await bcrypt.hash("abdi43", 10),
        role: "regular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Farel",
        username: "farel12",
        email: "farel.12@gmail.com",
        password: await bcrypt.hash("farel12", 10),
        role: "regular",
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
