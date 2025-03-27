const express = require("express");
const router = express.Router();
const carAuctionController = require("../controllers/carAuctionController");

// Route to create a car auction
router.post("/", carAuctionController.createCarAuction);

// Route to get all car auctions
router.get("/", carAuctionController.getAllCarAuctions);

// Route to get a car auction by ID
router.get("/:id", carAuctionController.getCarAuctionById);

// Route to update a car auction
router.put("/:id", carAuctionController.updateCarAuction);

// Route to delete a car auction
router.delete("/:id", carAuctionController.deleteCarAuction);

module.exports = router;
