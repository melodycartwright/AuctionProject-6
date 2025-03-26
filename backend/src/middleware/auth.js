const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    req.user = { userId: "test-user-id" }; 
  }
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
;

module.exports = authenticate;
