const schema = require("../Model/apiSchema");
const path = require("path");
const fs = require("fs");

module.exports.addAdmin = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    await schema.create(req.body);
    res.status(200).json({ msg: "Data Added Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.viewAdmin = async (req, res) => {
  try {
    const data = await schema.find({});
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteAdmin = async (req, res) => {
  try {
    let singleData = await schema.findById(req.query.id);
    if (singleData.image) {
      fs.unlinkSync(singleData.image);
    }
    await schema.findByIdAndDelete(req.query.id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateAdmin = async (req, res) => {
  try {
    let img = "";
    let singleData = await schema.findById(req.query.id);
    req.file ? (img = req.file.path) : (img = singleData.image);
    req.file && fs.unlinkSync(singleData.image);
    req.body.image = img;
    await schema.findByIdAndUpdate(req.query.id, req.body);
    res.status(200).json({ msg: "Data Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
