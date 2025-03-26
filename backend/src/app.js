const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const carAuctionRoutes = require("./routes/carAuctionRoutes");
const carBidRoutes = require("./routes/carBidRoutes");
const authenticate = require("./middleware/auth"); // Import authentication middleware
const errorHandler = require("./middleware/errorHandler"); // Import error handler

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse incoming JSON data

// Routes
app.use("/api/auctions", carAuctionRoutes); // Car auction routes
app.use("/api/bids", carBidRoutes); // Car bid routes

// Error handling middleware (always put this at the end of all routes)
app.use(errorHandler); // Global error handler

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/car-auction", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
