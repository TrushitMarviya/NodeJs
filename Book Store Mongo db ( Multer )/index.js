const express = require("express");
const port = 1008;
const app = express();
const db = require("./config/db");
const schema = require("./model/firstSchema") 
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename:(req,file,cb)=>{
    cb(null,file.fieldname + " " + Date.now())
  }
})
const upload = multer({storage :Storage}).single("image");
app.set("view engine","ejs")
app.use(express.urlencoded())
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.get("/",async (req, res) =>{
  let data = await schema.find({})
  res.render("index",{data});
});
app.post("/addData",upload,async (req,res)=>{
  req.body.image = req.file.path;
  await schema.create(req.body).then(()=>{
    res.redirect("/")
  })
});
app.get("/deleteData",upload, async (req,res)=>{
  const singleData = await schema.findById(req.query.id)
  fs.unlinkSync(singleData.image)
  await schema.findByIdAndDelete(req.query.id)
  .then(data=>{
    res.redirect('/')
  })
});
app.get("/editData", async (req,res)=>{
  let data = await schema.findById(req.query.id)
  .then(data=>{
    res.render("update",{data})
  })
})
app.post("/updateData", upload ,async(req,res)=>{
  let img = "";
  let singleData = await schema.findById(req.body.id)
  req.file ? img = req.file.path : img = singleData.image
  req.file && fs.unlinkSync(singleData.image)
  req.body.image = img
  await schema .findByIdAndUpdate(req.body.id , req.body)
  .then(data=>{
    res.redirect("/");
  })
})
app.listen(port, (err)=>{
    err?console.log(err):console.log(`http://localhost:${port}`);  
});