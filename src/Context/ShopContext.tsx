import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  additionalImages?: string[];
}

interface CartItem extends Product {
  quantity: number;
}

interface ShopState {
  cart: CartItem[];
  wishlist: Product[];
}

type ShopAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string };

const initialState: ShopState = {
  cart: [],
  wishlist: [],
};

const shopReducer = (state: ShopState, action: ShopAction): ShopState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        toast.info('Item already in cart');
        return state;
      }
      toast.success('Added to cart');
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      toast.success('Removed from cart');
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'ADD_TO_WISHLIST': {
      const existingItem = state.wishlist.find(item => item.id === action.payload.id);
      if (existingItem) {
        toast.info('Item already in wishlist');
        return state;
      }
      toast.success('Added to wishlist');
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }
    case 'REMOVE_FROM_WISHLIST':
      toast.success('Removed from wishlist');
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const ShopContext = createContext<{
  state: ShopState;
  dispatch: React.Dispatch<ShopAction>;
} | null>(null);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};