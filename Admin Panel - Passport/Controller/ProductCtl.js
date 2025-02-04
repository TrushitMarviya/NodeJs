const CatSchema = require("../model/CatSchema");
const SubCatSchema = require("../model/subCatSchema");
const ExtraCatSchema = require("../model/extraCatSchema");
const ProductSchema = require("../model/ProductSchema");
const productSchema = require("../model/ProductSchema");

module.exports.addProd = async (req, res) => {
  const record = await CatSchema.find({});
  const data = await SubCatSchema.find({});
  const item = await ExtraCatSchema.find({});
  res.render("addProduct", { record, data, item });
};

module.exports.addProduct = async (req, res) => {
  await ProductSchema.create(req.body).then((data) => {
    res.redirect("/Product/addProduct");
  });
};

module.exports.viewProduct = async (req, res) => {
  await ProductSchema.find({})
    .populate("CategoryId")
    .populate("SubCategoryId")
    .populate("ExtraCategoryId")
    .then((data) => {
      res.render("viewProduct", { data });
    });
};

module.exports.deleteProduct = async (req, res) => {
  let singleData = await productSchema.findById(req.query.id);
  let data = await productSchema.findByIdAndDelete(req.query.id).then ((data)=>{
    res.redirect("/Product/viewProduct");
  })
};

module.exports.editProduct = async (req, res) => {
  let catagory = await CatSchema.find({});
  let subCatagory = await SubCatSchema.find({});
  let extraCatagory = await ExtraCatSchema.find({});
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
    productName: req.body.productName,
    extraCatName: req.body.extraCatName,
    subCatName: req.body.subCatName,
    CategoryId: req.body.CategoryId,
  };
  if (req.file) {
    updateData.image = req.file.path;
  }
  await ProductSchema.findByIdAndUpdate(req.body.id, updateData);
  res.redirect("/Product/viewProduct");
};
