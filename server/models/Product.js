import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  description: String,
  category: String,
  scent: [String],
  burnTime: String,
  tags: [String],
  discount: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);