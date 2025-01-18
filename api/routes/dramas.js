const express = require('express');
const router = express.Router();
const dramas = require('../controllers/dramas');
const validate = require('../middleware/validation')

// Load Dramas model
const Drama = require('../models/Drama');

// GET ALL DRAMAS
router.get('/', dramas.getData);

// CREATE NEW DRAMA
router.post('/', dramas.createDrama);
// router.post('/', [validate.saveDrama], dramas.createDrama);
// router.post('/', [requiresAuth(), validate.saveDrama], drdamas.createDrama);

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get(dramas.getDramaById)
.put(dramas.updateDrama)
.delete(dramas.removeDrama)

// .put([validate.saveDrama],dramas.updateDrama)
// .put([requiresAuth(), validate.saveDrama], dramas.updateDrama)

module.exports = router;