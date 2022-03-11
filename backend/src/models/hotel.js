/* Modules */
import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema(
  {
    hotel_name: String,
    category: String,
    price: String,
    photos: Array,
    reviews: Array,
  },
  { timestamps: true }
);

export default mongoose.model("hotel", hotelSchema);
