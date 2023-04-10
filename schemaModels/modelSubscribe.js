const mongoose = require("mongoose");

const Subscribe = new mongoose.Schema({
  id: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("subscribe", Subscribe);
