const CarAuction = require("../models/CarAuction");
const CarBid = require("../models/CarBid");

// Create Car Auction
exports.createCarAuction = async (req, res) => {
  try {
    const {
      title,
      description,
      make,
      model,
      year,
      price,
      startDate,
      endDate,
      userId,
    } = req.body;
    const carAuction = new CarAuction({
      title,
      description,
      make,
      model,
      year,
      price,
      startDate,
      endDate,
      userId,
      id,
    });
    await carAuction.save();
    res.status(201).json(carAuction);
  } catch (err) {
    res.status(500).json({ message: "Error creating car auction", error: err });
  }
};

// Get All Car Auctions
exports.getAllCarAuctions = async (req, res) => {
  try {
    const carAuctions = await CarAuction.find().populate("userId", "username");
    res.json(carAuctions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching car auctions", error: err });
  }
};

// Get Car Auction by ID
exports.getCarAuctionById = async (req, res) => {
  try {
    const carAuction = await CarAuction.findById(req.params.id).populate(
      "userId",
      "username"
    );
    if (!carAuction)
      return res.status(404).json({ message: "Car Auction not found" });
    res.json(carAuction);
  } catch (err) {
    res.status(500).json({ message: "Error fetching car auction", error: err });
  }
};

// Update Car Auction
exports.updateCarAuction = async (req, res) => {
  try {
    const carAuction = await CarAuction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!carAuction)
      return res.status(404).json({ message: "Car Auction not found" });
    res.json(carAuction);
  } catch (err) {
    res.status(500).json({ message: "Error updating car auction", error: err });
  }
};

// Delete Car Auction
exports.deleteCarAuction = async (req, res) => {
  try {
    const carAuction = await CarAuction.findById(req.params.id);
    if (!carAuction)
      return res.status(404).json({ message: "Car Auction not found" });
    // Check if there are bids
    const bids = await CarBid.find({ carAuctionId: req.params.id });
    if (bids.length > 0)
      return res
        .status(400)
        .json({ message: "Cannot delete car auction with bids" });
    await carAuction.remove();
    res.json({ message: "Car Auction deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting car auction", error: err });
  }
};
