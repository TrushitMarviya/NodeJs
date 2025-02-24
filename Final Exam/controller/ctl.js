const { User, Blog } = require("../model/Schema");

module.exports.register = async (req, res) => {
  res.render("Register");
};

module.exports.login = async (req, res) => {
  res.render("login");
};

module.exports.dashboard = async (req, res) => {
  try {
    const data = await Blog.find({});
    res.render("dashboard", { data });
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.addRegister = async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;
    if (!name || !mobile || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.redirect("/dashboard");
    }
    await User.create(req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error adding data to Mongoose:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.redirect("/login");
    }

    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.addblog = async (req, res) => {
  try {
    await Blog.create(req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.viewBlog = async (req, res) => {
  try {
    const data = await Blog.find({});
    res.render("viewBlog", { data });
  } catch (err) {
    console.error("Error retrieving blogs:", err);
    res.status(500).send("Error retrieving blogs");
  }
};
module.exports.deleteBlog = async (req, res) => {
  let singleData = await Blog.findById(req.query.id);
  let data = await Blog.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect("/dashboard");
  });
};
module.exports.editBlog = async (req, res) => {
  try {
    const singleData = await Blog.findById(req.query.id);
    res.render("editBlog", { singleData });
  } catch (error) {
    console.error("Error retrieving blog for edit:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.body.id, req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal Server Error");
  }
};