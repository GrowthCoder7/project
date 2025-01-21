import { create } from 'zustand';
import { CartStore } from '../types/cart';
import { storeEvents } from './events';

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return { items: [...state.items, { product, quantity: 1 }] };
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }));
  },
  clearCart: () => {
    set({ items: [] });
  },
  moveToWishlist: (productId) => {
    set((state) => {
      const item = state.items.find(item => item.product.id === productId);
      if (item) {
        storeEvents.emit({
          type: 'MOVE_TO_WISHLIST',
          payload: item.product
        });
        return {
          items: state.items.filter(i => i.product.id !== productId)
        };
      }
      return state;
    });
  }
}));