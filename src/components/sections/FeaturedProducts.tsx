// import React from 'react';
// import { products } from '../../data/products';
// import ProductCard from '../ui/ProductCard';
// import { Product } from '../../types';

// export default function FeaturedProducts() {
//   const handleQuickView = (product: Product) => {
//     console.log('Quick view:', product);
//   };
  // const featuredProducts = products.filter((product) =>
  //   [1, 5, 7, 10].includes(product.id)
  // );

//   return (
    // <section className="py-12 md:py-16 bg-gradient-to-br from-pink-50 via-neutral-100 to-amber-50 relative">
    //   {/* Decorative Light Glows */}
    //   <div className="absolute top-1/3 left-0 w-48 h-48 bg-pink-200/50 rounded-full blur-3xl opacity-40"></div>
    //   <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl opacity-40"></div>

    //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    //     <h2 className="text-3xl md:text-4xl font-serif text-center mb-10 md:mb-14 text-neutral-800">
    //       Bestselling Fragrances
    //     </h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //       {featuredProducts.map((product) => (
    //         <div
    //           className="relative group transform transition-transform duration-300 hover:scale-105"
    //         >
    //           <ProductCard
    //           key={product.id}
    //           product={product}
    //           onQuickView={handleQuickView}
    //         />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
//   );
// }

import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';

export default function FeaturedProducts() {
  const handleQuickView = (product: Product) => {
    console.log('Quick view:', product);
  };

  const featuredProducts = products.filter((product) =>
    [1, 5, 7, 10].includes(product.id)
  );

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-pink-100 via-neutral-100 to-amber-100 relative">
      {/* Decorative Light Glows */}
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-pink-200/50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10 md:mb-14 text-neutral-800">
          Bestselling Fragrances
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div>
              <ProductCard
              key={product.id}
              product={product}
              onQuickView={handleQuickView}
            />
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}