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
//     <section className="relative py-16 md:py-20 bg-gradient-to-br from-rose-50 via-amber-50 to-neutral-50 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute -top-16 -left-16 w-64 h-64 md:w-96 md:h-96 bg-amber-100/30 rounded-full blur-3xl" />
//       <motion.div
//         className="absolute top-1/2 left-1/3 w-48 h-48 bg-rose-100/50 rounded-full blur-xl"
//         animate={{
//           scale: [1, 1.2, 1],
//           rotate: [0, 15, -15, 0],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: 'mirror',
//         }}
//       />
//       <motion.svg
//         className="absolute bottom-8 right-8 w-40 h-40 opacity-70"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.6, 1, 0.6],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Number.POSITIVE_INFINITY,
//         }}
//       >
//         <path d="M12 2C9.29 2 6.63 4.73 5.5 7.5c-.65 1.6.35 3 1.63 3 .99 0 1.87-.87 1.87-2 0-.7-.37-1.5-.37-1.5s2.13 1.37 2.37 4.5c.12 1.49.51 3.12 1.87 4.5M12 22c3 0 5.5-2.29 5.5-5.5S15 10 15 10s2.5 3 2.5 6.5" />
//       </motion.svg>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-serif mb-4 text-neutral-900">
//             Our Collections
//           </h2>
//           <p className="text-neutral-600 text-base">
//             Discover our carefully curated collections, each telling its own unique story through scent.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {mainCategories.map((category, index) => (
//             <motion.div
//               key={category.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.2,
//               }}
//               className="group"
//             >
//               <Link
//                 to={`/collections?category=${category.id}`}
//                 className="block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="relative h-72 md:h-80 lg:h-96 w-full overflow-hidden">
//                   <img
//                     src={`${
//                       category.id === 'Shot Glass Collection' ? candle1 :
//                       category.id === 'Classic Collection' ? candle2 :
//                       category.id === 'Premium Collection' ? candle4 :
//                       candle4
//                     }`}
//                     alt={category.name}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
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

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/categories';
import candle1 from '../../assets/images/candle1.jpg';
import candle2 from '../../assets/images/candle2.jpg';
import candle4 from '../../assets/images/candle4.jpg';

export default function Collections() {
  const mainCategories = categories.slice(0, 4);

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-amber-50 via-amber-100 to-rose-100 overflow-hidden">
      {/* Background Flames */}
      <motion.div
        className="absolute top-1/4 left-10 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 0.6, 0.8],
          rotate: [0, 15, -15, 0],
          transition: {
            duration: 10,
            repeat: Infinity,
          },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-60 h-60 bg-red-200/40 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0.5, 0.7],
          rotate: [0, -10, 10, 0],
          transition: {
            duration: 12,
            repeat: Infinity,
          },
        }}
      />
      <motion.div
        className="absolute inset-center w-32 h-32 bg-yellow-100/40 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
          transition: {
            duration: 8,
            repeat: Infinity,
          },
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif mb-4 text-neutral-900"
          >
            Our Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-600 text-base"
          >
            Discover our carefully curated collections, each telling its own unique story through scent.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {mainCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="group"
            >
              <Link
                to={`/collections?category=${category.id}`}
                className="block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-72 md:h-96 w-full overflow-hidden">
                  <img
                    src={`${
                      category.id === 'Shot Glass Collection' ? candle1 :
                      category.id === 'Classic Collection' ? candle2 :
                      category.id === 'Premium Collection' ? candle4 :
                      candle4
                    }`}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl text-white font-serif mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {category.description}
                  </p>
                  <div className="overflow-hidden">
                    <span className="inline-block transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white hover:text-neutral-900">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
