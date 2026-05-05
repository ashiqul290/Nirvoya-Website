import React from 'react'
import { Container } from '../Common/Container'
import { Banner } from '../components/Home/Banner'
import { Category } from '../components/Home/Category'
import { FlashDeals } from '../components/Home/FlashDeals'

export const Home = () => {
  return (
    <>
    <div className=' bg-gray-50'>

     <Banner />
     <Category />
     <FlashDeals />
    
    </div>
    
    </>
  )
}
