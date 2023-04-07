import mongoose from "mongoose";

const imageModel = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});
export default mongoose.model("Image", imageModel);
