const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");

route.get("/", ctl.register);
route.get("/login", ctl.login);
route.get("/dashboard", ctl.dashboard);
route.post("/addRegister", ctl.addRegister);
route.post("/userlogin", ctl.userlogin);
route.post("/addblog", ctl.addblog);
route.get("/viewBlog", ctl.viewBlog);
route.get("/deleteBlog", ctl.deleteBlog);
route.get("/editBlog", ctl.editBlog);
route.post("/editBlog", ctl.updateBlog);

module.exports = route;
