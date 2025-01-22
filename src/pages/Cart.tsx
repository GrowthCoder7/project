// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCartStore } from '../store/useCartStore';
// import { Trash2, Heart } from 'lucide-react';
// import Button from '../components/ui/Button';
// import { formatPrice } from '../utils/priceUtils';

// export default function Cart() {
//   const navigate = useNavigate();
//   const { items, removeFromCart, moveToWishlist } = useCartStore();
  
//   const subtotal = items.reduce((sum, item) => {
//     const { finalPrice } = formatPrice(item.product.price, item.product.discountedPrice||0);
//     return sum + parseFloat(finalPrice.replace('₹', '')) * item.quantity;
//   }, 0);

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen pt-20 bg-neutral-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center">
//             <h1 className="text-3xl font-serif mb-4">Your Cart is Empty</h1>
//             <p className="text-neutral-600 mb-8">Start adding some items to your cart!</p>
//             <Button variant="primary" size="lg" onClick={() => navigate('/collections')}>
//               Continue Shopping
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-20 bg-neutral-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="md:col-span-2 space-y-4">
//             {items.map(({ product, quantity }) => {
//               const { originalPrice, finalPrice, discountPercentage } = formatPrice(product.price, product.discountedPrice||0);
//               return (
//                 <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-24 h-24 object-cover rounded"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-medium">{product.name}</h3>
//                     <div className="flex items-center gap-2">
//                       {discountPercentage > 0 && (
//                         <span className="text-neutral-400 line-through">{originalPrice}</span>
//                       )}
//                       <span className="text-neutral-900">{finalPrice}</span>
//                     </div>
//                     <p className="text-sm text-neutral-500">Quantity: {quantity}</p>
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <button
//                       onClick={() => moveToWishlist(product.id)}
//                       className="p-2 text-neutral-600 hover:text-neutral-900"
//                     >
//                       <Heart className="w-5 h-5" />
//                     </button>
//                     <button
//                       onClick={() => removeFromCart(product.id)}
//                       className="p-2 text-neutral-600 hover:text-red-600"
//                     >
//                       <Trash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
          
//           <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
//             <h2 className="text-xl font-medium mb-4">Order Summary</h2>
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹{subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>₹80</span>
//               </div>
//             </div>
//             <div className="border-t pt-4">
//               <div className="flex justify-between font-medium">
//                 <span>Total</span>
//                 <span>₹{(subtotal+80).toFixed(2)}</span>
//               </div>
//             </div>
//             <Button
//               variant="primary"
//               size="lg"
//               className="w-full mt-6"
//               onClick={() => navigate('/checkout')}
//             >
//               Proceed to Checkout
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { Minus,Plus } from 'lucide-react';
import { Trash2, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import { formatPrice } from '../utils/priceUtils';

export default function Cart() {
  const navigate = useNavigate();
  const { items, removeFromCart, moveToWishlist, updateQuantity } = useCartStore(); // Added `updateQuantity`
  if (!updateQuantity) {
    console.error('updateQuantity is undefined');
    return null; // or handle the error gracefully
  }

  const subtotal = items.reduce((sum, item) => {
    const { finalPrice } = formatPrice(item.product.price, item.product.discountedPrice || 0);
    return sum + parseFloat(finalPrice.replace('₹', '')) * item.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif mb-4">Your Cart is Empty</h1>
            <p className="text-neutral-600 mb-8">Start adding some items to your cart!</p>
            <Button variant="primary" size="lg" onClick={() => navigate('/collections')}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => {
              const { originalPrice, finalPrice, discountPercentage } = formatPrice(product.price, product.discountedPrice || 0);
              return (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      {discountPercentage > 0 && (
                        <span className="text-neutral-400 line-through">{originalPrice}</span>
                      )}
                      <span className="text-neutral-900">{finalPrice}</span>
                    </div>
                    <div className=" items-center gap-2 mt-2">
                    <h3 className="font-medium mb-2">Quantity</h3>
                      <button
                        onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}
                        className="px-2 py-1 text-sm font-medium bg-neutral-200 hover:bg-neutral-300 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center px-4">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="px-2 py-1 text-sm font-medium bg-neutral-200 hover:bg-neutral-300 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => moveToWishlist(product.id)}
                      className="p-2 text-neutral-600 hover:text-neutral-900"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="p-2 text-neutral-600 hover:text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹80</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹{(subtotal + 80).toFixed(2)}</span>
              </div>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="w-full mt-6"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
