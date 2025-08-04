const router = require("express").Router();
const product = require("./product");
const category = require("./category");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the HomePage",
  });
});

router.use("/product", product);
router.use("/category", category);

module.exports = router;
