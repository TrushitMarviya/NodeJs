const path = require("path");
const CatSchema = require("../model/CatSchema");
const subCatSchema = require("../model/subCatSchema");
const fs = require("fs");

module.exports.addsubCat = async (req, res) => {
  await CatSchema.find({}).then((data) => {
    res.render("addSubCat", { data });
  });
};
module.exports.addsubCatagory = async (req, res) => {
  await subCatSchema.create(req.body).then((data) => {
    res.redirect("/SubCatagory/addsubCatagory");
  });
};
module.exports.viewSubCatagory = async (req, res) => {
  await subCatSchema
    .find({})
    .populate("CategoryId")
    .then((data) => {
      res.render("viewSubCatagory", { data });
    });
};
module.exports.deleteSubCatagory = async (req, res) => {
  let singleData = await subCatSchema.findById(req.query.id);
      fs.unlinkSync(singleData.image);
  let data = await subCatSchema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect("/SubCatagory/viewSubCatagory");
  });
};
module.exports.editSubCatagory = async (req, res) => {
  let category = await CatSchema.find({});
  let singleData = await subCatSchema.findById(req.query.id);
  res.render("updateSubCatagory", { singleData,category });
};
module.exports.updateSubCatagory = async (req, res) => {
  let updateData = {
    subCatName: req.body.subCatName,
    CategoryId: req.body.CategoryId
  };
  if (req.file) {
    updateData.image = req.file.path;
  }
  await subCatSchema.findByIdAndUpdate(req.body.id, updateData);
  res.redirect("/SubCatagory/viewSubCatagory");
};