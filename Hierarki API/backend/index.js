const express = require("express");
const port = 1008;
const db = require("./Config/db");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use("/uploads", express.static("uploads"));

app.use("/Admin", require("./Routes/AdminRoute"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`http://localhost:${port}`);
});
