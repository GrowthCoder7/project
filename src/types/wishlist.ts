import { Product } from './index';

export interface WishlistStore {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  moveToCart: (productId: number) => void;
}