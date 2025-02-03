const express = require("express");
const route = express.Router();
const passport = require("../Middleware/Passport");
const multer = require("../Middleware/multer");
const extractl = require("../Controller/extraCatagoryCtl");

route.get("/addExtraCatagory",passport.checkAuth,extractl.addExtraCat)
route.get("/viewextraCatagory",passport.checkAuth,extractl.viewextraCatagory)
route.post("/addExtraCatagory",multer,extractl.addExtraCatagory)
route.get("/deleteExtraCatagory",extractl.deleteExtraCatagory)
route.get("/editExtraCatagory",extractl.editExtraCatagory)
route.post("/updateExtraCatagory",multer,extractl.updateExtraCatagory)
module.exports = route; 