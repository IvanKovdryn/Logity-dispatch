import mongoose from "mongoose";

const Article = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  text: { type: String, required: true },
  when_created: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model("article", Article);
