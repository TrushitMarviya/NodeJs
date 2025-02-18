const schema = require("../Model/register");
const bycript = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });

  if (admin) {
    return res.status(200).json({ msg: "admin already Exist" });
  }
  req.body.password = await bycript.hash(req.body.password, 10);
  await schema.create(req.body).then(() => {
    res.status(200).json({ msg: "Admin Created !" });
  });
};

module.exports.login = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });
  if (!admin) {
    return res.status(200).json({ msg: "admin not found" });
  }
  if (await bycript.compare(req.body.password, admin.password)) {
    let token = jwt.sign({ adminData: admin }, "key", { expiresIn: "1h" });
    res.status(200).json({ msg: "admin login", token: token });
  }
};