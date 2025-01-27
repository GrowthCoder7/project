import React from 'react';
import { Flame, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24  relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute top-0 left-10 w-40 h-40 bg-rose-200/40 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-amber-200/50 rounded-full blur-2xl opacity-30 animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
            Crafted with Passion
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            At Candlings, we believe in the transformative power of ambiance. Each candle is handcrafted
            using the finest natural ingredients and traditional techniques passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Flame className="w-10 h-10 text-neutral-900" />,
              title: 'Artisanal Quality',
              description:
                'Each candle is hand-poured using premium soy wax and natural essential oils.',
            },
            {
              icon: <Award className="w-10 h-10 text-neutral-900" />,
              title: 'Sustainable Practice',
              description:
                'We’re committed to eco-friendly packaging and sustainable production methods.',
            },
            {
              icon: <Heart className="w-10 h-10 text-neutral-900" />,
              title: 'Made with Love',
              description:
                'Every candle is crafted with attention to detail and care for your home.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center  rounded-full shadow-md">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-neutral-900 mb-4">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

