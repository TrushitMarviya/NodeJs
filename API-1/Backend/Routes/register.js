const express = require("express");
const route = express.Router();
const ctl = require("../Controller/register");
const auth = require("../Middleware/JWTauth")

route.post("/register", ctl.register);
route.post("/login",  ctl.login);



module.exports = route;