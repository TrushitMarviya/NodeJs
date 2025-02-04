const express = require('express');
const route = express.Router();
const passport = require('../Middleware/Passport');
const multer = require("../Middleware/multer");
const productCtl = require("../Controller/ProductCtl");

route.get("/addProduct", passport.checkAuth, productCtl.addProd);
route.post("/addProduct", multer, productCtl.addProduct);
route.get("/viewProduct", passport.checkAuth, productCtl.viewProduct);
route.get("/deleteProduct",productCtl.deleteProduct);
route.get("/editProduct",productCtl.editProduct);
route.post("/updateProduct",multer,productCtl.updateProduct)
module.exports = route;