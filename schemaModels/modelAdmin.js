const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("admin", Admin);
