const mongoose = require("mongoose");

const Invites = new mongoose.Schema({
  id: { type: String, required: true },
  referrer_name: { type: String, required: true },
  referrer_email: { type: String, required: true },
  invite_name: { type: String, required: true },
  invite_phone: { type: String, required: true },
  invite_email: { type: String, required: true },
  check: { type: String, required: true },
});

module.exports = mongoose.model("invites", Invites);
