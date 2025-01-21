const express = require("express");
const route = express.Router();
const ctl = require('../Controller/clt')
const multer = require('../Middleware/multer')
const passport = require("passport")

route.get("/", ctl.login);
route.get("/logout", ctl.logout);
route.post("/userlogin",passport.authenticate("local",{failureRedirect:"/"}),ctl.userlogin);
route.get("/admin",passport.checkAuth,ctl.admin);
route.get("/addAdmin",passport.checkAuth,ctl.addAdmin);
route.get("/viewAdmin",passport.checkAuth,ctl.viewAdmin);
route.post("/addAdmin",multer, ctl.addAdminData);
route.get("/deleteAdmin",multer,ctl.deleteAdmin);
route.get("/editAdmin",ctl.editAdmin);
route.post("/updateAdmin",multer,ctl.updateAdmin);
module.exports = route;