import { create } from 'zustand';
import { WishlistStore } from '../types/wishlist';
import { Product } from '../types';
import { storeEvents } from './events';

export const useWishlistStore = create<WishlistStore>((set) => {
  // Subscribe to store events
  storeEvents.subscribe((event) => {
    if (event.type === 'MOVE_TO_WISHLIST') {
      set((state) => ({
        items: [...state.items, event.payload]
      }));
    }
  });

  return {
    items: [],
    addToWishlist: (product) => {
      set((state) => ({
        items: state.items.some(item => item.id === product.id)
          ? state.items
          : [...state.items, product]
      }));
    },
    removeFromWishlist: (productId) => {
      set((state) => ({
        items: state.items.filter(item => item.id !== productId)
      }));
    },
    moveToCart: (productId) => {
      set((state) => {
        const product = state.items.find(item => item.id === productId);
        if (product) {
          storeEvents.emit({
            type: 'MOVE_TO_CART',
            payload: product
          });
          return {
            items: state.items.filter(item => item.id !== productId)
          };
        }
        return state;
      });
    }
  };
});