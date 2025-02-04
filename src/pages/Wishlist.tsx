import React from 'react';
import { useWishlistStore } from '../store/useWishlistStore';
import { useCartStore } from '../store/useCartStore'; // Import cart store
import { Trash2, ShoppingCart } from 'lucide-react';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Wishlist() {
  const navigate = useNavigate();
  const { items, removeFromWishlist, moveToCart } = useWishlistStore();
  const { addToCart } = useCartStore(); // Access cart store's addToCart method

  const handleMoveToCart = (product) => {
    addToCart(product); // Add the product to the cart
    moveToCart(product.id); // Remove the product from the wishlist
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif mb-4">Your Wishlist is Empty</h1>
            <p className="text-neutral-600 mb-8">Save items you love for later!</p>
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
        <h1 className="text-3xl font-serif mb-8">My Wishlist</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <span className="text-neutral-400 line-through mr-1">₹{product.price}</span>
                <span className="text-neutral-600 mb-4">₹{product.discountedPrice}</span>
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleMoveToCart(product)} // Use the new handler
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
