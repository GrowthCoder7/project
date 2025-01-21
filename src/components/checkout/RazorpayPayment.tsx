import React, { useEffect, useState } from 'react';
import { useCartStore } from '../../store/useCartStore';
import { initiatePayment, verifyPayment } from '../../services/payment';
import { Lock } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayPaymentProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function RazorpayPayment({ onSuccess, onError }: RazorpayPaymentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const items = useCartStore((state) => state.items);
  const total = items.reduce((sum, item) => 
    sum + (item.product.price * (1 - (item.product.discount || 0))) * item.quantity, 0
  );

  useEffect(() => {
    // Load Razorpay SDK
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      const order = await initiatePayment(total);
      
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Lumière',
        description: 'Luxury Candle Purchase',
        order_id: order.id,
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
        },
        handler: async (response: any) => {
          try {
            await verifyPayment(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature
            );
            onSuccess();
          } catch (error) {
            onError('Payment verification failed. Please contact support.');
          }
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          },
          confirm_close: true,
          escape: false
        },
        retry: {
          enabled: true,
          max_count: 3
        },
        timeout: 300,
        theme: {
          color: '#171717',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', (response: any) => {
        onError(`Payment failed: ${response.error.description}`);
        setIsLoading(false);
      });
      razorpay.open();
    } catch (error) {
      onError('Failed to initiate payment. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className="w-full bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Lock className="w-4 h-4" />
        {isLoading ? 'Processing...' : `Pay ₹${Math.round(total)}`}
      </button>
      
      <div className="text-xs text-neutral-500 text-center space-y-1">
        <p>🔒 Secure payment powered by Razorpay</p>
        <p>By proceeding, you agree to our Terms of Service</p>
      </div>
    </div>
  );
}