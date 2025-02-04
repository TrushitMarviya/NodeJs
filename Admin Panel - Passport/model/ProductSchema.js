const mongoose = require("mongoose");
const schema = mongoose.Schema({
  productName: {
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
  ExtraCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExtraCatagorie", 
    required: true,
  },
});

let productSchema = mongoose.model("Product", schema);
module.exports = productSchema;
