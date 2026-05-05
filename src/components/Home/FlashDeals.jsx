import React from 'react'
import { Container } from '../../Common/Container'
import { ProductCart } from '../../Common/ProductCart'
import productimg1 from '../../assets/FlashDeals/Image Placeholder.png'
import productimg2 from '../../assets/FlashDeals/Image Placeholder (1).png'
import productimg3 from '../../assets/FlashDeals/Image Placeholder (2).png'
import productimg4 from '../../assets/FlashDeals/Image Placeholder (3).png'
import { FaArrowRight } from 'react-icons/fa'
export const FlashDeals = () => {
    let products = [
        {
            id : 1,
            img : productimg1,
            title: "Headrest Executive Mesh Office Chair set",
            price: "10500",
            discoutprice: "26"
        },
        {
             id : 2,
            img : productimg2,
            title: "Women fashion dress set",
            price: "1000",
            discoutprice: "26"
        },
        {
             id : 3,
            img : productimg3,
            title: "Headrest Executive Mesh Office Chair set",
            price: "5000",
            discoutprice: "26"
        },
        {
             id : 4,
            img : productimg4,
            title: "Women black dress and red hat collections",
            price: "1000",
            discoutprice: "26"
        },
    ]
  return (
    <>
    <div className="">
        <Container>
            <div className="">
              <div className="flex justify-between items-center mb-5">
                  <h3 className=' text-[26px] font-poppins font-medium text-[#383838]'>Flash Deals</h3>
                  <button className=' flex items-center gap-2 text-[16px] font-medium text-[#757575] font-poppins cursor-pointer'>View more <FaArrowRight /> </button>
              </div>
            <div className="flex justify-between gap-6">
               {
                products.map((item)=>(
                     <ProductCart item={item} />
                ))
               }
            </div>

            </div>
        </Container>
    </div>
    
    </>
  )
}
