const express = require("express");
const route = express.Router();
const passport = require("../Middleware/Passport");
const multer = require("../Middleware/Multer");
const ctl = require("../Controller/subcatctl")

route.get("/addSubCatagory",passport.checkAuth,ctl.addsubCat);
route.post("/addSubCatagory",multer,ctl.addSubCatagory);
route.get("/viewSubCatagory",passport.checkAuth,ctl.viewSubCatagory);
route.get("/deleteSubCatagory",multer,ctl.deleteSubCatagory);
route.get("/editSubCatagory",ctl.editSubCatagory);
route.post("/updateSubCatagory", multer, ctl.updateSubCatagory)

module.exports = route;