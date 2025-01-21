import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  razorpayOrderId: {
    type: String,
    required: true,
    unique: true
  },
  razorpayPaymentId: {
    type: String,
    sparse: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true,
    default: 'INR'
  },
  status: {
    type: String,
    enum: ['created', 'paid', 'failed', 'refunded'],
    default: 'created'
  },
  description: String,
  failureReason: String,
  refundId: String,
  refundAmount: Number,
  paidAt: Date,
  refundedAt: Date
}, {
  timestamps: true
});

export default mongoose.model('Order', orderSchema);