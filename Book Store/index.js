const express = require('express');
const port = 1008;
const app = express();
let Books = [];
app.use(express.urlencoded())
app.set("view engine" , "ejs");
app.get("/",(req,res)=>{
    res.render("index",{Books});
});
app.post("/addData",(req,res)=>{
    req.body.id = String(Date.now());
    Books.push(req.body);
    res.redirect("/");
});
app.get("/deleteData",(req,res)=>{
    let deleteRec = Books.filter((e)=>e.id !== req.query.id); 
    Books = deleteRec;
    res.redirect("/");
})
app.get("/editData",(req,res)=>{
    let singleRec = Books.find((item)=>item.id === req.query.id)
    res.render("update",{singleRec});
});

app.post("/updateData",(req,res)=>{
    let updatedData= Books.map((e)=>e.id == req.body.id? req.body:e)
    Books = updatedData;
    res.redirect("/");
})
app.listen(port , (err)=>{
    err?console.log(err):console.log("server Started");  
});