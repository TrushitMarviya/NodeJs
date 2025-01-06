const schema = require("../model/firstSchema");
const fs = require("fs");
module.exports.firstData = async (req, res) => {
  let data = await schema.find({});
  res.render("index", { data });
};
module.exports.addData = async (req, res) => {
  req.body.image = req.file.path;
  await schema.create(req.body).then(() => {
    res.redirect("/");
  });
};
module.exports.deleteData = async (req, res) => {
  const singleData = await schema.findById(req.query.id);
  fs.unlinkSync(singleData.image);
  await schema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect("/");
  });
};

module.exports.editData = async (req,res)=>{
    let data = await schema.findById(req.query.id)
    .then(data=>res.render("update",{data}));
};
module.exports.updateData = async(req,res)=>{
    let img = "";
    let singleData = await schema.findById(req.body.id)
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img
    await schema .findByIdAndUpdate(req.body.id , req.body)
    .then(data=>{
      res.redirect("/");
    })
  }