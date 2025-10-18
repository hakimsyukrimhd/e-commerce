const router = require("express").Router();
const product = require("./product");
const category = require("./category");
const user = require("./user");
const cart = require("./cart");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the HomePage",
  });
});

router.use("/product", product);
router.use("/category", category);
router.use("/user", user);
router.use("/cart", cart);

module.exports = router;