import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const initializeRazorpayPayment = async (amount: number, orderDetails: any, navigate: any) => {
  // Ensure Razorpay is loaded
  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const isLoaded = await loadRazorpayScript();
  if (!isLoaded) {
    toast.error("Failed to load Razorpay. Please check your internet connection.");
    return;
  }

  const options = {
    key: "rzp_live_ZFznZ1XO6WRsA8",
    amount: amount * 100, // Convert to paisa
    currency: "INR",
    name: "Candlings by DiShane",
    description: "Luxury Handcrafted Candles",
    image: "/og-image.png",
    handler: async function (response: any) {
      toast.success("Payment successful!");
      await sendOrderEmail(orderDetails, response.razorpay_payment_id);
      navigate("/order-success");
    },
    prefill: {
      name: orderDetails.name,
      email: orderDetails.email,
      contact: orderDetails.phone,
    },
    theme: {
      color: "#2B1810",
    },
    modal: {
      ondismiss: function () {
        toast.error("Payment cancelled");
      },
    },
  };

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
};

// Function to send order details via EmailJS
const sendOrderEmail = async (orderDetails: any, paymentId: string) => {
  const templateParams = {
    name: orderDetails.name,
    email: orderDetails.email,
    phone: orderDetails.phone,
    address: `${orderDetails.address}, ${orderDetails.city}, ${orderDetails.state} - ${orderDetails.pincode}`,
    orderSummary: orderDetails.orderSummary,
    total: orderDetails.total,
    paymentId: paymentId,
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.success("Order details sent to admin!");
  } catch (error) {
    toast.error("Failed to send order details.");
    console.error("EmailJS Error:", error);
  }
};
