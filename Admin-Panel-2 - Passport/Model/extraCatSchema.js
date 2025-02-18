const mongoose = require("mongoose");
const schema =  mongoose.Schema({

  extraCatName: {
    type: String,
    required: true,
  },
  SubCatagoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCatagorie',
    required: true,
  },  
  CatagoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Catagorie',
    required: true,
  },
});

let extraCatSchema = mongoose.model('ExtraCatagorie', schema);

module.exports = extraCatSchema;
