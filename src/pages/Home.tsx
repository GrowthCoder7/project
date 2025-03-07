import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import About from '../components/sections/About';
import Collections from '../components/sections/Collections';
import DiscountSection from '../components/ui/DiscountSection';
import Certs from '../components/sections/Certs';

export default function Home() {
  return (
    <main>
      <Hero />
      <Certs/>
      <Collections />
      <About />
      <FeaturedProducts />
      <DiscountSection/>
    </main>
  );
}