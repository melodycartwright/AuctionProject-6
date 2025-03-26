// app.js
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require("../src/config/db"); // ✅ This connects to MongoDB using your secure connection string

const carAuctionRoutes = require("./routes/carAuctionRoutes");
const carBidRoutes = require("./routes/carBidRoutes");
const authenticate = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse incoming JSON data

// Routes
app.use("/api/auctions", carAuctionRoutes);
app.use("/api/bids", carBidRoutes);

// Global error handler (always last)
app.use(errorHandler);

// ✅ Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
