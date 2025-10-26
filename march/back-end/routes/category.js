const router = require("express").Router();
const { allCat, addCat, updateCat, deleteCat } = require("../controller/category-controller");
const { getProductsByCategory } = require("../controller/product-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkRole } = require("../middlewares/authorization");

router.get("/", allCat);
router.get("/:category", getProductsByCategory);
router.post("/", verifyToken, checkRole("admin"), addCat);
router.put("/:id", verifyToken, checkRole("admin"), updateCat);
router.delete("/:id", verifyToken, checkRole("admin"), deleteCat);

module.exports = router;
