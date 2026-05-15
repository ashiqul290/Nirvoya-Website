import React from 'react'
import { Container } from '../Common/Container'
import { Banner } from '../components/Home/Banner'
import { Category } from '../components/Home/Category'
import { FlashDeals } from '../components/Home/FlashDeals'
import { FeaturedProduct } from '../components/Home/FeaturedProduct'
import BannerRes from '../Res/Home/BannerRes'

export const Home = () => {
  return (
    <>
    <div className=' bg-gray-50'>

     <Banner />
     <BannerRes />
     <Category />
     <FlashDeals />
     <FeaturedProduct />
    
    </div>
    
    </>
  )
}
