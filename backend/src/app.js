const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const auctionRoutes = require("./routes/auctionRoutes");
const bidRoutes = require("./routes/bidRoutes");
const cors = require("cors");
const auth = require("./auth"); // Import your auth middleware if needed

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auctions", auctionRoutes);
app.use("/api/bids", bidRoutes);

// Serve static files in production (if needed)
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/auction", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
