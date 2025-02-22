import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
