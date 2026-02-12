import mongoose from "mongoose";
const UrlData=mongoose.Schema({
    fullUrl: {
      type: String,
      required: true
    },
    shortId: {
      type: String,
      required: true,
      unique: true
    },
    clicks: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);
export default mongoose.model("url",UrlData);