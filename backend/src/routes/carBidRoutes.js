const express = require("express");
const router = express.Router();
const carBidController = require("../controllers/carBidController");
const authenticate = require("../middleware/auth"); // Import the auth middleware

// Route to place a bid on a car auction (protected route)
router.post("/", authenticate, carBidController.placeCarBid);

// Route to get all bids for a car auction
router.get("/:carAuctionId", carBidController.getBidsForCarAuction);

module.exports = router;
