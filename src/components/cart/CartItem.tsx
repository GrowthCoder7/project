import React from 'react';
import { Heart, Trash2 } from 'lucide-react';
import { CartItemType } from '../../types/cart';

interface CartItemProps {
  item: CartItemType;
  onMoveToWishlist: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItem({ item, onMoveToWishlist, onRemove }: CartItemProps) {
  const { product, quantity } = item;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-neutral-600">${product.price}</p>
        <p className="text-sm text-neutral-500">Quantity: {quantity}</p>
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