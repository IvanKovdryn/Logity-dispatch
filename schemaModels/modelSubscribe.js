import mongoose from "mongoose";

const Subscribe = new mongoose.Schema({
  email: { type: String, required: true },
});

export default mongoose.model("subscribe", Subscribe);
