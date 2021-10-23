/* Filename: auth.js */
/* Student'Name: Dinh Tu Tran */
/* Student'ID: 301 115 893 */
/* Date: 10/23/2021 */

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Router = express.Router();

Router.get("/login", function (req, res) {
  res.render("login");
});
Router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log(req.body);
    const user = await User.findOne({ username });
    // console.log(user);
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Your username is not correct",
      });
    }
    const match = await bcrypt.compare(password, user.hash);
    if (!match) {
      return res.status(400).json({
        status: "fail",
        message: "Your password is not correct",
      });
    }

    // Sign JWT
    const token = jwt.sign({ username: user.username }, process.env.APP_SECRET);
    return res.status(200).json({
      status: "success",
      user: { username: user.username },
      token,
    });
  } catch (error) {
    // res.status(500).json({
    //   status: "fail",
    //   message: "Something went wrong!!!",
    // });
    console.log(error);
  }
});

module.exports = Router;
