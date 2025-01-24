import React from 'react';
import { Search, ShoppingBag, Heart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="sm:hidden p-2">
              <Menu className="h-6 w-6 text-neutral-700" />
            </button>
            {/* <div className="text-2xl font-serif text-neutral-900 ml-2 sm:ml-0">Candlings</div> */}
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <a href="/" className="text-neutral-700 hover:text-neutral-900">Home</a>
            <a href="/collections" className="text-neutral-700 hover:text-neutral-900">Collections</a>
            <a href="/about" className="text-neutral-700 hover:text-neutral-900">About</a>
            <a href="/contact" className="text-neutral-700 hover:text-neutral-900">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-5 w-5 text-neutral-700" />
            </button>
            <button className="p-2">
              <Heart className="h-5 w-5 text-neutral-700" />
            </button>
            <button className="p-2">
              <ShoppingBag className="h-5 w-5 text-neutral-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}