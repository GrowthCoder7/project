// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../data/products";
// import { useCartStore } from "../store/useCartStore";
// import { useWishlistStore } from "../store/useWishlistStore";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import Particles from "react-tsparticles";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => String(p.id) === id);
//   const addToCart = useCartStore((state) => state.addToCart);
//   const addToWishlist = useWishlistStore((state) => state.addToWishlist);

//   const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
//   const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
//         Product not found
//       </div>
//     );
//   }

//   const toggleDescription = () => {
//     setIsDescriptionOpen(!isDescriptionOpen);
//   };
//   const toggleInfo = () => {
//     setIsAdditionalInfoOpen(!isAdditionalInfoOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Interactive Background */}
//       <Particles
//         options={{
//           background: {
//             color: { value: "#ffffff" },
//           },
//           particles: {
//             number: { value: 50 },
//             size: { value: 3 },
//             move: { enable: true, speed: 1 },
//             opacity: { value: 0.5 },
//             links: { enable: true, color: "#d4a373" },
//           },
//         }}
//         className="absolute inset-0 z-0"
//       />
//       <div className="relative max-w-6xl mx-auto py-12 px-4 md:px-8 z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start space-y-8 md:space-y-0">
//           {/* Product Image */}
//           <div className="relative">
//             <img
//               src={product.images[0]}
//               alt={product.name}
//               className="w-full rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
//             />
//             <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//           </div>

//           {/* Product Details */}
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
//               {product.name}
//             </h1>
//             <p className="text-sm text-gray-500 mt-2">
//               Category: {product.category}
//             </p>
//             <div className="mt-4">
//               <span className="text-3xl font-semibold text-amber-700">
//                 ₹{product.price}
//               </span>
//               {product.discountedPrice && (
//                 <span className="ml-3 text-sm text-gray-400 line-through">
//                   ₹{product.discountedPrice}
//                 </span>
//               )}
//             </div>

//             {/* Add to Cart and Wishlist Buttons */}
//             <div className="flex flex-wrap gap-4 mt-8">
//               <button
//                 onClick={() => addToCart(product)}
//                 className="px-6 py-3 bg-amber-700 text-white font-medium rounded-lg shadow hover:bg-amber-800 transition-all w-full md:w-auto"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => addToWishlist(product)}
//                 className="px-6 py-3 border border-amber-700 text-amber-700 font-medium rounded-lg shadow hover:bg-amber-700 hover:text-white transition-all w-full md:w-auto"
//               >
//                 Add to Wishlist
//               </button>
//             </div>

//             {/* Description with Toggle */}
//             <div className="mt-10">
//               <button
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-800 border-b border-gray-200 pb-3"
//                 onClick={toggleDescription}
//               >
//                 <span>Description</span>
//                 {isDescriptionOpen ? (
//                   <ChevronUp className="w-5 h-5 text-gray-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-gray-600" />
//                 )}
//               </button>
//               {isDescriptionOpen && (
//                 <p className="mt-4 text-gray-600 leading-relaxed">
//                   {product.description}
//                 </p>
//               )}
//             </div>

//             {/* Additional Information */}
//             <div className="mt-10">
//               <button
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-800 border-b border-gray-200 pb-3"
//                 onClick={toggleInfo}
//               >
//                 <span>Additional Information</span>
//                 {isAdditionalInfoOpen ? (
//                   <ChevronUp className="w-5 h-5 text-gray-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-gray-600" />
//                 )}
//               </button>
//               {isAdditionalInfoOpen && (
//                 <p className="mt-4 text-gray-600 leading-relaxed">
//                   {product.description}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../data/products";
// import { useCartStore } from "../store/useCartStore";
// import { useWishlistStore } from "../store/useWishlistStore";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import Particles from "react-tsparticles";
// import Footer from "../components/layout/Footer"; // Import your existing Footer component

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => String(p.id) === id);
//   const addToCart = useCartStore((state) => state.addToCart);
//   const addToWishlist = useWishlistStore((state) => state.addToWishlist);

//   const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
//   const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);
//   const [selectedSize, setSelectedSize] = useState(product?.sizes[0]); // Default to the first size
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
//         Product not found
//       </div>
//     );
//   }

//   const toggleDescription = () => {
//     setIsDescriptionOpen(!isDescriptionOpen);
//   };
//   const toggleInfo = () => {
//     setIsAdditionalInfoOpen(!isAdditionalInfoOpen);
//   };

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleAddToCart = () => {
//     const isBigSize =
//       product.sizes[1] && selectedSize === product.sizes[1];

//     addToCart({
//       ...product,
//       price: isBigSize ? product.bigPrice : product.price,
//       discountedPrice: isBigSize
//         ? product.bigDiscountedPrice
//         : product.discountedPrice,
//       selectedSize,
//     });
//   };

//   return (
//     <div className="relative">
//       {/* Interactive Background */}
//       <Particles
//         options={{
//           background: {
//             color: { value: "#ffffff" },
//           },
//           particles: {
//             number: { value: 50 },
//             size: { value: 3 },
//             move: { enable: true, speed: 1 },
//             opacity: { value: 0.5 },
//             links: { enable: true, color: "#d4a373" },
//           },
//         }}
//         className="absolute inset-0 z-0"
//       />
//       <div className="relative max-w-6xl mx-auto py-12 px-4 md:px-8 z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start space-y-8 md:space-y-0">
//           {/* Product Image */}
//           <div className="relative">
//             <img
//               src={product.images[currentImageIndex]}
//               alt={product.name}
//               className="w-full rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
//             />
//             {/* Image Navigation */}
//             <button
//               onClick={handlePrevImage}
//               className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//             >
//               {"<"}
//             </button>
//             <button
//               onClick={handleNextImage}
//               className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//             >
//               {">"}
//             </button>
//           </div>

//           {/* Product Details */}
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
//               {product.name}
//             </h1>
//             <p className="text-sm text-gray-500 mt-2">
//               Category: {product.category}
//             </p>
//             {/* Sizes */}
//             <div className="mt-4">
//               <span className="text-lg font-semibold text-gray-600">
//                 Available Sizes:
//               </span>
//               <div className="flex gap-2 mt-2">
//                 {product.sizes.map((size, index) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 rounded-md ${
//                       selectedSize === size
//                         ? "bg-amber-700 text-white"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Price */}
//             <div className="mt-4">
//               <span className="text-3xl font-semibold text-amber-700">
//                 ₹
//                 {selectedSize === product.sizes[1]
//                   ? product.bigPrice
//                   : product.price}
//               </span>
//               {selectedSize === product.sizes[1]
//                 ? product.bigDiscountedPrice && (
//                     <span className="ml-3 text-sm text-gray-400 line-through">
//                       ₹{product.bigDiscountedPrice}
//                     </span>
//                   )
//                 : product.discountedPrice && (
//                     <span className="ml-3 text-sm text-gray-400 line-through">
//                       ₹{product.discountedPrice}
//                     </span>
//                   )}
//             </div>

//             {/* Add to Cart and Wishlist Buttons */}
//             <div className="flex flex-wrap gap-4 mt-8">
//               <button
//                 onClick={handleAddToCart}
//                 className="px-6 py-3 bg-amber-700 text-white font-medium rounded-lg shadow hover:bg-amber-800 transition-all w-full md:w-auto"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => addToWishlist(product)}
//                 className="px-6 py-3 border border-amber-700 text-amber-700 font-medium rounded-lg shadow hover:bg-amber-700 hover:text-white transition-all w-full md:w-auto"
//               >
//                 Add to Wishlist
//               </button>
//             </div>

//             {/* Description with Toggle */}
//             <div className="mt-10">
//               <button
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-800 border-b border-gray-200 pb-3"
//                 onClick={toggleDescription}
//               >
//                 <span>Description</span>
//                 {isDescriptionOpen ? (
//                   <ChevronUp className="w-5 h-5 text-gray-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-gray-600" />
//                 )}
//               </button>
//               {isDescriptionOpen && (
//                 <p className="mt-4 text-gray-600 leading-relaxed">
//                   {product.description}
//                 </p>
//               )}
//             </div>

//             {/* Additional Information */}
//             <div className="mt-10">
//               <button
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-800 border-b border-gray-200 pb-3"
//                 onClick={toggleInfo}
//               >
//                 <span>Additional Information</span>
//                 {isAdditionalInfoOpen ? (
//                   <ChevronUp className="w-5 h-5 text-gray-600" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-gray-600" />
//                 )}
//               </button>
//               {isAdditionalInfoOpen && (
//                 <div className="mt-4 text-gray-600 leading-relaxed">
//                   <p>Dimensions: {`${product.length}x${product.width}x${product.height} cm`}</p>
//                   <p>Burn Time: {product.burnTime}</p>
//                   <p>Top Notes: {product.fragranceNotes.topNotes.join(", ")}</p>
//                   <p>Mid Notes: {product.fragranceNotes.midNotes.join(", ")}</p>
//                   <p>Base Notes: {product.fragranceNotes.baseNotes.join(", ")}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";
import { ChevronDown, ChevronUp } from "lucide-react";
import Particles from "react-tsparticles"; // Import your existing Footer component

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]); // Default to the first size
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Product not found
      </div>
    );
  }

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };
  const toggleInfo = () => {
    setIsAdditionalInfoOpen(!isAdditionalInfoOpen);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = () => {
    const isBigSize =
      product.sizes[1] && selectedSize === product.sizes[1];

    addToCart({
      ...product,
      price: isBigSize ? product.bigPrice : product.price,
      discountedPrice: isBigSize
        ? product.bigDiscountedPrice
        : product.discountedPrice,
      selectedSize,
    });
  };

  const handleAddToWishlist = () => {
    const isBigSize =
      product.sizes[1] && selectedSize === product.sizes[1];

    addToWishlist({
      ...product,
      price: isBigSize ? product.bigPrice : product.price,
      discountedPrice: isBigSize
        ? product.bigDiscountedPrice
        : product.discountedPrice,
      selectedSize,
    });
  };

  return (
    <div className="relative">
      {/* Interactive Background */}
      <Particles
        options={{
          background: {
            color: { value: "#ffffff" },
          },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
            links: { enable: true, color: "#d4a373" },
          },
        }}
        className="absolute inset-0 z-0"
      />
      <div className="relative max-w-4xl mx-auto py-8 px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start space-y-6 md:space-y-0">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
            {/* Image Navigation */}
            <button
              onClick={handlePrevImage}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
              {"<"}
            </button>
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
              {">"}
            </button>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Category: {product.category}
            </p>
            {/* Sizes */}
            <div className="mt-4">
              <span className="text-lg font-semibold text-gray-600">
                Available Sizes:
              </span>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      selectedSize === size
                        ? "bg-amber-700 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mt-4">
              <span className="text-2xl font-semibold text-amber-700">
                ₹
                {selectedSize === product.sizes[1]
                  ? product.bigPrice
                  : product.price}
              </span>
              {selectedSize === product.sizes[1]
                ? product.bigDiscountedPrice && (
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      ₹{product.bigDiscountedPrice}
                    </span>
                  )
                : product.discountedPrice && (
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      ₹{product.discountedPrice}
                    </span>
                  )}
            </div>

            {/* Add to Cart and Wishlist Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="px-5 py-2 bg-amber-700 text-white font-medium rounded-lg shadow hover:bg-amber-800 transition-all w-full md:w-auto"
              >
                Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className="px-5 py-2 border border-amber-700 text-amber-700 font-medium rounded-lg shadow hover:bg-amber-700 hover:text-white transition-all w-full md:w-auto"
              >
                Add to Wishlist
              </button>
            </div>

            {/* Description with Toggle */}
            <div className="mt-6">
              <button
                className="flex items-center justify-between w-full text-lg font-medium text-gray-800 border-b border-gray-200 pb-3"
                onClick={toggleDescription}
              >
                <span>Description</span>
                {isDescriptionOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {isDescriptionOpen && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Additional Information */}
            <div className="mt-6">
              <button
                className="flex items-center justify-between w-full text-lg font-medium text-gray-800 border-b border-gray-200 pb-3"
                onClick={toggleInfo}
              >
                <span>Additional Information</span>
                {isAdditionalInfoOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {isAdditionalInfoOpen && (
                <div className="mt-4 text-gray-600 leading-relaxed">
                  <p>Dimensions: {`${product.length}x${product.width}x${product.height} cm`}</p>
                  <p>Burn Time: {product.burnTime}</p>
                  <p>Top Notes: {product.fragranceNotes.topNotes.join(", ")}</p>
                  <p>Mid Notes: {product.fragranceNotes.midNotes.join(", ")}</p>
                  <p>Base Notes: {product.fragranceNotes.baseNotes.join(", ")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
