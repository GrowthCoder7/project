import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Heart, Trash2 } from 'lucide-react';
import { CartItemType } from '../../types/cart';

interface CartItemProps {
  item: CartItemType;
  onMoveToWishlist: (id: number) => void;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void; // Added prop for updating quantity globally
}

export default function CartItem({
  item,
  onMoveToWishlist,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  const { product, quantity } = item;

  const [count, setCount] = useState(quantity);

  const handleQuantityChange = (delta: number) => {
    const newCount = Math.max(1, count + delta);
    setCount(newCount);
    onUpdateQuantity(product.id, newCount); // Update the quantity globally
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-neutral-600">
          <span className="line-through text-gray-400 mr-2">₹{product.price}</span>
          ₹{product.discountedPrice}
        </p>

        <div className="mt-4">
          <h3 className="font-medium mb-2">Quantity</h3>
          <div className="flex items-center gap-4">
            {/* Decrement Button */}
            <button
              onClick={() => handleQuantityChange(-1)}
              className="w-8 h-8 flex items-center justify-center border rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={count <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>

            {/* Quantity Count */}
            <span className="w-12 text-center font-medium">{count}</span>

            {/* Increment Button */}
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-8 h-8 flex items-center justify-center border rounded-full"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => onMoveToWishlist(product.id)}
          className="p-2 text-neutral-600 hover:text-neutral-900"
        >
          <Heart className="w-5 h-5" />
        </button>
        <button
          onClick={() => onRemove(product.id)}
          className="p-2 text-neutral-600 hover:text-red-600"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
