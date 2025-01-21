import express from 'express';
import Razorpay from 'razorpay';
import { validatePaymentVerification } from 'razorpay/dist/utils/razorpay-utils.js';
import crypto from 'crypto';
import auth from '../middleware/auth.js';

const router = express.Router();

// Initialize Razorpay with environment variables
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create a new order
router.post('/create', auth, async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate amount
    if (!amount || amount < 1) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    // Create unique order ID with timestamp and random string
    const receipt = `order_${Date.now()}_${crypto.randomBytes(6).toString('hex')}`;

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Convert to paise
      currency: 'INR',
      receipt,
      payment_capture: 1, // Auto capture payment
    });

    res.json(order);
  } catch (error) {
    console.error('Payment creation error:', error);
    res.status(500).json({ message: 'Failed to create payment order' });
  }
});

// Verify payment signature
router.post('/verify', auth, async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = req.body;

    // Validate required fields
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return res.status(400).json({ message: 'Missing required payment information' });
    }

    // Verify payment signature
    const isValid = validatePaymentVerification({
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
    }, razorpay_signature, process.env.RAZORPAY_KEY_SECRET);

    if (!isValid) {
      return res.status(400).json({ message: 'Invalid payment signature' });
    }

    // Verify payment status
    const payment = await razorpay.payments.fetch(razorpay_payment_id);
    
    if (payment.status !== 'captured') {
      return res.status(400).json({ message: 'Payment not captured' });
    }

    res.json({ verified: true, payment });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ message: 'Payment verification failed' });
  }
});

// Webhook handler for payment events
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    // Verify webhook signature
    const signature = req.headers['x-razorpay-signature'];
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    const isValidSignature = validateWebhookSignature(
      req.body,
      signature,
      secret
    );

    if (!isValidSignature) {
      return res.status(400).json({ message: 'Invalid webhook signature' });
    }

    const event = req.body;

    // Handle different event types
    switch (event.event) {
      case 'payment.captured':
        // Handle successful payment
        break;
      case 'payment.failed':
        // Handle failed payment
        break;
      // Add more event handlers as needed
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ message: 'Webhook processing failed' });
  }
});

export default router;