const fs = require("fs");
const CatSchema = require("../model/CatSchema");
const subCatSchema = require("../model/subCatSchema");
const path = require("path");
const extraCatSchema = require("../model/extraCatSchema");

module.exports.addExtraCat = async (req, res) => {
  const record = await CatSchema.find({});
  const data = await subCatSchema.find({});
  res.render("addExtraCatagory", { data, record });
};
module.exports.addExtraCatagory = async (req, res) => {
  await extraCatSchema.create(req.body).then((data) => {
    res.redirect("/ExtraCatagory/addExtraCatagory");
  });
};
module.exports.viewextraCatagory = async (req, res) => {
  await extraCatSchema
    .find({})
    .populate("CategoryId")
    .populate("SubCategoryId")
    .then((data) => {
      res.render("viewExtraCatagory", { data });
    });
};
module.exports.deleteExtraCatagory = async (req,res)=>{
 let singleData = await extraCatSchema.findById(req.query.id);
 fs.unlinkSync(singleData.image);
 let data = await extraCatSchema.findByIdAndDelete(req.query.id);
 res.redirect("/ExtraCatagory/viewExtraCatagory");   
}
module.exports.editExtraCatagory = async (req,res)=>{
  let catagory = await CatSchema.find({});
  let SubCatagory = await subCatSchema.find({});
  let singleData = await extraCatSchema.findById(req.query.id);
  res.render ("updateExtraCatagory",{singleData, catagory, SubCatagory})
} 
module.exports.updateExtraCatagory = async (req, res) => {
  const { id, extraCatName, CategoryId, SubCategoryId } = req.body;

  let updateData = {
    extraCatName,
    CategoryId,
    SubCategoryId,
    image: req.file
  };
  if (req.file) {
    updateData.image = req.file.path;
  }
  await extraCatSchema.findByIdAndUpdate(id, updateData);
  res.redirect("/ExtraCatagory/viewExtraCatagory");
};