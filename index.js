require("dotenv").config();
const express = require("express");
const allRoute = require("./routes/index");
const app = express();

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", allRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
