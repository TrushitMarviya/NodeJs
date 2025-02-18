const schema = require("../model/CatSchema");
const path = require("path");
const fs = require("fs");

module.exports.addCatagory = (req, res) => {
  res.render("addCatagory");
};
module.exports.addCatagoryData = async (req, res) => {
  req.body.image = req.file.path;
  await schema.create(req.body).then((data) => {
    res.redirect("/catagory/addCatagory");
  });
};
module.exports.viewCatagory = async (req, res) => {
  let data = await schema.find({}).then((data) => {
    res.render("viewCatagory", { data });
  });
};
module.exports.deleteCatagory = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  fs.unlinkSync(singleData.image);
  let data = await schema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect("/catagory/viewCatagory");
  });
};
module.exports.editCatagory = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  res.render("updateCatagory", { singleData });
};
module.exports.updateCatagory = async (req, res) => {
  let img = "";
  let singleData = await schema.findById(req.body.id);
  req.file ? (img = req.file.path) : (img = singleData.image);
  req.file && fs.unlinkSync(singleData.image);
  req.body.image = img;
  let data = await schema.findByIdAndUpdate(req.body.id, req.body);
  data && res.redirect("/catagory/viewCatagory");
};
