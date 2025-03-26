const express = require("express");
const router = express.Router();
const carAuctionController = require("../controllers/carAuctionController");
const authenticate = require("../middleware/auth"); // Import the auth middleware

// Route to create a car auction (protected route)
router.post("/", carAuctionController.createCarAuction);

// Route to get all car auctions
router.get("/", carAuctionController.getAllCarAuctions);

// Route to get a car auction by ID
router.get("/:id", carAuctionController.getCarAuctionById);

// Route to update a car auction (protected route)
router.put("/:id", authenticate, carAuctionController.updateCarAuction);

// Route to delete a car auction (protected route)
router.delete("/:id", authenticate, carAuctionController.deleteCarAuction);

module.exports = router;
