const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');

// Route to place a bid
router.post('/', bidController.placeBid);

// Route to get all bids for an auction
router.get('/:auctionId', bidController.getBidsForAuction);

module.exports = router;
