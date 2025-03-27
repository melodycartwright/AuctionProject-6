const CarBid = require("../models/CarBid");
const CarAuction = require("../models/CarAuction");

// Place a Car Bid
exports.placeCarBid = async (req, res) => {
  const { carAuctionId, amount } = req.body; // `userId` is no longer part of the request body

  try {
    const carAuction = await CarAuction.findById(carAuctionId);
    if (!carAuction) {
      return res.status(404).json({ message: "Car Auction not found" });
    }

    if (carAuction.status !== "open") {
      return res.status(400).json({ message: "Car Auction is closed" });
    }

    const highestBid = await CarBid.findOne({ carAuctionId }).sort({
      amount: -1,
    });

    if (amount <= (highestBid ? highestBid.amount : carAuction.price)) {
      return res
        .status(400)
        .json({ message: "Bid must be higher than the current highest bid" });
    }

    const carBid = new CarBid({ carAuctionId, amount }); // Removed `userId` from here
    await carBid.save();
    res.status(201).json(carBid);
  } catch (err) {
    res.status(500).json({ message: "Error placing car bid", error: err });
  }
};


// Get Bids for Car Auction

exports.getBidsForCarAuction = async (req, res) => {
  const { carAuctionId } = req.params;

  try {
    // Ensure the auction exists
    const carAuction = await CarAuction.findById(carAuctionId);
    if (!carAuction) {
      return res.status(404).json({ message: "Car Auction not found" });
    }

    // Fetch and sort the bids by amount (highest bid first)
    const bids = await CarBid.find({ carAuctionId }).sort({ amount: -1 }); // Sort by bid amount in descending order

    // Return the bids
    res.status(200).json(bids);
  } catch (err) {
    console.error("Error fetching bids:", err);
    res
      .status(500)
      .json({ message: "Error fetching bids", error: err.message });
  }
};