const path = require("path");
const fs = require("fs");
const schema = require("../Model/productSchema");
const CatSchema = require("../Model/catagorySchema");
const subCatSchema = require("../Model/subCatSchema");
const extraCatSchema = require("../Model/extraCatSchema");
const productSchema = require("../Model/productSchema");

module.exports.addProduct = async (req, res) => {
  const data = await CatSchema.find({});
  const record = await subCatSchema.find({});
  const item = await extraCatSchema.find({});
  res.render("addProduct", { data, record, item });
};
module.exports.addProductData = async (req, res) => {
  req.body.image = req.file.path;
  await schema.create(req.body).then((data) => {
    res.redirect("/Product/addProduct");
  });
};
module.exports.viewProduct = async (req, res) => {
  await schema
    .find({})
    .populate("CatagoryId")
    .populate("SubCatagoryId")
    .populate("ExtraCatagoryId")
    .then((data) => {
      res.render("viewProduct", { data });
    });
};
module.exports.deleteProduct = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  if (singleData.image) {
    fs.unlinkSync(singleData.image);
  }
  await schema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect("/Product/viewProduct");
  });
};
module.exports.editProduct = async (req,res)=>{
    let catagory = await CatSchema.find({});
    let subCatagory = await subCatSchema.find({});
    let extraCatagory = await extraCatSchema.find({});
    let singleData = await productSchema.findById(req.query.id);
    res.render("updateProduct", {
      singleData,
      catagory,
      subCatagory,
      extraCatagory,
    });
};
module.exports.updateProduct = async (req, res) => {
  let updateData = {
    CatagoryId: req.body.CatagoryId,
    SubCatagoryId: req.body.SubCatagoryId,
    ExtraCatagoryId: req.body.ExtraCatagoryId,
    productName: req.body.productName,
    price: req.body.price,
  };
  if (req.file) {
    updateData.image = req.file.path;
  }
  await productSchema.findByIdAndUpdate(req.body.id, updateData);
  res.redirect("/Product/viewProduct");
};