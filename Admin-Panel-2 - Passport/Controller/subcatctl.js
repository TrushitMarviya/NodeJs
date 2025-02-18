const CatSchema = require("../Model/catagorySchema");
const schema = require("../Model/subCatSchema");

module.exports.addsubCat = async (req, res) => {
  await CatSchema.find({}).then((data) => {
    res.render("addSubCatagory", { data });
  });
};
module.exports.addSubCatagory = async (req, res) => {
  await schema.create(req.body).then((data) => {
    res.redirect("/SubCatagory/addSubCatagory");
  });
};
module.exports.viewSubCatagory = async (req, res) => {
  await schema
    .find({})
    .populate("CatagoryId")
    .then((data) => {
      res.render("viewSubCatagory", { data });
    });
};
module.exports.deleteSubCatagory = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  fs.unlinkSync(singleData.image);
  let data = await schema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect("/SubCatagory/viewSubCatagory");
  });
};
module.exports.editSubCatagory = async (req, res) => {
  let catagory = await CatSchema.find({});
  let singleData = await schema.findById(req.query.id);
  res.render("updateSubCatagory", { catagory, singleData });
};
module.exports.updateSubCatagory = async (req, res) => {
  let updateData = {
    subCatName: req.body.subCatName,
    CatagoryId: req.body.CatagoryId,
  };
  if (req.file) {
    updateData.image = req.file.path;
  }
  await schema.findByIdAndUpdate(req.body.id, updateData);
  res.redirect("/SubCatagory/viewSubCatagory");
};
