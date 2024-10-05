const express = require('express');
const { generateItinerary } = require('../controllers/itineraryController');
const router = express.Router();

router.post('/', generateItinerary);

module.exports = router;
