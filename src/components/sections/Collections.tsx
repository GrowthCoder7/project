// import React from 'react';
// import { Link } from 'react-router-dom';
// import { categories } from '../../data/categories';
// import candle1 from '../../assets/images/candle1.jpg';
// import candle2 from '../../assets/images/candle2.jpg';
// import candle3 from '../../assets/images/candle3.jpg';
// import candle4 from '../../assets/images/candle4.jpg';

// export default function Collections() {
//   // Show only the first 4 categories (excluding combos)
//   const mainCategories = categories.slice(0, 4);

//   return (
//     <section className="py-24 bg-neutral-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-4xl font-serif mb-6">Our Collections</h2>
//           <p className="text-neutral-600">
//             Discover our carefully curated collections, each telling its own unique story through scent.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {mainCategories.map((category) => (
//             <Link
//               key={category.id}
//               to={`/collections?category=${category.id}`}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <div className="aspect-w-16 aspect-h-9 ">
//                 <img
//                   src={`${
//                     category.id === 'Shot Glass Collection' ? candle1 :
//                     category.id === 'Classic Collection' ? candle2 :
//                     category.id === 'Premium Collection' ? candle3 :
//                     candle4
//                   }`}
//                   alt={category.name}
//                   className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-8">
//                 <h3 className="text-2xl font-serif text-white mb-2">{category.name}</h3>
//                 <p className="text-white/80 mb-6">{category.description}</p>
//                 <span className="inline-flex items-center text-white border border-white px-6 py-2 rounded-full group-hover:bg-white group-hover:text-neutral-900 transition-colors">
//                   Explore Collection
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import candle1 from '../../assets/images/candle1.jpg';
import candle2 from '../../assets/images/candle2.jpg';
import candle4 from '../../assets/images/candle4.jpg';

export default function Collections() {
  // Show only the first 4 categories (excluding combos)
  const mainCategories = categories.slice(0, 4);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-6">Our Collections</h2>
          <p className="text-neutral-600">
            Discover our carefully curated collections, each telling its own unique story through scent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mainCategories.map((category) => (
            <Link
              key={category.id}
              to={`/collections?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative">
                <img
                  src={`${
                    category.id === 'Shot Glass Collection' ? candle1 :
                    category.id === 'Classic Collection' ? candle2 :
                    category.id === 'Premium Collection' ? candle4 :
                    candle4
                  }`}
                  alt={category.name}
                  className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif text-white mb-2">{category.name}</h3>
                <p className="text-white/80 mb-6">{category.description}</p>
                <span className="inline-flex items-center text-white border border-white px-6 py-2 rounded-full group-hover:bg-white group-hover:text-neutral-900 transition-colors">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
