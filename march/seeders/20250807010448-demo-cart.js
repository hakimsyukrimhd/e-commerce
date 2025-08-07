"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */

    const cart = [
      {
        userId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Carts", cart, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
