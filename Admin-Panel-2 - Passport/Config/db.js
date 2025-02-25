const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://marviyatrushit0:Trushit_001@cluster0.2q5ww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
const db = mongoose.connection;
db.once("open", (err) => {
  err ? console.log(err) : console.log("MongoDb Connected");
});
module.exports = mongoose;
