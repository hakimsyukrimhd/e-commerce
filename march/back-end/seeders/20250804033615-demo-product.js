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
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
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
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
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
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Gelang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kacamata",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Kacamata", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mesin Cici",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Mesin Cici", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pompa Aer",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Pompa Aer", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Golang",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Golang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kacamato",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Kacamato", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mesin Ceci",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Mesin Ceci", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pompa Ria",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Pompa Ria", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gilang",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Gilang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kacamate",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Kacamate", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mesin Cucu",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Mesin Cucu", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pompo Air",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Pompo Air", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Galang",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Galang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kacamatm",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Kacamatm", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mein Cuci",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Mein Cuci", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Poma Air",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Poma Air", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gelag",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Gelag", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kacamat",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Kacamat", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mesin Cuc",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Mesin Cuc", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pompa EEr",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Pompa EEr", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gelans",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Gelans", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kacamatv",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Kacamatv", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Esin Cuci",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Esin Cuci", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ompa Air",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Ompa Air", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elang",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Elang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Acamata",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Acamata", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Esin Cici",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Esin Cici", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ompa Aer",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Ompa Aer", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Olang",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Olang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Acamato",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Acamato", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Esin Ceci",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Esin Ceci", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ompa Ria",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Ompa Ria", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ilang",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Ilang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Acamate",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Acamate", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Esin Cucu",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Esin Cucu", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ompo Air",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Ompo Air", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alang",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Alang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Acamatm",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Acamatm", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ein Cuci",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Ein Cuci", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Oma Air",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Oma Air", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elag",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Elag", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Acamat",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Acamat", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Esin Cuc",
        description:
          "A washing machine (laundry machine, clothes washer, washer, or simply wash) is a machine designed to launder clothing. The term is mostly applied to machines that use water. Other ways of doing laundry include dry cleaning (which uses alternative cleaning fluids and is performed by specialist businesses) and ultrasonic cleaning. Modern-day home appliances use electric power to automatically clean clothes. The user adds laundry detergent, which is sold in liquid, powder, or dehydrated sheet form, to the wash water. The machines are also found in commercial laundromats where customers pay-per-use",
        price: 300000,
        stock: 120,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565428570l/51099226.jpg",
        categoryId: 1,
        slug: slugify("Esin Cuc", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ompa EEr",
        description:
          "The pumping of water is a basic and practical technique, far more practical than scooping it up with one's hands or lifting it in a hand-held bucket. This is true whether the water is drawn from a fresh source, moved to a needed location, purified, or used for irrigation, washing, or sewage treatment, or for evacuating water from an undesirable location. Regardless of the outcome, the energy required to pump water is an extremely demanding component of water consumption. All other processes depend or benefit either from water descending from a higher elevation or some pressurized plumbing system.",
        price: 200000,
        stock: 200,
        imageUrl:
          "https://static.mizanstore.com/d/img/book/cover/autobiografi-tan-malaka-dari-penjara-ke-penjara.jpg",
        categoryId: 1,
        slug: slugify("Ompa EEr", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elans",
        description:
          "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms. Medical and identity information can be marked on some bracelets, such as allergy bracelets, hospital patient-identification tags, and bracelet tags for newborn babies. Bracelets may be worn to signify a certain phenomenon, such as breast cancer awareness, for religious/cultural purposes or as a sign of LGBTQ pride.",
        price: 95000,
        stock: 98,
        imageUrl:
          "https://dpk.kepriprov.go.id/resources/cover/2016-11-21_AKSI-MASSA-TAN-MALAKA_022213.jpg",
        categoryId: 2,
        slug: slugify("Elans", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Acamatv",
        description:
          "Glasses, also known as eyeglasses, spectacles, or colloquially as specs, are vision eyewear with clear or tinted lenses mounted in a frame that holds them in front of a person's eyes, typically utilizing a bridge over the nose and hinged arms, known as temples or temple pieces, that rest over the ears for support.",
        price: 50000,
        stock: 98,
        imageUrl:
          "https://cdn.gramedia.com/uploads/items/img20220219_10473008.jpg",
        categoryId: 2,
        slug: slugify("Acamatv", { lower: true }),
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
