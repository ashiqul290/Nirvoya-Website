import React from 'react'
import { Container } from '../../Common/Container'
import { IoIosArrowForward } from 'react-icons/io'
import categoryicon1 from '../../assets/Category/icon.png'
import categoryicon2 from '../../assets/Category/Frame.png'
import categoryicon3 from '../../assets/Category/Toys 2.png'
import categoryicon4 from '../../assets/Category/Icon (1).png'
import categoryicon5 from '../../assets/Category/Group (1).png'
import categoryicon6 from '../../assets/Category/Group (2).png'
import categoryicon7 from '../../assets/Category/Group (3).png'
import categoryicon8 from '../../assets/Category/Frame (1).png'
import categoryicon9 from '../../assets/Category/Group (4).png'
import categoryicon10 from '../../assets/Category/Group (5).png'
import categoryicon11 from '../../assets/Category/Frame (2).png'
import categoryicon12 from '../../assets/Category/Group (6).png'
import categoryicon13 from '../../assets/Category/Frame (1).png'
import categoryicon14 from '../../assets/Category/Group (4).png'
import categoryicon15 from '../../assets/Category/Group (7).png'
export const Category = () => {
    let category = [
        {
            icon : categoryicon1 ,
            name : "Health & Household"
        },
        {
            icon : categoryicon2 ,
            name : "Kids Fashion"
        },
        {
            icon : categoryicon3 ,
            name : "Toys"
        },
        {
            icon : categoryicon4 ,
            name : "Groceries"
        },
        {
            icon : categoryicon5 ,
            name : "Home & Lifestyle"
        },
        {
            icon : categoryicon6 ,
            name : "Men Fashion"
        },
        {
            icon : categoryicon7 ,
            name : "Women’s Fashion"
        },
        {
            icon : categoryicon8 ,
            name : "Stationary & Books"
        },
        {
            icon : categoryicon9 ,
            name : "Leather Goods"
        },
        {
            icon : categoryicon10 ,
            name : "Jewelleries "
        },
        {
            icon : categoryicon11 ,
            name : "Watches"
        },
        {
            icon : categoryicon12 ,
            name : "Men Fashion"
        },
        {
            icon : categoryicon13 ,
            name : "Tools & Hardware"
        },
        {
            icon : categoryicon14 ,
            name : "Pet Supplies"
        },
        {
            icon : categoryicon15 ,
            name : "Seasonal"
        },
    ]
  return (
    <>
    <div className="mt-12.5 pb-11.25 px-5 xl:px-0">
        <Container>
            <div className="">
                <h3 className=' text-[26px] font-poppins font-medium text-[#383838]'>Category</h3>
                <div className=" mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {
                       category.map((item)=>(

                    <div className=" flex items-center max-w-67.5 justify-between pl-4.75 py-4 pr-2 bg-white shadow-[0_0_15px] shadow-black/10 rounded-[5px] cursor-pointer">
                       <div className=" flex gap-2.5 items-center">
                         <img src={item.icon} alt="icon" />
                        <h2 className=' font-poppins text-[16px] font-normal text-[#394146]'>{item.name}</h2>
                       </div>
                       <IoIosArrowForward className=' text-[#999999]  text-xl' />
                    </div>
                       )) 
                    }
                </div>
            </div>
        </Container>
    </div>
    
    </>
  )
}
