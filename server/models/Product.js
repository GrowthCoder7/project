import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  discountedPrice: Number,
  category: String,
  images: [String],
  description: String,
  sizes: [String],
  fragranceNotes: {
    topNotes: [String],
    midNotes: [String],
    baseNotes: [String],
  },
});

export default mongoose.model("Product", ProductSchema);
