const mongoose = require("mongoose");
const schema =  mongoose.Schema({

  extraCatName: {
    type: String,
    required: true,
  },
  CategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Catagorie',
    required: true,
  },
  SubCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCatagorie',
    required: true,
  },
});

let subCatSchema = mongoose.model('ExtraCatagorie', schema);

module.exports = subCatSchema;
