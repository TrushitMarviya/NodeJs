const express = require("express");
const route = express.Router();
const passport = require("../Middleware/Passport");
const multer = require("../Middleware/Multer");
const ctl = require("../Controller/productctl");

route.get("/addProduct",passport.checkAuth,ctl.addProduct);
route.post("/addProduct",multer,ctl.addProductData);
route.get("/viewProduct",passport.checkAuth,ctl.viewProduct)
route.get("/deleteProduct",multer,ctl.deleteProduct);
route.get("/editProduct",ctl.editProduct);
route.post("/updateProduct",multer,ctl.updateProduct);
module.exports = route;