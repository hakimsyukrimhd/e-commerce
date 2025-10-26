const { Product, Category } = require("../models");
const slugify = require("slugify");

const getAllProducts = async (req, res) => {
  try {
    const skip = req.query.offset;
    const take = req.query.limit;

    const products = await Product.findAll({
      attributes: ["id", "name", "description", "price", "stock", "imageUrl", "slug"],
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
      offset: skip,
      limit: take,
      order: [["id", "DESC"]],
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

const getProductsByCategory = async (req, res) => {
  try {
    const skip = req.query.offset;
    const take = req.query.limit;
    const category = req.params.category;

    const products = await Product.findAll({
      attributes: ["id", "name", "description", "price", "stock", "imageUrl", "slug"],
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
      offset: skip,
      limit: take,
      order: [["id", "DESC"]],
      where: {
        categoryId: category,
      },
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

    const product = await Product.findOne({ attributes: ["name", "description", "price", "stock", "imageUrl", "slug"], where: { slug } });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Data not Found",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "Data Found",
      data: product,
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

const addProduct = async (req, res) => {
  try {
    const { name, description, price, stock, imageUrl, categoryId } = req.body;

    if (!name || !description || !price || !stock || !imageUrl || !categoryId) {
      return res.status(400).json({
        success: false,
        message: "Data must be complete",
        data: {},
      });
    }

    const slug = slugify(name, { lower: true });

    const product = await Product.create({ name, description, price, stock, imageUrl, categoryId, slug });

    res.status(200).json({
      success: true,
      message: "Data has been added",
      data: product,
    });
  } catch (err) {
    console.error(err);
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        success: false,
        message: "This data duplicated",
        data: {},
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({ where: { slug } });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Data not Found",
        data: {},
      });
    }

    const { name, description, price, stock, imageUrl, categoryId } = req.body;

    if (!name && !description && !price && !stock && !imageUrl && !categoryId) {
      return res.status(400).json({
        success: false,
        message: "Fill at least one field",
        data: {},
      });
    }

    let newSlug = product.name;
    if (name) {
      newSlug = slugify(name, { lower: true });
    }

    await Product.update({ name, description, price, stock, imageUrl, categoryId, slug: newSlug }, { where: { slug } });

    const updatedProduct = await Product.findOne({ attributes: ["name", "description", "price", "stock", "imageUrl", "slug"], where: { slug: newSlug } });

    res.status(200).json({
      success: true,
      message: "Data has been updated",
      data: updatedProduct,
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

const deleteProduct = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({ where: { slug } });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Data not Found",
        data: {},
      });
    }

    await Product.destroy({ where: { slug } });

    res.status(200).json({
      success: true,
      message: "Data has been deleted",
      data: {},
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
module.exports = { getAllProducts, getProductsByCategory, getOneProduct, addProduct, updateProduct, deleteProduct };
