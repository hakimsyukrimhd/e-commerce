const { Cart } = require("../models/cart");

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findAll();

    res.status(200).json({
      success: true,
      message: "Data found",
      data: cart,
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

module.exports = { getCart };
