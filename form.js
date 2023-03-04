import mongoose from "mongoose";

const Form = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  check: { type: String, required: true },
});

export default mongoose.model("contact-us", Form);
