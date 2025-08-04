"use strict";

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

    const product = [
      {
        name: "Sunscreen Hakim's Face",
        description:
          "Hakim's Face Sunscreen adalah pelindung wajah harian yang dirancang khusus untuk kamu yang aktif di luar ruangan namun tetap ingin menjaga kesehatan kulit. Dengan SPF 50 PA++++, sunscreen ini melindungi kulitmu secara maksimal dari sinar UVA dan UVB penyebab penuaan dini, flek hitam, dan iritasi. Formulanya ringan, tidak lengket, dan cepat meresap ke dalam kulit tanpa meninggalkan white cast, cocok untuk semua jenis kulit, termasuk kulit berminyak dan sensitif. Diperkaya dengan aloe vera dan niacinamide, Hakims Face tidak hanya melindungi, tapi juga melembapkan dan mencerahkan kulit secara alami. Aman digunakan setiap hari, bahkan di bawah makeup. Tidak mengandung alkohol dan parfum, membuatnya ideal untuk digunakan oleh siapa saja yang peduli dengan kesehatan kulit wajah.",
        price: 70000,
        stock: 90,
        imageUrl: "https://images.ctfassets.net/qqbjnb77o4id/5uodnYBSUQSCwdeuh5vY7w/e4f2143c21f80f1584cc5e3659ab47e2/Hydrasoothe-Sunscreen-Gel-New.jpg?w=780&fm=webp",
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Macbook Pro 2025 Retina ",
        description:
          "Hakim's Face Sunscreen adalah pelindung wajah harian yang dirancang khusus untuk kamu yang aktif di luar ruangan namun tetap ingin menjaga kesehatan kulit. Dengan SPF 50 PA++++, sunscreen ini melindungi kulitmu secara maksimal dari sinar UVA dan UVB penyebab penuaan dini, flek hitam, dan iritasi. Formulanya ringan, tidak lengket, dan cepat meresap ke dalam kulit tanpa meninggalkan white cast, cocok untuk semua jenis kulit, termasuk kulit berminyak dan sensitif. Diperkaya dengan aloe vera dan niacinamide, Hakims Face tidak hanya melindungi, tapi juga melembapkan dan mencerahkan kulit secara alami. Aman digunakan setiap hari, bahkan di bawah makeup. Tidak mengandung alkohol dan parfum, membuatnya ideal untuk digunakan oleh siapa saja yang peduli dengan kesehatan kulit wajah.",
        price: 1600000,
        stock: 190,
        imageUrl:
          "https://www.google.com/imgres?q=macbook&imgurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2Fimages%2Fproduct%2Fmac%2Fstandard%2FApple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2F2020%2F11%2Fintroducing-the-next-generation-of-mac%2F&docid=DKJiINMrf87DZM&tbnid=aOZ5RhRr4QPlyM&vet=12ahUKEwi_hbj_8uONAxVVxzgGHRiDM-QQM3oECGcQAA..i&w=980&h=861&hcb=2&ved=2ahUKEwi_hbj_8uONAxVVxzgGHRiDM-QQM3oECGcQAA",
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Products", product, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Products", null, {});
  },
};
