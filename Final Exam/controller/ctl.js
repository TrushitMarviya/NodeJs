const schema = require("../model/Schema");

module.exports.register = async (req, res) => {
  res.render("Register");
};

module.exports.login = async (req, res) => {
  res.render("login");
};

module.exports.dashboard = async (req, res) => {
  res.render("dashboard");
};

module.exports.addRegister = async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;
    if (!name || !mobile || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    const existingUser = await schema.findOne({});
    if (existingUser) {
      return res.redirect("/dashboard");
    }
    await schema.create(req.body);
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

    const user = await schema.findOne({ email, password });
    if (!user) {
      return res.redirect("/login");
    }

    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.addBlog = async (req, res) => {
  try {
    const { blog } = req.body;
    if (!blog) {
      return res.status(400).send("Blog content is required");
    }
    await schema.create({ blog });
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await schema.find({});
    res.render("dashboard", { blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await schema.findByIdAndDelete(id);
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { blog } = req.body;
    await schema.findByIdAndUpdate(id, { blog });
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal Server Error");
  }
};
