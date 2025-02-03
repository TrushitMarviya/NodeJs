const express = require("express");
const route = express.Router();
const ctl = require('../Controller/clt')
const multer = require('../Middleware/multer')
const passport = require("passport")

route.get("/", ctl.login);
route.get("/logout",ctl.logout);
route.post("/userlogin",passport.authenticate("local",{failureRedirect:"/"}),ctl.userlogin);

route.get("/admin",passport.checkAuth,ctl.admin);
route.get("/addAdmin",ctl.addAdmin);
route.get("/viewAdmin",passport.checkAuth,ctl.viewAdmin);
route.post("/addAdmin",multer, ctl.addAdminData);
route.get("/deleteAdmin",multer,ctl.deleteAdmin);
route.get("/editAdmin",ctl.editAdmin);
route.post("/updateAdmin",multer,ctl.updateAdmin);

route.get("/profile",ctl.profile);

route.get("/changepass",passport.checkAuth,ctl.changepass);
route.post("/changepass",passport.checkAuth,ctl.changepassword);

route.post("/recoverPass",ctl.recoverPass);
route.post("/verifyPass",ctl.verifyPass);
module.exports = route;
