const express = require("express");
const router = express.Router();
const carBidController = require("../controllers/carBidController");

// Route to place a bid on a car auction
router.post("/", carBidController.placeCarBid);

// Route to get all bids for a car auction
router.get("/:carAuctionId", carBidController.getBidsForCarAuction);

module.exports = router;
