const express = require("express");
const port = 1008;
const app = express();
const db = require("./config/db")
const path = require("path");
app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.use("/",require('./routes/route'))

app.listen(port, (err)=>{
err?console.log(err):console.log(`http://localhost:${port}`);  
});