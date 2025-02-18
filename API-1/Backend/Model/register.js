const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name:{
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
    gender:{
        type : String,
        require:true,
    },
    language:{
        type:String,
        require:true,
    },
})
const apiSchema = mongoose.model("Register" , schema)
module.exports = apiSchema;