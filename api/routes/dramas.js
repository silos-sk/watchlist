const express = require('express');
const router = express.Router();
const dramas = require('../controllers/dramas');

// Load Dramas model
const Drama = require('../models/Drama');

// GET ALL DRAMAS
router.get('/', dramas.getData);

// CREATE NEW DRAMA
router.post('/', dramas.createDrama);
// router.post('/', [requiresAuth(), validate.saveArtist], artists.createArtist);

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get(dramas.getDramaById)
.put(dramas.updateDrama)
.delete(dramas.removeDrama)

// GET, PUT, DELETE BY ID ROUTES
// router.route('/:id')
// .get(artists.getArtistById)
// .put([requiresAuth(), validate.saveArtist], artists.updateArtist)
// .delete(requiresAuth(), artists.removeArtist)


module.exports = router;