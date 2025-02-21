const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
})
const adminSchema = mongoose.model("admin" , schema)
module.exports = adminSchema ;