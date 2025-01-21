import React from 'react';
import { Flame, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-6">Crafted with Passion</h2>
          <p className="text-neutral-600 leading-relaxed">
            At Candlings, we believe in the transformative power of ambiance. Each candle is handcrafted
            using the finest natural ingredients and traditional techniques passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-neutral-100 rounded-full">
              <Flame className="w-8 h-8 text-neutral-900" />
            </div>
            <h3 className="font-serif text-xl mb-4">Artisanal Quality</h3>
            <p className="text-neutral-600">
              Each candle is hand-poured using premium soy wax and natural essential oils.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-neutral-100 rounded-full">
              <Award className="w-8 h-8 text-neutral-900" />
            </div>
            <h3 className="font-serif text-xl mb-4">Sustainable Practice</h3>
            <p className="text-neutral-600">
              We're committed to eco-friendly packaging and sustainable production methods.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-neutral-100 rounded-full">
              <Heart className="w-8 h-8 text-neutral-900" />
            </div>
            <h3 className="font-serif text-xl mb-4">Made with Love</h3>
            <p className="text-neutral-600">
              Every candle is crafted with attention to detail and care for your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}