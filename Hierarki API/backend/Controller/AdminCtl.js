const schema = require("../Model/AdminSchema");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otp = require('../Middleware/mailer');

module.exports.Register = async (req, res) => {
  req.body.iamge = req.file.path;
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await schema.create(req.body).then((data) => {
    res.status(200).json({ msg: "Admin Created", data });
  });
};
module.exports.login = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });
  if (!admin) {
    return res.status(200).json({ msg: "Admin not found " });
  }
  if (await bcrypt.compare(req.body.password, admin.password)) {
    let token = jwt.sign({ adminData: admin }, "key", { expiresIn: "1h" });
    return res.status(200).json({ msg: "admin login", token: token });
  } else {
    return res.status(200).json({ msg: "Password was wrong" });
  }
};
module.exports.deleteAdmin = async (req, res) => {
  await schema.findByIdAndDelete(req.query.id).then((data) => {
    fs.unlinkSync(data.image);
    res.status(200).json({ msg: "Admin Deleted" });
  });
};
module.exports.updateAdmin = async (req, res) => {
  const data = await schema.findByIdAndUpdate(req.query.id, req.body);
  if (!data) {
    return res.status(200).json({ msg: "Admin not Found" });
  }
  fs.unlinkSync(data.image);
  res.status(200).json({ msg: "Admin is Update", data });
};
module.exports.profile = async (req, res) => {
  let profile = await schema.findById(req.user.admin._id);
  if (!profile) {
    return res.status(200).json({ msg: "Admin not found" });
  }
  res.status(200).json({ msg: "Profile", data: profile });
};
module.exports.adminList = async (req, res) => {
  await schema.find({}).then((data) => {
    res.status(200).json({ msg: "All Admin Data", data });
  });
};
module.exports.changePassword = async (req,res)=>{
  let admin = await schema.findById(req.user.adminData._id);
  if(!admin){
    return res.status(400).json({ msg : "Admin not found"});
  }

  const compare = await bcrypt.compare(req.body.oldPassword, admin.password)
  if(!compare){
    return res.status(400).json({ msg : "old password is incorrect"});
  }

  if(req.body.newpassword !== req.body.confirmPassword) {
    return res.status(400).json({ msg : "new password and confirm password do not match "});
  }
  admin.password = await bcrypt.hash(req.body.newpassword, 10);
  await admin.save();
  return res.status(400).json({ msg : "Password changed successfully"});
};
module.exports.forgotpassword = async (req,res)=>{
let admin = await schema.findOne({email : req.body.email});
if (!admin){
  return res.status(400).json({ msg : "Admin not found"});
}
const otp = Math.floor(100000 + Math.random() * 900000);
admin.resetotp = otp ; 

sendOtp(admin.email , otp);
return res.status(400).json({ msg : "OTP send to email"});

};