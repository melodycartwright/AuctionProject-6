const express = require('express');
const router = express.Router();
const Auction = require('../models/Auction');

// Få alla auctioner
router.get('/', async (req, res) => {
    const auctions = await Auction.find();
    res.json(auctions);
});

// Skapa ny auction
router.post('/', async (req, res) => {
    const auction = new Auction(req.body);
    await auction.save();
    res.json(auction);
});

module.exports = router;