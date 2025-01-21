const { log } = require("console");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Admin_2_Passport");
const db = mongoose.connection;
db.once("open",(err)=>{
    err?console.log(err):console.log("MongoDb Connected");
})
module.exports = mongoose;