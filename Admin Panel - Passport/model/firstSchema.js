const mongoose = require ("mongoose");
const schema = mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    hobby:{
        type:[String],
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
})

const firstSchema = mongoose.model('Students',schema)

module.exports = firstSchema;