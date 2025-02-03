const express = require("express");
const port = 1008;
const app = express();
const db = require("./config/db")
const path = require("path");
const passport = require("./Middleware/Passport");
const session = require("express-session");
const flash = require("connect-flash");
const flashConnect = require("./Middleware/flashConnect");


app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))
app.use("/public",express.static(path.join(__dirname,"public")))
app.use ("/uploads", express.static(path.join(__dirname,"uploads")));
app.use ("/uploads", express.static(path.join(__dirname,"uploads")));

app.use(session({
    name: 'local',
    secret: "abc",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.AuthenticatedUser);
app.use(flash());
app.use(flashConnect.setFlash);

app.use("/",require('./Routes/route'))
app.use("/catagory",require('./Routes/Catagory'))
app.use("/SubCatagory",require('./Routes/SubCatagory'))
app.use("/ExtraCatagory",require('./Routes/ExtraCatagory'))

app.listen(port, (err)=>{
err?console.log(err):console.log(`http://localhost:${port}`);  
});