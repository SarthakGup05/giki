import React, { useRef } from 'react';

import { MangoProducts1 } from '../components/Products';
import BannerSlider from '../layout/BannerSlider';
import HowWeGrowOurMangoes from '../components/WhyGikiJoy';
import RouteCards from '../components/RouteCards';

const Home = () => {
  const productSectionRef = useRef(null);

  const scrollToProductSection = () => {
    productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <BannerSlider scrollToProductSection={scrollToProductSection} />
      
      <HowWeGrowOurMangoes />
      <div ref={productSectionRef}>
        <MangoProducts1 />
        
      </div>
    </div>
  );
};

export default Home;
