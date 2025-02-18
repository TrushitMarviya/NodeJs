const express = require("express");
const route = express.Router();
const passport = require("../Middleware/Passport");
const multer = require("../Middleware/multer");
const subCtl = require("../Controller/subCatagoryCtl");

route.get("/addSubCatagory", passport.checkAuth, subCtl.addsubCat);
route.post("/addSubCatagory", multer, subCtl.addsubCatagory);
route.get("/viewSubCatagory", passport.checkAuth, subCtl.viewSubCatagory);
route.get("/deleteSubCatagory", multer, subCtl.deleteSubCatagory);
route.get("/editSubCatagory", subCtl.editSubCatagory);
route.post("/updateSubCatagory", multer, subCtl.updateSubCatagory);
module.exports = route;
