const express = require("express");
const port = 1008;
const db = require("./Config/db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(origin="http://localhost:1008"))
app.use('/uploads', express.static('uploads'));


app.use("/",require("./Routes/register"));
app.use("/", require("./Routes/route"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`http://localhost:${port}`);
});

