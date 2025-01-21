import { toast } from "sonner";

export const initializeRazorpayPayment = async (amount: number) => {
  const options = {
    key: "rzp_live_ZFznZ1XO6WRsA8",
    amount: amount * 100, // Amount is already including shipping charges from the cart/checkout page
    currency: "INR",
    name: "Candlings by DiShane",
    description: "Luxury Handcrafted Candles",
    image: "/og-image.png",
    handler: function (response: any) {
      toast.success("Payment successful!");
      console.log(response);
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    theme: {
      color: "#2B1810"
    },
    modal: {
      ondismiss: function() {
        toast.error("Payment cancelled");
      }
    }
  };

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
};