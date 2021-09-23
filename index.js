require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/about-me", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/services", function (req, res) {
  res.render("services");
});

app.get("/projects", function (req, res) {
  res.render("projects");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
