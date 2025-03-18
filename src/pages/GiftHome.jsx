import React from 'react'
import FeatureSection from '../gikijoyGifts/components/Features'

import GikijoyGiftSlider from '../gikijoyGifts/GikijoyGiftSlider'
import CategoryCards from '../gikijoyGifts/components/RoomFreshners'

const GiftHome = () => {
  return (
    <>
    <GikijoyGiftSlider/>
    {/* <GikiJoyProductsAbout/> */}
    <CategoryCards/>
    <FeatureSection/>
    </>
  )
}

export default GiftHome