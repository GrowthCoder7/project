// import React, { useState } from 'react';
// import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle search bar

//   return (
//     <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Left Section */}
//           <div className="flex items-center">
//             <button className="sm:hidden p-2">
//               <Menu className="h-6 w-6 text-neutral-700" />
//             </button>
//           </div>

//           {/* Center Section */}
//           <div className="hidden sm:flex items-center space-x-8">
//             <a href="/" className="text-neutral-700 hover:text-neutral-900">
//               Home
//             </a>
//             <a href="/collections" className="text-neutral-700 hover:text-neutral-900">
//               Collections
//             </a>
//             <a href="/about" className="text-neutral-700 hover:text-neutral-900">
//               About
//             </a>
//             <a href="/contact" className="text-neutral-700 hover:text-neutral-900">
//               Contact
//             </a>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-4">
//             {/* Wishlist */}
//             <button className="p-2">
//               <Heart className="h-5 w-5 text-neutral-700" />
//             </button>

//             {/* Collapsible Search Bar */}
//             <div className="relative flex items-center">
//               {isSearchOpen ? (
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="border border-neutral-300 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring focus:ring-brown-500"
//                   />
//                   <button
//                     onClick={() => setIsSearchOpen(false)}
//                     className="p-2"
//                     aria-label="Close search"
//                   >
//                     <X className="h-5 w-5 text-neutral-700" />
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setIsSearchOpen(true)}
//                   className="p-2"
//                   aria-label="Open search"
//                 >
//                   <Search className="h-5 w-5 text-neutral-700" />
//                 </button>
//               )}
//             </div>

//             {/* Shopping Bag */}
//             <button className="p-2">
//               <ShoppingBag className="h-5 w-5 text-neutral-700" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Mobile Menu Button */}
          <button className="sm:hidden p-2">
            <Menu className="h-6 w-6 text-neutral-700" />
          </button>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-6">
            {["Home", "Collections", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            {/* Wishlist */}
            <button className="p-2">
              <Heart className="h-5 w-5 text-neutral-700 hover:text-black transition-colors" />
            </button>

            {/* Search Bar */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-neutral-300 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring focus:ring-brown-500"
                  />
                  <button onClick={() => setIsSearchOpen(false)} className="p-2">
                    <X className="h-5 w-5 text-neutral-700 hover:text-black transition-colors" />
                  </button>
                </div>
              ) : (
                <button onClick={() => setIsSearchOpen(true)} className="p-2">
                  <Search className="h-5 w-5 text-neutral-700 hover:text-black transition-colors" />
                </button>
              )}
            </div>

            {/* Shopping Bag */}
            <button className="p-2">
              <ShoppingBag className="h-5 w-5 text-neutral-700 hover:text-black transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
