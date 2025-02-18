const express = require("express");
const route = express.Router();
const ctl = require("../Controller/catagoryctl");
const passport = require("../Middleware/Passport");
const multer = require("../Middleware/Multer");

route.get("/addCatagory", passport.checkAuth, ctl.addCat);
route.post("/addCatagory", multer, ctl.addCatagory);
route.get("/viewCatagory", passport.checkAuth, ctl.viewCatagory);
route.get("/deleteCatagory", multer, ctl.deleteCatagory);
route.get("/editCatagory", ctl.editCatagory);
route.post("/updateCatagory", multer, ctl.updateCatagory);
module.exports = route;
