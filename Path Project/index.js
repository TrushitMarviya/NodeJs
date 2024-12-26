const express = require("express");
const port = 1008;
const app = express();
const path = require("path");
app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/public",express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.render('index');
});

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started");
})