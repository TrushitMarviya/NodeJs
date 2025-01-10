const express = require("express");
const route = express.Router();
const ctl = require('../Controller/clt')
const multer = require('../Middleware/multer')

route.get("/", ctl.login);
route.get("/logout", ctl.logout);
route.post("/userlogin", ctl.userlogin);
route.get("/admin" , ctl.admin);
route.get("/addAdmin",ctl.addAdmin);
route.post("/addAdmin", multer , ctl.addAdminData);
route.get("/viewAdmin",ctl.viewAdmin);
route.get("/deleteAdmin",multer,ctl.deleteAdmin);
route.get("/editAdmin",ctl.editAdmin);
route.post("/updateAdmin",multer,ctl.updateAdmin);
module.exports = route;