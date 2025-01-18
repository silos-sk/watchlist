// Controller for the Drama collection
const mongodb = require('../config/db');
const ObjId = require('mongodb').ObjectId;

// Get all Dramas
const getData = async (req, res) => {
  try{
    const result = await mongodb
    .getDatabase()
    .db('watchlist')
    .collection('watchlistcollection')
    .find();
  result.toArray().then((lists) => {
    if (lists){
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    } else {
      res.status(400).json(result.error || 'An error has occured');
    }
   
  });
} catch (err){
  res.status(400).json({ message: err.message });
}
};

// Get Drama by ID
const getDramaById = async (req, res) => {
  if (!ObjId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid project id to find a project.');
}
const userId = new ObjId(req.params.id);
  try{
    const result = await mongodb
    .getDatabase()
    .db('watchlist')
    .collection('watchlistcollection')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    if (lists){
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    } else {
      res.status(400).json(result.error || 'An error has occured');
    }
   
  });
} catch (err){
  res.status(400).json({ message: err.message });
}
};

// Create new Drama
const createDrama = async (req, res) => {
  try {
      const newDrama = {
      title : req.body.title,
      year : req.body.year,
      type : req.body.type,
      season: req.body.season,
      episodes : req.body.episodes,
      description : req.body.description,
      imageUrl: req.body.imageUrl,
      rating: req.body.rating,
      genre: req.body.genre
      };
      const result = await mongodb
      .getDatabase()
      .db('watchlist')
    .collection('watchlistcollection')
      .insertOne(newDrama);
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(result);
  
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
      };

// Update Drama

const updateDrama = async (req, res) =>{
  if (!ObjId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to update a contact.');
  }
  const userId = new ObjId(req.params.id);
  const drama = {
    title : req.body.title,
    year : req.body.year,
    type : req.body.type,
    season: req.body.season,
    episodes : req.body.episodes,
    description : req.body.description,
    imageUrl: req.body.imageUrl,
    rating: req.body.rating,
    genre: req.body.genre
  }
  
  try{
      const result = await mongodb
      .getDatabase()
      .db('watchlist')
      .collection('watchlistcollection').replaceOne({ _id: userId }, drama);
      if (result.modifiedCount > 0){
      res.status(204).send(); 
      }else {
      res.status(500).json(result.error || 'An error has occured');
  }} catch (err){
      res.status(500).json({ message: err.message });
  }
  };

// Delete Drama
const removeDrama = async (req, res) =>{
  if (!ObjId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to delete a contact.');
  }
  const userId = new ObjId(req.params.id);
  
  try{
      const result = await mongodb
      .getDatabase()
      .db('watchlist')
      .collection('watchlistcollection').deleteOne({ _id: userId }, true);
      if (result.deletedCount > 0){
      res.status(200).send(); 
      }else {
      res.status(500).json(result.error || 'An error has occured');
  }} catch (err){
      res.status(500).json({ message: err.message });
  }
  };

module.exports = {
    getData, getDramaById, createDrama, updateDrama, removeDrama
};