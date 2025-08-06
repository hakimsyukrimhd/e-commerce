const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorization! Token required",
      data: {},
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(403).json({
      success: false,
      message: "Forbidden! Invalid token.",
      data: {},
    });
  }
}

module.exports = { verifyToken };
