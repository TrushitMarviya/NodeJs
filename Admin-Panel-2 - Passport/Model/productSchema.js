const mongoose = require("mongoose");
const schema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  CatagoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Catagorie',
    required: true,
  },
  SubCatagoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCatagorie',
    required: true,
  },
  ExtraCatagoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExtraCatagorie",
    required: true,
  },
});

let productSchema = mongoose.model("Product", schema);
module.exports = productSchema;
