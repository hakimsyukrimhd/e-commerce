const { allCat, addCat, updateCat, deleteCat } = require("../controller/category-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkRole } = require("../middlewares/authorization");
const router = require("express").Router();

router.get("/", allCat);
router.post("/", verifyToken, checkRole("admin"), addCat);
router.put("/:id", verifyToken, checkRole("admin"), updateCat);
router.delete("/:id", verifyToken, checkRole("admin"), deleteCat);

module.exports = router;
