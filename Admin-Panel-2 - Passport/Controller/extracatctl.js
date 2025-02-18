const CatSchema = require("../Model/catagorySchema");
const subCatSchema = require("../Model/subCatSchema");
const schema = require("../Model/extraCatSchema");
const path = require("path");
const fs = require("fs");

module.exports.addExtraCat = async (req, res) => {
  const data = await CatSchema.find({});
  const record = await subCatSchema.find({});
  res.render("addExtraCatagory", { data, record });
};

module.exports.addExtraCatagory = async (req, res) => {
  await schema.create(req.body).then((data) => {
    res.redirect("/ExtraCatagory/addExtraCatagory");
  })
};

module.exports.viewExtraCatagory = async (req, res) => {
  await schema
    .find({})
    .populate("CatagoryId")
    .populate("SubCatagoryId")
    .then((data) => {
      res.render("viewExtraCatagory", { data });
    });
};

module.exports.deleteExtraCatagory = async (req,res)=>{
  let singleData = await schema.findById (req.query.id);
  fs.unlinkSync(singleData.image);
  await schema.findByIdAndDelete(req.query.id).then((data)=>{
    res.redirect("/ExtraCatagory/viewExtraCatagory");
  });
};

module.exports.editExtraCatagory = async (req,res)=>{
let catagory = await CatSchema.find({});
let subCatagory = await subCatSchema.find({});
let singleData = await schema.findById(req.query.id);
 res.render ("updateExtraCatagory",{catagory,subCatagory,singleData});
};
module.exports.updateExtraCatagory = async (req,res)=>{
  let updateData = {
    CatagoryId: req.body.CatagoryId,
    SubCatagoryId: req.body.SubCatagoryId,
    extraCatName: req.body.extraCatName
  };
  if (req.file) {
    updateData.image = req.file.path;
  }
  await schema.findByIdAndUpdate(req.body.id,updateData);
  res.redirect("/ExtraCatagory/viewExtraCatagory");
}