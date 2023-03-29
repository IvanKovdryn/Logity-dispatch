import mongoose from "mongoose";

const Service = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  checks: { type: String, required: true },
  text: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model("service", Service);
