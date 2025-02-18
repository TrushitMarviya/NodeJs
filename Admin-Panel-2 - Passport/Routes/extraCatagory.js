const express = require("express");
const route = express.Router();
const passport = require("../Middleware/Passport");
const multer = require("../Middleware/Multer");
const ctl = require("../Controller/extracatctl");

route.get("/addExtraCatagory", passport.checkAuth, ctl.addExtraCat);
route.post("/addExtraCatagory", multer, ctl.addExtraCatagory);
route.get("/viewExtraCatagory", passport.checkAuth, ctl.viewExtraCatagory);
route.get("/deleteExtraCatagory", multer, ctl.deleteExtraCatagory);
route.get("/editExtraCatagory", ctl.editExtraCatagory);
route.post("/updateExtraCatagory", multer, ctl.updateExtraCatagory);
module.exports = route;
