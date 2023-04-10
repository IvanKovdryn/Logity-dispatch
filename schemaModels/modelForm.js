const mongoose = require("mongoose");

const Form = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  check: { type: String, required: true },
});

module.exports = mongoose.model("contact-us", Form);
