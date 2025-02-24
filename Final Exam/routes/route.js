const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");

route.get("/", ctl.register);
route.get("/login", ctl.login);
route.get("/dashboard", ctl.dashboard);
route.post("/addRegister", ctl.addRegister);
route.post("/userlogin", ctl.userlogin);

module.exports = route;
