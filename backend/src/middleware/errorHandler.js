const errorHandler = (err, req, res, next) => {
  // Log the error for debugging (optional)
  console.error(err);

  // Check for different types of errors
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  // General error handler
  res
    .status(500)
    .json({ message: "Something went wrong. Please try again later." });
};

module.exports = errorHandler;
