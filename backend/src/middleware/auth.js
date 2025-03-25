const jwt = require("jsonwebtoken");

// Middleware to protect routes
const authenticate = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token using your JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the user info to the request object
    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authenticate;
