import React from 'react';


export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden">
          <img
            // src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80"
            src="/images/2.png"
            alt="Luxury candle in a cozy setting"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-neutral-900/30" />
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
            Illuminate Your Space
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Handcrafted luxury candles for moments of pure serenity
          </p>
          <button className="bg-white text-neutral-900 px-8 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-neutral-100 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}