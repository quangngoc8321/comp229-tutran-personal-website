require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const allRoute = require("./routes/index");
const authRoute = require("./routes/auth");
const contactListRoute = require("./routes/contact");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", allRoute);
app.use("/", authRoute);
app.use("/", contactListRoute);
const PORT = process.env.PORT || 3000;

const connectAndStart = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
    app.listen(PORT);
    console.log("Server is running on port " + PORT);
  } catch (error) {
    console.log(error);
  }
};

connectAndStart();
