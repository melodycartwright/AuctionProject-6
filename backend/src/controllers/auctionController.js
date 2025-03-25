const Auction = require("../models/Auction");
const Bid = require("../models/Bid");

// Create Auction
exports.createAuction = async (req, res) => {
  try {
    const { title, description, price, startDate, endDate, userId } = req.body;
    const auction = new Auction({
      title,
      description,
      price,
      startDate,
      endDate,
      userId,
    });
    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(500).json({ message: "Error creating auction", error: err });
  }
};

// Get All Auctions
exports.getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find().populate("userId", "username");
    res.json(auctions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching auctions", error: err });
  }
};

// Get Auction by ID
exports.getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id).populate(
      "userId",
      "username"
    );
    if (!auction) return res.status(404).json({ message: "Auction not found" });
    res.json(auction);
  } catch (err) {
    res.status(500).json({ message: "Error fetching auction", error: err });
  }
};

// Update Auction
exports.updateAuction = async (req, res) => {
  try {
    const auction = await Auction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!auction) return res.status(404).json({ message: "Auction not found" });
    res.json(auction);
  } catch (err) {
    res.status(500).json({ message: "Error updating auction", error: err });
  }
};

// Delete Auction
exports.deleteAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) return res.status(404).json({ message: "Auction not found" });
    // Check if there are bids
    const bids = await Bid.find({ auctionId: req.params.id });
    if (bids.length > 0)
      return res
        .status(400)
        .json({ message: "Cannot delete auction with bids" });
    await auction.remove();
    res.json({ message: "Auction deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting auction", error: err });
  }
};
