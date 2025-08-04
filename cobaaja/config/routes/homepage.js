const router = require("express").Router();
const user = require("./user");
const category = require("./category");
const product = require("./product");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Homepage",
  });
});

router.use("/user", user);
router.use("/category", category);
router.use("/product", product);

module.exports = router;
