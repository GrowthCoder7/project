import React from 'react';

const products = [
  {
    id: 1,
    name: 'Vanilla & Amber',
    price: 45,
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Cedar & Sage',
    price: 48,
    image: 'https://images.unsplash.com/photo-1596435163709-b374538c98c4?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Lavender Dreams',
    price: 42,
    image: 'https://images.unsplash.com/photo-1608181831718-c9ffd8728e95?auto=format&fit=crop&q=80',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Bestselling Fragrances</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-neutral-900 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Quick View
                </button>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-neutral-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}