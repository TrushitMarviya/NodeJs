const express = require("express");
const route = express.Router();
const ctl = require("../Controller/AdminCtl");
const multer = require("../Middleware/Multer");
const jwt = require("../Middleware/JWT");

route.post("/register", multer, ctl.Register);
route.post("/login", ctl.login);
route.delete("/deleteadmin", jwt, multer, ctl.deleteAdmin);
route.put("/updateAdmin", multer, jwt, ctl.updateAdmin);
route.get("/profile", jwt, ctl.profile);
route.get("/adminList", jwt, ctl.adminList);

module.exports = route;
