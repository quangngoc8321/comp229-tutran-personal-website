/* Filename: index.js */
/* Student'Name: Dinh Tu Tran */
/* Student'ID: 301 115 893 */
/* Date: 09/23/2021 */

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
