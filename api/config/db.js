const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const URI = process.env.URI;

const DATABASENAME="watchlist";
let db;

const connectDB = () => {
  MongoClient.connect(URI)
 .then((client) => {
   db = client;
 })
 console.log("MongoDB database connected.");
}

const getDatabase = () =>{
  return db;
}

module.exports = { connectDB, getDatabase };