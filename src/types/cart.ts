import { Product } from './index';

export interface CartItemType {
  product: Product;
  quantity: number;
}

export interface CartStore {
  items: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  moveToWishlist: (productId: number) => void;
  updateQuantity?: (productId: number,quantity: number) => void;
}