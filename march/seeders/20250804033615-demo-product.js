"use strict";

const slugify = require("slugify");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */

    const product = [
      {
        name: "Mesin Cuci",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://www.google.com/imgres?q=mesin%20cuci&imgurl=https%3A%2F%2Fimages.samsung.com%2Fis%2Fimage%2Fsamsung%2Fid-twin-washer-wt85h3210mb-wt85h3210mg-se-frontwhite-72570136%3F%24684_547_PNG%24&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Fid%2Fwashers-and-dryers%2Fwashing-machines%2Ftwin-washer-wt85h3210mb-wt85h3210mg-se%2F&docid=auEpRRauSrcevM&tbnid=IuG9UC3UfHDPFM&vet=12ahUKEwirv-TRmvCOAxU19zgGHS6vCzUQM3oECB8QAA..i&w=684&h=547&hcb=2&ved=2ahUKEwirv-TRmvCOAxU19zgGHS6vCzUQM3oECB8QAA",
        categoryId: 1,
        slug: slugify("Mesin Cuci", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pompa Air",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://www.google.com/imgres?q=pompa%20air&imgurl=http%3A%2F%2Forient.co.id%2Fcdn%2Fshop%2Fproducts%2FHONDA-WB-30-XN-3-INCH-POMPA-AIR-IRIGASI-BENSIN_1.jpg%3Fv%3D1631243636&imgrefurl=https%3A%2F%2Forient.co.id%2Fproducts%2Fhonda-wb-30-xn-pompa-air-irigasi-bensin&docid=QAAle_fZ2ypIiM&tbnid=1ifV6MqyMvz6gM&vet=12ahUKEwj-h5OjnPCOAxWXfWwGHSQJHJ8QM3oECCgQAA..i&w=5472&h=3648&hcb=2&ved=2ahUKEwj-h5OjnPCOAxWXfWwGHSQJHJ8QM3oECCgQAA",
        categoryId: 1,
        slug: slugify("Pompa Air", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gelang",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://www.google.com/imgres?q=gelang&imgurl=https%3A%2F%2Fcdn-media.glamira.com%2Fmedia%2Fproduct%2Fnewgeneration%2Fview%2F1%2Fsku%2F14098rosalea%2Fdiamond%2Fblackdiamond_AAA%2Fstone2%2Fblackdiamond_AAA%2Falloycolour%2Fwhite.jpg&imgrefurl=https%3A%2F%2Fwww.glamira.co.id%2Fen%2Fglamira-cord-bracelet-rosalea.html&docid=9OGvnEez9nHrvM&tbnid=OwRsutKpYzjnLM&vet=12ahUKEwiX88PYnfCOAxV3n2MGHV9NHDwQM3oECDAQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiX88PYnfCOAxV3n2MGHV9NHDwQM3oECDAQAA",
        categoryId: 2,
        slug: slugify("Gelang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kacamata",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://www.google.com/imgres?q=kacamata&imgurl=https%3A%2F%2Fupload.jaknot.com%2F2024%2F11%2Fimages%2Fproducts%2F9afce6%2Foriginal%2Ffeishini-kacamata-pria-wanita-round-frame-anti-blue-light-8627.jpg&imgrefurl=https%3A%2F%2Fwww.jakartanotebook.com%2Fp%2Ffeishini-kacamata-pria-wanita-round-frame-anti-blue-light-8627-black&docid=VeJq6SdxIlQ7LM&tbnid=gj6O3nz7Ea5gtM&vet=12ahUKEwi06NrT7vCOAxXiTGwGHVGbIOcQM3oECBMQAA..i&w=2778&h=2778&hcb=2&ved=2ahUKEwi06NrT7vCOAxXiTGwGHVGbIOcQM3oECBMQAA",
        categoryId: 2,
        slug: slugify("Kacamata", { lower: true }),
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
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
