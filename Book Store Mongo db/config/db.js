const { log } = require('console');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Book_Store_Mongodb');
const db = mongoose.connection;
db.once("open",(err)=>{
    err?console.log(err):console.log("Connected to MongoDB");    
});

module.exports = db;