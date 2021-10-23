/* Filename: contact.js */
/* Student'Name: Dinh Tu Tran */
/* Student'ID: 301 115 893 */
/* Date: 10/23/2021 */

const express = require("express");
const jwt = require("jsonwebtoken");

const Contact = require("../models/Contact");
const Router = express.Router();

// Render Contact List View
Router.get("/contact-list", async (req, res) => {
  res.render("contact-list");
});

// Get all contact datas
Router.post("/contact-list", async (req, res) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.APP_SECRET);

    const contacts = await Contact.find();
    res.status(200).json({
      status: "success",
      contacts,
      user,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
    });
  }
});

// Update a contact record
Router.put("/contact-update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

// Get a  contact record
Router.get("/contact-update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.render("contact-update", { contact });
  } catch (error) {
    console.log(error);
  }
});

// Delete a contact record
Router.delete("/contact-list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = Router;
