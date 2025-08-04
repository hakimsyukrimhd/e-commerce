const router = require("express").Router();
const { getAllProducts, getOneProduct } = require("../controller/product-controller");

router.get("/", getAllProducts);
router.get("/:slug", getOneProduct);

module.exports = router;
