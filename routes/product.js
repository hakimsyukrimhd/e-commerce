const router = require("express").Router();
const { getAllProducts } = require("../controller/product-controller");

router.get("/", getAllProducts);

module.exports = router;
