const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
