import api from './api';

interface PaymentOrder {
  id: string;
  amount: number;
  currency: string;
}

interface PaymentVerification {
  verified: boolean;
  payment?: any;
}

export const initiatePayment = async (amount: number): Promise<PaymentOrder> => {
  try {
    const { data } = await api.post('/payment/create', { amount });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to initiate payment');
  }
};

export const verifyPayment = async (
  paymentId: string,
  orderId: string,
  signature: string
): Promise<PaymentVerification> => {
  try {
    const { data } = await api.post('/payment/verify', {
      razorpay_payment_id: paymentId,
      razorpay_order_id: orderId,
      razorpay_signature: signature,
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Payment verification failed');
  }
};