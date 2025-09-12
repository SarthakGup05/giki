import React from 'react'
import FeatureSection from '../gikijoyGifts/components/Features'

import GikijoyGiftSlider from '../gikijoyGifts/GikijoyGiftSlider'
import CategoryCards from '../gikijoyGifts/components/RoomFreshners'
import GiftsRouteCards from '../gikijoyGifts/components/GiftsRouteCards'

const GiftHome = () => {
  return (
    <>
    <GikijoyGiftSlider/>
    {/* <GikiJoyProductsAbout/> */}
    <GiftsRouteCards/>
    <CategoryCards/>
    
    <FeatureSection/>
    </>
  )
}

export default GiftHome