const mongoose = require("mongoose");

const carBidSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  carAuctionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CarAuction", // Reference to CarAuction model
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
});

const CarBid = mongoose.model("CarBid", carBidSchema);

module.exports = CarBid;
