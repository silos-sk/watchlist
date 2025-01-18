const Express = require("express");
const Mongoclient=require("mongodb").MongoClient;
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors =require("cors")
const app=Express();
const bodyParser = require("body-parser");
const routes = require("./routes/dramas");
const port = process.env.PORT || 8082;
require('dotenv').config();

// Use the cors middleware with the origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// Use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes module as a middleware for the /dramas path
app.use('/', routes)

// Connect Database
connectDB.connectDB();

// Test page
// app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Server running on port ${port}`));
