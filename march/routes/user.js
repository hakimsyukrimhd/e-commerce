const router = require("express").Router();
const { register, login, updateUser, deleteUser } = require("../controller/user-controller");
const { verifyToken } = require("../middlewares/authentication");
const { checkRole } = require("../middlewares/authorization");

router.post("/register", register);
router.post("/login", login);
router.put("/:id", verifyToken, checkRole("regular"), updateUser);
router.delete("/:id", verifyToken, checkRole("regular"), deleteUser);

module.exports = router;
