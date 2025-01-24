import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';
// import { formatPrice } from '../../utils/priceUtils';
import ProductQuickView from './ProductQuickView';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  // const { originalPrice, finalPrice, discountPercentage } = formatPrice(
  //   product.price,
  //   product.discountedPrice
  // );

  return (
    <>
      <motion.div
        className="group card overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden bg-brown-50">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brown-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brown-900/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => addToWishlist(product)}
                className="w-10 h-10 rounded-full bg-brown-50/90 flex items-center justify-center hover:bg-brown-50 transition-colors"
              >
                <Heart className="w-5 h-5 text-brown-800" />
              </button>
              <button
                onClick={() => addToCart(product)}
                className="w-10 h-10 rounded-full bg-brown-50/90 flex items-center justify-center hover:bg-brown-50 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-brown-800" />
              </button>
              <button
                onClick={() => setShowQuickView(true)}
                className="w-10 h-10 rounded-full bg-brown-50/90 flex items-center justify-center hover:bg-brown-50 transition-colors"
              >
                <Plus className="w-5 h-5 text-brown-800" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center p-6 bg-white">
          <h3 className="font-serif text-xl text-brown-900 mb-2">{product.name}</h3>
          {/* <div className="flex items-center justify-center gap-2">
            {discountPercentage > 0 && (
              <span className="text-brown-400 line-through">{originalPrice}</span>
            )}
            <span className="font-medium text-brown-800">{finalPrice}</span>
            {discountPercentage > 0 && (
              <span className="text-cream-700 text-sm">-{discountPercentage}%</span>
            )}
          </div> */}
        </div>
      </motion.div>

      <ProductQuickView
        product={product}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </>
  );
}