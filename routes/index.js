const express = require("express");

const Router = express.Router();

Router.get("/", function (req, res) {
  res.render("home");
});
Router.get("/about-me", function (req, res) {
  res.render("about");
});

Router.get("/contact", function (req, res) {
  res.render("contact");
});

Router.get("/services", function (req, res) {
  res.render("services");
});

Router.get("/projects", function (req, res) {
  res.render("projects");
});

module.exports = Router;
