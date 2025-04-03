const CarBid = require("../models/CarBid");
const CarAuction = require("../models/CarAuction");
const { default: mongoose } = require("mongoose");

// Place a Car Bid
exports.placeCarBid = async (req, res) => {
  const { carAuctionId, amount } = req.body; // `userId` is no longer part of the request body

  try {
    const carAuction = await CarAuction.findById(carAuctionId);
    if (!carAuction) {
      return res.status(404).json({ message: "Car Auction not found" });
    }

    // Check if the auction has ended
    if (new Date() > new Date(carAuction.endDate)) {
      return res
        .status(400)
        .json({ message: "Auction has ended. Bidding is closed." });
    }

    // Check if the auction is still open
    if (carAuction.status !== "open") {
      return res.status(400).json({ message: "Car Auction is closed" });
    }

    // Get the highest bid so far
    const highestBid = await CarBid.findOne({ carAuctionId }).sort({
      amount: -1,
    });

    // Ensure the new bid is higher than the current highest bid
    if (amount <= (highestBid ? highestBid.amount : carAuction.price)) {
      return res
        .status(400)
        .json({ message: "Bid must be higher than the current highest bid" });
    }

    // Create and save the new bid
    const carBid = new CarBid({ carAuctionId, amount });
    await carBid.save();
    res.status(201).json(carBid);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error placing car bid", error: err.message });
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

// Delete Car Bid
exports.deleteCarBid = async (req, res) => {
  const { id } = req.params;

  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const carBid = await CarBid.findByIdAndDelete(id); // Delete the bid by ID
    if (!carBid) {
      return res.status(404).json({ message: "Bid not found" });
    }

    // Successfully deleted the bid
    res.status(200).json({ message: "Bid deleted successfully" });
  } catch (err) {
    console.error("Error deleting car bid:", err);
    res
      .status(500)
      .json({ message: "Error deleting car bid", error: err.message });
  }
};
