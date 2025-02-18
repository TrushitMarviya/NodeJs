const express = require("express");
const route = express.Router();
const ctl = require("../Controller/clt"); // Corrected file name
const multer = require("../Middleware/multer");

route.post("/addAdmin", multer, ctl.addAdmin);
route.get("/viewAdmin", ctl.viewAdmin);
route.put("/updateAdmin", multer, ctl.updateAdmin);
route.delete("/deleteAdmin", multer, ctl.deleteAdmin);

module.exports = route;
