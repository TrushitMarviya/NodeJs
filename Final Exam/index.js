const express = require("express");
const port = 1008;
const app = express();
const db = require("./Config/db");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/route"));
app.listen(port, () => console.log(`http://localhost:${port}`));
