// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import myImage from '../../assets/images/2.png';
// import Hero2 from '../../assets/images/3.jpg';

// export default function Hero() {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slides = [
//     {
//       image: myImage,
//       title: 'Artisanal Luxury Candles',
//       subtitle: 'Handcrafted with love, designed for your moments of serenity',
//       collection: 'signature'
//     },
//     {
//       image: Hero2,
//       title: 'Discover Our Collection',
//       subtitle: 'Premium soy wax blended with natural essential oils',
//       collection: 'premium'
//     },
//   ];

//   // Handle automatic slide transitions
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   // Navigate to the previous slide
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   // Navigate to the next slide
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   // Navigate to the specific collection based on slide
//   const handleImageClick = (collection) => {
//     navigate(`/collections`, { state: { selectedCollection: collection } });
//   };

//   return (
//     <div className="relative h-screen">
//       {slides.map((slide, index) => (
//         <div 
//           key={index} 
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 -z-10'
//           }`}
//         >
//           <div 
//             className="relative h-full cursor-pointer" 
//             onClick={() => handleImageClick(slide.collection)}
//           >
//             <img 
//               src={slide.image} 
//               alt={slide.title} 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//           </div>
//         </div>
//       ))}

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//         <div className="text-center px-4 max-w-4xl mx-auto">
//           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
//             {slides[currentSlide].title}
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 mb-12 tracking-wider">
//             {slides[currentSlide].subtitle}
//           </p>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 z-30 pointer-events-none">
//         <button 
//           onClick={prevSlide} 
//           className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all pointer-events-auto"
//         >
//           &larr;
//         </button>
//         <button 
//           onClick={nextSlide} 
//           className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all pointer-events-auto"
//         >
//           &rarr;
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
//         {slides.map((_, index) => (
//           <button 
//             key={index} 
//             onClick={() => setCurrentSlide(index)} 
//             className={`w-16 h-0.5 transition-all ${
//               index === currentSlide ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import myImage from '../../assets/images/2.png';
// import Hero2 from '../../assets/images/3.jpg';

// export default function Hero() {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slides = [
//     {
//       image: myImage,
//       title: 'Artisanal Luxury Candles',
//       subtitle: 'Handcrafted with love, designed for your moments of serenity',
//       collection: 'signature'
//     },
//     {
//       image: Hero2,
//       title: 'Discover Our Collection',
//       subtitle: 'Premium soy wax blended with natural essential oils',
//       collection: 'premium'
//     },
//   ];

//   // Handle automatic slide transitions
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   // Navigate to the previous slide
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   // Navigate to the next slide
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   // Navigate to the specific collection based on slide
//   const handleImageClick = (collection) => {
//     // Force a page reload to ensure the collection selection works
//     navigate(`/collections?collection=${collection}`, { replace: true });
//   };

//   return (
//     <div className="relative h-screen overflow-hidden bg-black">
//       {slides.map((slide, index) => (
//         <div 
//           key={index} 
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//           style={{ backfaceVisibility: 'hidden' }}
//         >
//           <div 
//             className="relative h-full cursor-pointer" 
//             onClick={() => handleImageClick(slide.collection)}
//           >
//             <img 
//               src={slide.image} 
//               alt={slide.title} 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//           </div>
//         </div>
//       ))}

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//         <div className="text-center px-4 max-w-4xl mx-auto">
//           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide transition-opacity duration-500">
//             {slides[currentSlide].title}
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 mb-12 tracking-wider transition-opacity duration-500">
//             {slides[currentSlide].subtitle}
//           </p>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 z-30 pointer-events-none">
//         <button 
//           onClick={prevSlide} 
//           className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all pointer-events-auto"
//         >
//           &larr;
//         </button>
//         <button 
//           onClick={nextSlide} 
//           className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all pointer-events-auto"
//         >
//           &rarr;
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
//         {slides.map((_, index) => (
//           <button 
//             key={index} 
//             onClick={() => setCurrentSlide(index)} 
//             className={`w-16 h-0.5 transition-all pointer-events-auto ${
//               index === currentSlide ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import myImage from '../../assets/images/2.png';
// import Hero2 from '../../assets/images/3.jpg';

// export default function Hero() {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slides = [
//     {
//       image: myImage,
//       title: 'Artisanal Luxury Candles',
//       subtitle: 'Handcrafted with love, designed for your moments of serenity',
//       collection: 'signature'
//     },
//     {
//       image: Hero2,
//       title: 'Discover Our Collection',
//       subtitle: 'Premium soy wax blended with natural essential oils',
//       collection: 'premium'
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const handleImageClick = (collection: string) => {
//     navigate(`/collections?category=${collection}`);
//   };

//   return (
//     <div className="relative h-screen overflow-hidden bg-black">
//       {slides.map((slide, index) => (
//         <div 
//           key={index} 
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//           style={{ backfaceVisibility: 'hidden' }}
//         >
//           <div 
//             className="relative h-full cursor-pointer" 
//             onClick={() => handleImageClick(slide.collection)}
//           >
//             <img 
//               src={slide.image} 
//               alt={slide.title} 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//           </div>
//         </div>
//       ))}

//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
//         <div className="text-center px-4 max-w-4xl mx-auto">
//           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide transition-opacity duration-500">
//             {slides[currentSlide].title}
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 mb-12 tracking-wider transition-opacity duration-500">
//             {slides[currentSlide].subtitle}
//           </p>
//         </div>
//       </div>

//       <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 z-30 pointer-events-none">
//         <button 
//           onClick={prevSlide} 
//           className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all pointer-events-auto"
//         >
//           &larr;
//         </button>
//         <button 
//           onClick={nextSlide} 
//           className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all pointer-events-auto"
//         >
//           &rarr;
//         </button>
//       </div>

//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
//         {slides.map((_, index) => (
//           <button 
//             key={index} 
//             onClick={() => setCurrentSlide(index)} 
//             className={`w-16 h-0.5 transition-all pointer-events-auto ${
//               index === currentSlide ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from '../../assets/images/2.png';
import Hero2 from '../../assets/images/3.jpg';

export default function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: myImage,
      title: 'Artisanal Luxury Candles',
      subtitle: 'Handcrafted with love, designed for your moments of serenity',
      collection: 'signature'
    },
    {
      image: Hero2,
      title: 'Discover Our Collection',
      subtitle: 'Premium soy wax blended with natural essential oils',
      collection: 'premium'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleImageClick = (collection: string) => {
    const params = new URLSearchParams({ category: collection });
    navigate(`/collections?${params.toString()}`);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div 
            className="relative h-full cursor-pointer" 
            onClick={() => handleImageClick(slide.collection)}
          >
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

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide transition-opacity duration-500">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 tracking-wider transition-opacity duration-500">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 z-30 pointer-events-none">
        <button 
          onClick={prevSlide} 
          className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all pointer-events-auto"
        >
          &larr;
        </button>
        <button 
          onClick={nextSlide} 
          className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all pointer-events-auto"
        >
          &rarr;
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-16 h-0.5 transition-all pointer-events-auto ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}