import { Product } from '../types';

type StoreEvent = {
  type: 'MOVE_TO_CART' | 'MOVE_TO_WISHLIST';
  payload: Product;
};

type Listener = (event: StoreEvent) => void;
const listeners: Listener[] = [];

export const storeEvents = {
  emit: (event: StoreEvent) => {
    listeners.forEach(listener => listener(event));
  },
  subscribe: (listener: Listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }
};