const { Product, Category } = require("../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["name", "description", "price", "stock", "imageUrl", "slug"],
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Data Found",
      data: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({
      where: {
        slug: slug,
      },
    });

    if (product === null) {
      res.status(404).json({
        success: false,
        message: "Data not Found",
        data: {},
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data Found",
        data: product,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

module.exports = { getAllProducts, getOneProduct };
