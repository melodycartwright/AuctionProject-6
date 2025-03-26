const CarBid = require("../models/CarBid");
const CarAuction = require("../models/CarAuction");

// Place a Car Bid
exports.placeCarBid = async (req, res) => {
  const { carAuctionId, amount, userId } = req.body;
  try {
    const carAuction = await CarAuction.findById(carAuctionId);
    if (!carAuction)
      return res.status(404).json({ message: "Car Auction not found" });

    // Check if car auction is open
    if (carAuction.status !== "open") {
      return res.status(400).json({ message: "Car Auction is closed" });
    }

    // Get the current highest bid
    const highestBid = await CarBid.findOne({ carAuctionId }).sort({
      amount: -1,
    });

    if (amount <= (highestBid ? highestBid.amount : carAuction.price)) {
      return res
        .status(400)
        .json({ message: "Bid must be higher than the current highest bid" });
    }

    const carBid = new CarBid({ carAuctionId, amount, userId });
    await carBid.save();
    res.status(201).json(carBid);
  } catch (err) {
    res.status(500).json({ message: "Error placing car bid", error: err });
  }
};

// Get Bids for Car Auction
exports.getBidsForCarAuction = async (req, res) => {
  try {
    const carBids = await CarBid.find({
      carAuctionId: req.params.carAuctionId,
    }).populate("userId", "username");
    res.json(carBids);
  } catch (err) {
    res.status(500).json({ message: "Error fetching car bids", error: err });
  }
};
