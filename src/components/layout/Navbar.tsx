import React from 'react';
import Logo from '../ui/Logo';
import { ShoppingBag, Heart, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import SearchBar from '../ui/SearchBar';
import { scrollToElement } from '../../utils/scrollUtils';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';

export default function Navbar() {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('footer');
  };

  return (
    <nav className="fixed w-full bg-brown-50/95 backdrop-blur-sm z-50 border-b border-brown-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 py-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <button className="sm:hidden p-2">
              <Menu className="h-6 w-6 text-brown-700" />
            </button>
            <Link to="/" className="text-2xl font-serif text-brown-900">Candlings</Link>
          </div>
          
          <SearchBar />

          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-brown-700 hover:text-brown-900">Home</Link>
            <Link to="/collections" className="text-brown-700 hover:text-brown-900">Collections</Link>
            <Link to="/about" className="text-brown-700 hover:text-brown-900">About</Link>
            <a href="#" onClick={handleContactClick} className="text-brown-700 hover:text-brown-900">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="p-2 relative"
              onClick={() => navigate('/wishlist')}
            >
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brown-900 text-brown-50 text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="p-2 relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brown-900 text-brown-50 text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}