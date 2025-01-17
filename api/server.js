const Express = require("express");
const Mongoclient=require("mongodb").MongoClient;
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors =require("cors")
const app=Express();
const bodyParser = require("body-parser");
const routes = require("./routes/dramas");



// use the cors middleware with the origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware for the /dramas path
// app.use("dramas", routes);
app.use('/', routes)

// Connect Database
connectDB.connectDB();

// app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

// var CONNECTION_STRING="mongodb+srv://dbUser:j8ZPYPpDOeVMiu92@cluster0.enornqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// var DATABASENAME="watchlist";
// var database;

// app.listen(5038,()=>{
//     Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
//         database=client.db("watchlist");
//         console.log("MongoDB Connection Successful")
//     })
// })

// app.get('/api/watchlist/GetWatchlist',(request, response)=>{
//     database.collection("watchlistcollection").find({}).toArray((error,result)=>{
//         response.send(result);
//     })
// })

// app.post('/api/watchlist/AddDrama',multer().none(),(request,response)=>{
//     database.collection("watchlistcollection").count({},function(error,numOfDocs){
//         database.collection("watchlistcollection").insertOne({
//             id:(numOfDocs+1).toString(),
//             title: request.body.title,
//             year: request.body.year,
//             type: request.body.type,
//             season: request.body.season,
//             episodes: request.body.episodes,
//             status: request.body.status,
//             rating: request.body.rating,

//         })
//     })
// })

// app.delete('/api/watchlist/DeleteDrama',(request,response)=>{
//     database.collection("watchlistcollection").deleteOne({
//         id:requeset.query.id
//     });
//     response.json("Deleted Succesfully");
// })
