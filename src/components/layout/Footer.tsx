// import { Facebook, Instagram, Twitter } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import NewsletterForm from '../newsletter/NewsletterForm';

// export default function Footer() {
//   return (
//     <footer id="footer" className="bg-brown-900 text-brown-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           <div>
//             <Link to="/" className="font-serif text-2xl mb-6 block">Candlings</Link>
//             <p className="text-brown-50/80">
//               Handcrafted luxury candles for moments of pure serenity.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-medium mb-4">Shop</h4>
//             <h1 className="font-serif text-2xl mb-4 text-white block">Pages</h1>
//             <ul className="space-y-2">
//               <li><Link to="/collections" className="text-brown-50/80 hover:text-brown-50">Collections</Link></li>
//               <li><Link to="/about" className="text-brown-50/80 hover:text-brown-50">About us</Link></li>
//               <li><Link to="/contact" className="text-brown-50/80 hover:text-brown-50">Contact</Link></li>
//               <li><Link to="/collections" className="text-brown-50/80 hover:text-brown-50">Bulk Order Enquiry</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-medium mb-4">Company</h4>
//             <h1 className="font-serif text-2xl mb-4 text-white block">Policies</h1>
//             <ul className="space-y-2">
//               <li><Link to="/terms" className="text-brown-50/80 hover:text-brown-50">Terms & Conditions</Link></li>
//               <li><Link to="/privacy" className="text-brown-50/80 hover:text-brown-50">Privacy Policy</Link></li>
//               <li><Link to="/refund" className="text-brown-50/80 hover:text-brown-50">Refund & Return policy</Link></li>
//               <li><Link to="/shipping" className="text-brown-50/80 hover:text-brown-50">Shipping Policy</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-medium mb-4">Newsletter</h4>
//             <p className="text-brown-50/80 mb-4">
//               Subscribe to receive updates, access to exclusive deals, and more.
//             </p>
//             <NewsletterForm />
//           </div>
//         </div>

//         <div className="border-t border-brown-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-brown-50/80 text-sm">
//             © {new Date().getFullYear()} Candlings. All rights reserved.
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="text-brown-50/80 hover:text-brown-50">
//               <Facebook className="w-5 h-5" />
//             </a>
//             <a href="https://www.instagram.com/candlingsbydishane/" className="text-brown-50/80 hover:text-brown-50">
//               <Instagram className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-brown-50/80 hover:text-brown-50">
//               <Twitter className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     <Footer/>
//   );
// }

import React from 'react';
import { Facebook, Instagram, Twitter ,} from 'lucide-react';
import { FaWhatsapp, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';
import NewsletterForm from '../newsletter/NewsletterForm';

export default function Footer() {
  return (
    <footer id="footer" className="bg-brown-900 text-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="font-serif text-2xl mb-6 block">Candlings</Link>
            <p className="text-brown-50/80">
              Handcrafted luxury candles for moments of pure serenity.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <h1 className="font-serif text-2xl mb-4 text-white block">Pages</h1>
            <ul className="space-y-2">
              <li><Link to="/collections" className="text-brown-50/80 hover:text-brown-50">Collections</Link></li>
              <li><Link to="/about" className="text-brown-50/80 hover:text-brown-50">About us</Link></li>
              <li><Link to="/contact" className="text-brown-50/80 hover:text-brown-50">Contact</Link></li>
              <li><Link to="/bulk-order" className="text-brown-50/80 hover:text-brown-50">Bulk Order Enquiry</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <h1 className="font-serif text-2xl mb-4 text-white block">Policies</h1>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-brown-50/80 hover:text-brown-50">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-brown-50/80 hover:text-brown-50">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-brown-50/80 hover:text-brown-50">Refund & Return policy</Link></li>
              <li><Link to="/shipping" className="text-brown-50/80 hover:text-brown-50">Shipping Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-brown-50/80 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <NewsletterForm />
          </div>
        </div>
        
        <div className="border-t border-brown-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brown-50/80 text-sm">
            © {new Date().getFullYear()} Candlings. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-brown-50/80 hover:text-brown-50">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/candlingsbydishane/" className="text-brown-50/80 hover:text-brown-50">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/message/RUUJK4FNVNT2A1" className="text-brown-50/80 hover:text-brown-50">
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a href="https://pin.it/5RAPS7c30" className="text-brown-50/80 hover:text-brown-50">
              <FaPinterest className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}