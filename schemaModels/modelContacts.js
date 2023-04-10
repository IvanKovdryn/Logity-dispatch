const mongoose = require("mongoose");

const Contacts = new mongoose.Schema({
  tel: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model("contacts", Contacts);
