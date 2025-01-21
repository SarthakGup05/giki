import React, { useRef } from 'react';

import BannerSlider from '../layout/BannerSlider';
import HowWeGrowOurMangoes from '../components/WhyGikiJoy';
import RouteCards from '../components/RouteCards';
import ProductCategoryCards from '../components/Products';
import GikijoyFarm from '../layout/AquaFarmslider';


const Home = () => {
  const productSectionRef = useRef(null);

  const scrollToProductSection = () => {
    productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <GikijoyFarm />
      
      <HowWeGrowOurMangoes />
      <div ref={productSectionRef}>
        <ProductCategoryCards/>
        
      </div>
    </div>
  );
};

export default Home;
