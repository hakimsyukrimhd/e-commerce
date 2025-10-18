const { getCart } = require("../controller/cart-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkRole } = require("../middlewares/authorization");

const router = require("express").Router();

router.get("/", verifyToken, checkRole("regular"), getCart);

module.exports = router;
