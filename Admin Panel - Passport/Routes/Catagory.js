const express = require("express");
const route = express.Router();
const catCtl = require("../Controller/catagoryCtl");
const passport = require("../Middleware/Passport");
const multer = require("../Middleware/multer")

route.get("/addCatagory",passport.checkAuth,catCtl.addCatagory)
route.post("/addCatagory",multer,catCtl.addCatagoryData)
route.get("/viewCatagory",passport.checkAuth,catCtl.viewCatagory)
route.get("/deleteCatagory",multer,catCtl.deleteCatagory)
route.get("/editCatagory",catCtl.editCatagory)
route.post("/updateCatagory",multer,catCtl.updateCatagory)
module.exports = route;