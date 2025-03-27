const mongoose = require("mongoose");

const carBidSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  carAuctionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CarAuction",
    required: true,
  },
  // Removed userId field as it's not needed
});

const CarBid = mongoose.model("CarBid", carBidSchema);
module.exports = CarBid;
