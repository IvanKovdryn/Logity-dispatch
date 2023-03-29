import mongoose from "mongoose";

const Contacts = new mongoose.Schema({
  tel: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
});

export default mongoose.model("contacts", Contacts);
