const express = require('express');
const router = express.Router();
const dramas = require('../controllers/dramas');

// Load Dramas model
const Drama = require('../models/Drama');

// @route   GET drama/test
// @desc    Tests dramas route
// @access  Public
router.get('/test', (req, res) => res.send('drama route testing!'));

// GET ALL DRAMAS
router.get('/', dramas.getData);
router.route('/:id')
.get(dramas.getDramaById)

module.exports = router;