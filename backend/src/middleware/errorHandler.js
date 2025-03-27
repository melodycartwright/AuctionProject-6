const errorHandler = (err, req, res, next) => {
  // Log the error for debugging 
  console.error(err);


  // Handle validation errors (Mongoose or other validation issues)
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation error",
      details: err.message, // Include error details for debugging
    });
  }

  // Handle MongoDB errors (duplicate keys, connection issues)
  if (err.name === "MongoError") {
    return res.status(500).json({
      message: "Database error occurred",
      details: err.message, // Provide MongoDB error details
    });
  }

  // Handle any other known error types, such as syntax errors or missing data
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
      details: err.message, // Provide error details related to invalid object IDs
    });
  }

  // For any other unexpected errors, return a generic message
  res.status(500).json({
    message: "Something went wrong. Please try again later.",
    details: err.message, // Include error details for debugging 
  });
};

module.exports = errorHandler;
