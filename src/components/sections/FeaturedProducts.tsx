// import React from 'react';
// import { products } from '../../data/products';
// import ProductCard from '../ui/ProductCard';
// import { Product } from '../../types';

// export default function FeaturedProducts() {
//   const handleQuickView = (product: Product) => {
//     // TODO: Implement quick view modal
//     console.log('Quick view:', product);
//   };

//   return (
//     <section className="py-20 bg-neutral-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-serif text-center mb-12">Bestselling Fragrances</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onQuickView={handleQuickView}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';

export default function FeaturedProducts() {
  const handleQuickView = (product: Product) => {
    // TODO: Implement quick view modal
    console.log('Quick view:', product);
  };

  // Get unique products by category
  const featuredProducts = Object.values(
    products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = product; // Add the first product from each category
      }
      return acc;
    }, {} as Record<string, Product>)
  );

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Bestselling Fragrances</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={handleQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
