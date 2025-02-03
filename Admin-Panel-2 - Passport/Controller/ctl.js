const fs = require("fs");
const schema = require("../Model/adminSchema");
const path = require("path");
const { log } = require("console");

module.exports.login = (req, res) => {
  res.render("login");
};
module.exports.userlogin = async (req, res) => {
  
  res.redirect("/dashboard");
};
module.exports.recoverpass = (req,res)=>{
  res.render("recoverpass");
}
module.exports.logout = async (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
module.exports.index = (req, res) => {
  res.render("index");
};
module.exports.addAdmin = (req, res) => {
 res.render("addAdmin");
};
module.exports.addAdminData = async (req, res) => {
  req.body.image = req.file.path;
  await schema.create(req.body).then((data) => {
    res.redirect("/addAdmin");
  });
};
module.exports.viewAdmin = async (req, res) => {
    let data = await schema.find();
    res.render("viewAdmin", { data })
};
module.exports.deleteAdmin = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  fs.unlinkSync(singleData.image);
  let data = await schema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect("/addAdmin");
  });
};
module.exports.editAdmin = async (req, res) => {
  let singleData = await schema.findById(req.query.id);
  res.render("updateAdmin", { singleData });
};
module.exports.updateAdmin = async (req, res) => {
  let img = "";
  let singleData = await schema.findById(req.body.id);
  console.log(singleData);
  !req.file ? (img = singleData.image) : (img = req.file.path);
  req.file && fs.unlinkSync(singleData.image);
  req.body.image = img;
  let data = await schema.findByIdAndUpdate(req.body.id, req.body);
  data && res.redirect("/viewAdmin");
};
module.exports.profile = (req,res)=>{
  res.render("profile");
}
module.exports.changepass = (req,res)=>{
  res.render("changepass");
}
module.exports.changepassword = async(req,res)=>{
  let user = req.user ;
  if (user.password == req.body.oldpass){
    if (req.body.oldpass != req.body.newpass) {
      if(req.body.newpass == req.body.confirmpass){
        let admin = await schema.findByIdAndUpdate(user.id,{password:req.body.newpass})
        admin && res.redirect("/logout");
      }else{
        console.log("Password must be Same");
      }
    }else{
      console.log("New Passwords must be Different");
    }
  }else{
    console.log("Old Password Wronge");
    
  }
}
