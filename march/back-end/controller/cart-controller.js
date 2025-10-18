const { Cart, Product, CartItem } = require("../models");

const getCart = async (req, res) => {
  try {
    const userLoginId = req.user.id;

    const cart = await Cart.findAll({
      where: { userId: userLoginId },
      include: {
        model: Product,
        through: {
          attributes: ["quantity"],
        },
      },
    });

    if (!cart.length) {
      return res.status(404).json({
        success: false,
        message: "Data not Found",
        data: {},
      });
    }

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
