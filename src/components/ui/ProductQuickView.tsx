import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { Product } from '../../types';
import Button from './Button';
import ImageGallery from './ImageGallery';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';
import { formatPrice } from '../../utils/priceUtils';

interface ProductQuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  if (!isOpen) return null;

  const { originalPrice, finalPrice, discountPercentage } = formatPrice(
    product.price,
    product.discountedPrice
  );

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center  justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl min-h-3/5 w-full mx-4 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-900 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <ImageGallery images={product.images} alt={product.name} />
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-serif mb-2">{product.name}</h2>
            <div className="flex items-center gap-2 mb-4">
              {discountPercentage > 0 && (
                <span className="text-neutral-400 line-through text-lg">
                  {originalPrice}
                </span>
              )}
              <span className="text-2xl font-medium">{finalPrice}</span>
              {discountPercentage > 0 && (
                <span className="bg-red-100 text-red-700 text-sm px-2 py-1 rounded">
                  {discountPercentage}% OFF
                </span>
              )}
            </div>
            
            {product.description && (
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {product.description}
              </p>
            )}
            
            {product.scent && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Fragrance Notes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.scent.map((note) => (
                    <span
                      key={note}
                      className="bg-neutral-100 px-3 py-1 rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="primary"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  addToWishlist(product);
                  onClose();
                }}
              >
                Add to Wishlist
              </Button>
            </div>
            
            {product.burnTime && (
              <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-medium mb-2">Product Details</h3>
                <div className="text-sm text-neutral-600">
                  <p>Burn Time: {product.burnTime}</p>
                  {product.category && <p>Category: {product.category}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}