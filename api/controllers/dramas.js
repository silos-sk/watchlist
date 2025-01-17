// Controller for the artists collection
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





module.exports = {
    getData, getDramaById
};