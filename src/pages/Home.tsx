import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import About from '../components/sections/About';
import Collections from '../components/sections/Collections';
import DiscountSection from '../components/ui/DiscountSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <About />
      <FeaturedProducts />
      <DiscountSection/>
    </main>
  );
}