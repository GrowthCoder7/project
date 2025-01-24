import React, { useState } from 'react';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import SearchBar from '../ui/SearchBar';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';
import logo from "../../assets/images/Logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed w-full bg-brown-50/95 backdrop-blur-sm z-50 border-b border-brown-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4">
        <div className="flex flex-col sm:flex-row items-center gap-7 py-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <button
              className="sm:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-brown-700" />
              ) : (
                <Menu className="h-6 w-6 text-brown-700" />
              )}
            </button>
            <Link to="/" className="text-2xl font-serif text-brown-900">
              <img src={logo} alt="Candlings Logo" width={250} height={155} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <SearchBar />
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-brown-700 hover:text-brown-900">
              Home
            </Link>
            <Link to="/collections" className="text-brown-700 hover:text-brown-900">
              Collections
            </Link>
            <Link to="/about" className="text-brown-700 hover:text-brown-900">
              About
            </Link>
            <Link to="/contact" className="text-brown-700 hover:text-brown-900">
              Contact
            </Link>
          </div>

          {/* Icons */}
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-4 space-y-4 bg-brown-50 border-t border-brown-200 p-4">
            <Link
              to="/"
              className="block text-brown-700 hover:text-brown-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collections"
              className="block text-brown-700 hover:text-brown-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="block text-brown-700 hover:text-brown-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-brown-700 hover:text-brown-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
