// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCartStore } from "../store/useCartStore";
// import { Card } from "../components/Card";
// import { Input } from "../components/Input";
// import { Button } from "../components/Button";
// import { toast } from "../hooks/use-toast";
// import { formatPrice } from '../utils/priceUtils';

// export default function Checkout() {
//   const navigate = useNavigate();
//   const items = useCartStore((state) => state.items);

//   const [shippingDetails, setShippingDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const subtotal = items.reduce((sum, item) => {
//       const { finalPrice } = formatPrice(item.product.price, item.product.discountedPrice||0);
//       return sum + parseFloat(finalPrice.replace('₹', '')) * item.quantity;
//     }, 0);

//   if (items.length === 0) {
//     navigate("/cart");
//     return null;
//   }

//   // const subtotal = items.reduce(
//   //   (sum, item) => sum + item.product.price * item.quantity,
//   //   0
//   // );
//   const shippingCharges = 80;
//   const total = subtotal + shippingCharges;

//   const handleInputChange = (e:any) => {
//     const { name, value } = e.target;
//     setShippingDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const initializeRazorpay = () =>
//     new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });

//   const handleCheckout = async () => {
//     if (Object.values(shippingDetails).some((value) => !value)) {
//       toast({
//         title: "Error",
//         description: "Please fill in all shipping details",
//         variant: "destructive",
//       });
//       return;
//     }

//     const isRazorpayLoaded = await initializeRazorpay();

//     if (!isRazorpayLoaded) {
//       toast({
//         title: "Error",
//         description: "Razorpay SDK failed to load. Please try again later.",
//         variant: "destructive",
//       });
//       return;
//     }

//     const options = {
//       key: "rzp_live_ZFznZ1XO6WRsA8",
//       // secret: process.env.RAZORPAY_KEY_SECRET,
//       amount: total * 100, // Convert amount to paisa
//       currency: "INR",
//       name: "Your Store Name",
//       description: "Order Payment",
//       handler: (response:any) => {
//         toast({
//           title: "Success",
//           description: `Payment ID: ${response.razorpay_payment_id}`,
//           variant: "positive",
//         });
//         navigate("/order-success");
//       },
//       prefill: {
//         name: shippingDetails.name,
//         email: shippingDetails.email,
//         contact: shippingDetails.phone,
//       },
//       notes: {
//         address: shippingDetails.address,
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="min-h-screen pt-20 bg-neutral-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-3xl font-serif mb-8">Checkout</h1>

//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             <Card className="p-6 bg-white">
//               <h2 className="text-xl font-semibold mb-6">Shipping Details</h2>
//               <div className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <Input
//                     name="name"
//                     placeholder="Full Name"
//                     value={shippingDetails.name}
//                     onChange={handleInputChange}
//                   />
//                   <Input
//                     name="email"
//                     type="email"
//                     placeholder="Email"
//                     value={shippingDetails.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <Input
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={shippingDetails.phone}
//                   onChange={handleInputChange}
//                 />
//                 <Input
//                   name="address"
//                   placeholder="Address"
//                   value={shippingDetails.address}
//                   onChange={handleInputChange}
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <Input
//                     name="city"
//                     placeholder="City"
//                     value={shippingDetails.city}
//                     onChange={handleInputChange}
//                   />
//                   <Input
//                     name="state"
//                     placeholder="State"
//                     value={shippingDetails.state}
//                     onChange={handleInputChange}
//                   />
//                   <Input
//                     name="pincode"
//                     placeholder="PIN Code"
//                     value={shippingDetails.pincode}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </Card>
//           </div>

//           <Card className="p-6 bg-white">
//             <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div key={item.product.id} className="flex items-center space-x-4">
//                   <img
//                     src={item.product.images[0]}
//                     alt={item.product.name}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-medium">{item.product.name}</h3>
//                     <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                     <p className="font-medium">₹{subtotal}</p>
//                   </div>
//                 </div>
//               ))}
//               <div className="border-t pt-4 space-y-2">
//                 <div className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>₹{subtotal}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Shipping</span>
//                   <span>₹{shippingCharges}</span>
//                 </div>
//                 <div className="flex justify-between font-semibold text-lg">
//                   <span>Total</span>
//                   <span>₹{total}</span>
//                 </div>
//               </div>
//               <Button
//                 className="w-full font-extrabold text-base bg-black hover:bg-accent-light text-white"
//                 onClick={handleCheckout}
//               >
//                 Place Order
//               </Button>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCartStore } from "../store/useCartStore";
// import { Card } from "../components/Card";
// import { Input } from "../components/Input";
// import { Button } from "../components/Button";
// import { toast } from "../hooks/use-toast";
// import { formatPrice } from '../utils/priceUtils';
// import { initializeRazorpayPayment } from "../utils/razorpay";

// export default function Checkout() {
//   const navigate = useNavigate();
//   const items = useCartStore((state) => state.items);

//   const [shippingDetails, setShippingDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const subtotal = items.reduce((sum, item) => {
//     const { finalPrice } = formatPrice(item.product.price, item.product.discountedPrice || 0);
//     return sum + parseFloat(finalPrice.replace('₹', '')) * item.quantity;
//   }, 0);

//   if (items.length === 0) {
//     navigate("/cart");
//     return null;
//   }

//   const shippingCharges = 80;
//   const total = subtotal + shippingCharges;

//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;
//     setShippingDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCheckout = async () => {
//     if (Object.values(shippingDetails).some((value) => !value)) {
//       toast({
//         title: "Error",
//         description: "Please fill in all shipping details",
//         variant: "destructive",
//       });
//       return;
//     }

//     // Prepare order details for email
//     const orderSummary = items.map((item) => ({
//       name: item.product.name,
//       quantity: item.quantity,
//       price: formatPrice(item.product.price, item.product.discountedPrice || 0).finalPrice,
//     }));

//     const orderDetails = {
//       ...shippingDetails,
//       orderSummary: JSON.stringify(orderSummary, null, 2),
//       total,
//     };

//     // Initialize Razorpay and send email, then navigate to Order Success
//     initializeRazorpayPayment(total, orderDetails, navigate);
//   };

//   return (
//     <div className="min-h-screen pt-20 bg-neutral-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-3xl font-serif mb-8">Checkout</h1>

//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             <Card className="p-6 bg-white">
//               <h2 className="text-xl font-semibold mb-6">Shipping Details</h2>
//               <div className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <Input name="name" placeholder="Full Name" value={shippingDetails.name} onChange={handleInputChange} />
//                   <Input name="email" type="email" placeholder="Email" value={shippingDetails.email} onChange={handleInputChange} />
//                 </div>
//                 <Input name="phone" placeholder="Phone Number" value={shippingDetails.phone} onChange={handleInputChange} />
//                 <Input name="address" placeholder="Address" value={shippingDetails.address} onChange={handleInputChange} />
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <Input name="city" placeholder="City" value={shippingDetails.city} onChange={handleInputChange} />
//                   <Input name="state" placeholder="State" value={shippingDetails.state} onChange={handleInputChange} />
//                   <Input name="pincode" placeholder="PIN Code" value={shippingDetails.pincode} onChange={handleInputChange} />
//                 </div>
//               </div>
//             </Card>
//           </div>

//           <Card className="p-6 bg-white">
//             <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
//             <div className="border-t pt-4 space-y-2">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹{subtotal}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>₹{shippingCharges}</span>
//               </div>
//               <div className="flex justify-between font-semibold text-lg">
//                 <span>Total</span>
//                 <span>₹{total}</span>
//               </div>
//             </div>
//             <Button className="w-full font-extrabold text-base bg-black hover:bg-accent-light text-white" onClick={handleCheckout}>
//               Place Order
//             </Button>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { toast } from "../hooks/use-toast";
import { formatPrice } from '../utils/priceUtils';
import { initializeRazorpayPayment } from "../utils/razorpay";

export default function Checkout() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);

  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const subtotal = items.reduce((sum, item) => {
    const { finalPrice } = formatPrice(item.product.price, item.product.discountedPrice || 0);
    return sum + parseFloat(finalPrice.replace('₹', '')) * item.quantity;
  }, 0);

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const shippingCharges = 80;
  const total = subtotal + shippingCharges;

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = async () => {
    if (Object.values(shippingDetails).some((value) => !value)) {
      toast({
        title: "Error",
        description: "Please fill in all shipping details",
        variant: "destructive",
      });
      return;
    }

    // Prepare order details for email
    const orderSummary = items.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      price: formatPrice(item.product.price, item.product.discountedPrice || 0).finalPrice,
    }));

    const orderDetails = {
      ...shippingDetails,
      orderSummary: JSON.stringify(orderSummary, null, 2),
      total,
    };

    // Initialize Razorpay and send email, then navigate to Order Success
    initializeRazorpayPayment(total, orderDetails, navigate);
  };

  return (
    <div className="min-h-screen pt-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6 bg-white">
              <h2 className="text-xl font-semibold mb-6">Shipping Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Full Name" value={shippingDetails.name} onChange={handleInputChange} />
                  <Input name="email" type="email" placeholder="Email" value={shippingDetails.email} onChange={handleInputChange} />
                </div>
                <Input name="phone" placeholder="Phone Number" value={shippingDetails.phone} onChange={handleInputChange} />
                <Input name="address" placeholder="Address" value={shippingDetails.address} onChange={handleInputChange} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input name="city" placeholder="City" value={shippingDetails.city} onChange={handleInputChange} />
                  <Input name="state" placeholder="State" value={shippingDetails.state} onChange={handleInputChange} />
                  <Input name="pincode" placeholder="PIN Code" value={shippingDetails.pincode} onChange={handleInputChange} />
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shippingCharges}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <Button className="w-full font-extrabold text-base bg-black hover:bg-accent-light text-white" onClick={handleCheckout}>
              Place Order
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

