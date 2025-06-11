const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Welcome to category page",
  });
});

module.exports = router;
