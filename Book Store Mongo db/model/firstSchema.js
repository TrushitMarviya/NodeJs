const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        required:true,
    },
})
const firstSchema = mongoose.model('Student',schema);

module.exports = firstSchema;