import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from "../../assets/images/2.png"
import Hero2 from '../../assets/images/3.jpg';

export default function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: myImage,
      title: 'Artisanal Luxury Candles',
      subtitle: 'Handcrafted with love, designed for your moments of serenity'
    },
    {
      image: Hero2,
      title: 'Discover Our Collection',
      subtitle: 'Premium soy wax blended with natural essential oils'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 tracking-wider">
            {slides[currentSlide].subtitle}
          </p>
          <button 
            onClick={() => navigate('/collections')}
            className="btn-primary text-sm tracking-widest uppercase"
          >
            Explore Collection
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-16 h-0.5 transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}