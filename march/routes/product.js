const router = require("express").Router();
const { getAllProducts, getOneProduct, addProduct, updateProduct, deleteProduct } = require("../controller/product-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkRole } = require("../middlewares/authorization");

router.get("/", getAllProducts);
router.get("/:slug", getOneProduct);
router.post("/", verifyToken, checkRole("admin"), addProduct);
router.put("/:slug", verifyToken, checkRole("admin"), updateProduct);
router.delete("/:slug", verifyToken, checkRole("admin"), deleteProduct);

module.exports = router;
