const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    return res.status(200).json({ msg: "Token not found" });
  }
  let newToken = token.slice(7, token.length);
  console.log("NewToken :",newToken);
  let decode = jwt.verify(newToken, "key");
  req.user = decode ; 
  next();
};

module.exports = auth;