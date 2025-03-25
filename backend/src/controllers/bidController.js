const Bid = require("../models/Bid");
const Auction = require("../models/Auction");

// Place a Bid
exports.placeBid = async (req, res) => {
  const { auctionId, amount, userId } = req.body;
  try {
    const auction = await Auction.findById(auctionId);
    if (!auction) return res.status(404).json({ message: "Auction not found" });

    // Check if auction is open
    if (auction.status !== "open") {
      return res.status(400).json({ message: "Auction is closed" });
    }

    // Get the current highest bid
    const highestBid = await Bid.findOne({ auctionId }).sort({ amount: -1 });

    if (amount <= (highestBid ? highestBid.amount : auction.price)) {
      return res
        .status(400)
        .json({ message: "Bid must be higher than the current highest bid" });
    }

    const bid = new Bid({ auctionId, amount, userId });
    await bid.save();
    res.status(201).json(bid);
  } catch (err) {
    res.status(500).json({ message: "Error placing bid", error: err });
  }
};

// Get Bids for Auction
exports.getBidsForAuction = async (req, res) => {
  try {
    const bids = await Bid.find({ auctionId: req.params.auctionId }).populate(
      "userId",
      "username"
    );
    res.json(bids);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bids", error: err });
  }
};
