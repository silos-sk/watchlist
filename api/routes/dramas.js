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


// @route   GET dramas
// @desc    Get all dramas
// @access  Public
// router.get('/', (req, res) => {
//   Drama.collection("watchlistcollection").find()
//     .then(dramas => res.json(dramas))
//     .catch(err => res.status(404).json({ nodramasfound: 'No Dramas found' }));
// });

// router.get('/', (req, res) => res.send('Hello world!'));

// app.get('/api/watchlist/GetWatchlist',(request, response)=>{
//     database.collection("watchlistcollection").find({}).toArray((error,result)=>{
//         response.send(result);
//     })
// })

// @route   GET dramas/:id
// @desc    Get single drama by id
// @access  Public
// router.get('/:id', (req, res) => {
//   Drama.findById(req.params.id)
//     .then(drama => res.json(drama))
//     .catch(err => res.status(404).json({ nodramafound: 'No Drama found' }));
// });

// @route   POST dramas
// @desc    Add/save drama
// @access  Public
// router.post('/', (req, res) => {
//   Drama.create(req.body)
//     .then(book => res.json({ msg: 'Drama added successfully' }))
//     .catch(err => res.status(400).json({ error: 'Unable to add this drama' }));
// });

// @route   PUT dramas/:id
// @desc    Update drama by id
// @access  Public
router.put('/:id', (req, res) => {
  Drama.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route   DELETE api/books/:id
// @desc    Delete book by id
// @access  Public
router.delete('/:id', (req, res) => {
  Drama.findByIdAndDelete(req.params.id)
    .then(drama => res.json({ mgs: 'Drama entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a drama' }));
});

module.exports = router;