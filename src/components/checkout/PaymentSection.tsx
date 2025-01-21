import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import RazorpayPayment from './RazorpayPayment';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

export default function PaymentSection() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);

  const handlePaymentSuccess = () => {
    clearCart();
    navigate('/order-success');
  };

  const handlePaymentError = (message: string) => {
    setError(message);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Payment Method</h2>
        <Lock className="w-4 h-4 text-green-600" />
      </div>

      <div className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <RazorpayPayment
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />

        <p className="text-xs text-neutral-500 text-center">
          By proceeding with the payment, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}