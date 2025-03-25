const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');

// Route to create an auction
router.post('/', auctionController.createAuction);

// Route to get all auctions
router.get('/', auctionController.getAllAuctions);

// Route to get an auction by ID
router.get('/:id', auctionController.getAuctionById);

// Route to update an auction
router.put('/:id', auctionController.updateAuction);

// Route to delete an auction (if no bids)
router.delete('/:id', auctionController.deleteAuction);

module.exports = router;

