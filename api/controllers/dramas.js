// Controller for the artists collection
const mongodb = require('../config/db');
const ObjId = require('mongodb').ObjectId;

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

module.exports = {
    getData
};