const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  auctionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auction", // Reference to Auction model
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
});

const Bid = mongoose.model("Bid", bidSchema);

module.exports = Bid;
