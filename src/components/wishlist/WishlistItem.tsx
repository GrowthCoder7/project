import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import Button from '../ui/Button';
import { Product } from '../../types';

interface WishlistItemProps {
  product: Product;
  onMoveToCart: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function WishlistItem({ product, onMoveToCart, onRemove }: WishlistItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium mb-2">{product.name}</h3>
        <p className="text-neutral-600 mb-4">${product.discountedPrice}</p>
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            onClick={() => onMoveToCart(product.id)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onRemove(product.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}