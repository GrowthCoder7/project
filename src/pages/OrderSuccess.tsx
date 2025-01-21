import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-serif mb-4">Payment Successful!</h1>
          <p className="text-neutral-600 mb-8">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/collections')}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}