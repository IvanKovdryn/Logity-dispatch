import mongoose from "mongoose";

const Invites = new mongoose.Schema({
  referrer_name: { type: String, required: true },
  referrer_email: { type: String, required: true },
  invite_name: { type: String, required: true },
  invite_phone: { type: String, required: true },
  invite_email: { type: String, required: true },
  check: { type: String, required: true },
});

export default mongoose.model("invites", Invites);
