const express = require("express");
const route = express.Router();
const ctl = require('../controllers/clt')
const upload = require("../Middleware/Multer");

route.get("/" , ctl.firstData);
route.post("/addData" , upload , ctl.addData);
route.get("/deleteData", upload , ctl.deleteData);
route.get("/editData", ctl.editData);
route.post("/updateData",upload , ctl.updateData)

module.exports = route;