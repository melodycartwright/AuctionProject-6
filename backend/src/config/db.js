// db.js
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const MongoDB = process.env.MongoDB;

mongoose
  .connect(MongoDB)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
