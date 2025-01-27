// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { categories } from '../../data/categories';
// import candle1 from '../../assets/images/candle1.jpg';
// import candle2 from '../../assets/images/candle2.jpg';
// import candle4 from '../../assets/images/candle4.jpg';

// export default function Collections() {
//   const mainCategories = categories.slice(0, 4);

//   return (
//     <section className="relative py-16 md:py-20 bg-gradient-to-b from-amber-50 via-amber-100 to-rose-100 overflow-hidden">
//       {/* Background Flames */}
//       <motion.div
//         className="absolute top-1/4 left-10 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.8, 0.6, 0.8],
//           rotate: [0, 15, -15, 0],
//           transition: {
//             duration: 10,
//             repeat: Infinity,
//           },
//         }}
//       />
//       <motion.div
//         className="absolute bottom-1/4 right-10 w-60 h-60 bg-red-200/40 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.7, 0.5, 0.7],
//           rotate: [0, -10, 10, 0],
//           transition: {
//             duration: 12,
//             repeat: Infinity,
//           },
//         }}
//       />
//       <motion.div
//         className="absolute inset-center w-32 h-32 bg-yellow-100/40 rounded-full blur-xl"
//         animate={{
//           scale: [1, 1.5, 1],
//           opacity: [0.5, 0.8, 0.5],
//           transition: {
//             duration: 8,
//             repeat: Infinity,
//           },
//         }}
//       />

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-4xl font-serif mb-4 text-neutral-900"
//           >
//             Our Collections
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-neutral-600 text-base"
//           >
//             Discover our carefully curated collections, each telling its own unique story through scent.
//           </motion.p>
//         </div>

//         <div className="grid sm:grid-cols-2 gap-8">
//           {mainCategories.map((category, index) => (
//             <motion.div
//               key={category.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.2,
//               }}
//               className="group"
//             >
//               <Link
//                 to={`/collections?category=${category.id}`}
//                 className="block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <div className="relative h-72 md:h-96 w-full overflow-hidden">
//                   <img
//                     src={`${
//                       category.id === 'Shot Glass Collection' ? candle1 :
//                       category.id === 'Classic Collection' ? candle2 :
//                       category.id === 'Premium Collection' ? candle4 :
//                       candle4
//                     }`}
//                     alt={category.name}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                   <h3 className="text-2xl text-white font-serif mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     {category.name}
//                   </h3>
//                   <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
//                     {category.description}
//                   </p>
//                   <div className="overflow-hidden">
//                     <span className="inline-block transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white hover:text-neutral-900">
//                       Explore Collection
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { products } from '../../data/products';
// import ProductCard from '../ui/ProductCard';

// const categories = [
//   'Shot Glass Collection',
//   'Classic Collection',
//   'Premium Collection',
//   'Signature Collection',
//   'Combos',
// ];

// export default function Collections() {
//   const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

//   useEffect(() => {
//     // Filter products based on selected category
//     const filtered = products.filter((product) => product.category === selectedCategory);
//     setFilteredProducts(filtered.slice(0, 4)); // Display only 4 products
//   }, [selectedCategory]);

//   return (
//     <div className="px-4 py-8">
//       {/* Heading */}
//       <h1 className="text-center text-3xl font-semibold mb-6 tracking-wide">Our Collections</h1>

//       {/* Category Buttons */}
//       <div className="flex justify-center flex-wrap gap-4 mb-8">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-3 py-1 md:px-4 md:py-2 border rounded-lg text-sm font-medium transition-all 
//               ${selectedCategory === category ? 'bg-brown-800 text-white' : 'bg-gray-200 text-gray-600'}
//               hover:bg-brown-400 hover:text-white`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const categories = [
  'Shot Glass Collection',
  'Classic Collection',
  'Premium Collection',
  'Signature Collection',
  'Combos',
];

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    // Filter products based on selected category
    const filtered = products.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filtered.slice(0, 4)); // Display only 4 products
  }, [selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10 my-3">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl mt-5 font-serif text-center mb-10 md:mb-14 text-neutral-800">
        Our Collections
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2.5 py-1.5 md:px-3 md:py-2 border rounded-md text-xs md:text-sm font-medium transition-all 
              ${selectedCategory === category ? 'bg-brown-800 text-white' : 'bg-gray-200 text-gray-600'}
              hover:bg-brown-400 hover:text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="w-full h-auto">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
