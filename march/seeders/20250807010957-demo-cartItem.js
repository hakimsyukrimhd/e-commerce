"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */

    const cartItem = [
      {
        cartId: 1,
        productId: 1,
        quantity: 2,
        priceAtTheTime: 300000,
        totalPrice: 600000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cartId: 1,
        productId: 3,
        quantity: 5,
        priceAtTheTime: 95000,
        totalPrice: 475000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cartId: 2,
        productId: 2,
        quantity: 2,
        priceAtTheTime: 200000,
        totalPrice: 400000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cartId: 2,
        productId: 4,
        quantity: 2,
        priceAtTheTime: 50000,
        totalPrice: 100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("CartItems", cartItem, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("CartItems", null, {});
  },
};
