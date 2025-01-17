const MongoClient = require('mongodb').MongoClient;
const URI =
  "mongodb+srv://dbUser:j8ZPYPpDOeVMiu92@cluster0.enornqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const DATABASENAME="watchlist";
let db;

const connectDB = () => {
  MongoClient.connect(URI)
 .then((client) => {
   db = client;
 })
 console.log("MongoDB database connected.");
}


// const connectDB = async () => {
//   try {
//     Mongoclient.connect(URI,(error,client)=>{
//       database=client.db("watchlist");
//       console.log("MongoDB Connection Successful")
//   })
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
  
// };

const getDatabase = () =>{
  return db;
}

module.exports = { connectDB, getDatabase };