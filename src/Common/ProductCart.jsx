import React from 'react'
import { FaStar } from 'react-icons/fa'
import cart from '../assets/HeaderImg/Union.png'
import productImg from '../assets/FlashDeals/Image Placeholder.png'
import { CiHeart } from 'react-icons/ci'

export const ProductCart = ({item}) => {
  return (
    <>
    
    
    <div className='w-83  border border-gray-200 rounded-[15px] bg-white p-2'>
        <div className="w-full flex justify-center rounded-[10px] h-78.25 relative bg-gray-100">
            <img src={item?.img} className=' rounded-[10px]' alt="product" />
          {
            item.discoutprice &&   <span className=' absolute top-0 left-0 px-3 py-2 text-[14px] font-semibold font-poppins bg-gradient-to-r from-[#FF7A00] to-[#FFB800] rounded-r rounded-b rounded-tl-[10px] text-white'>-{item?.discoutprice}% OFF</span>
          }
            <span className=' absolute top-5.5 right-3.5 cursor-pointer text-[23px]'><CiHeart /></span>
        </div>
       <div className=" px-2">
         <div className="flex mt-3.5 items-center gap-0.5">
            <FaStar className='text-amber-400'/>
            <FaStar className='text-amber-400'/>
            <FaStar className='text-amber-400'/>
            <FaStar className='text-amber-400'/>
            <FaStar className='text-gray-500'/>
            <span>(0)</span>
        </div>
        <h2 className=' text-[18px] font-poppins font-normal text-[#383838] leading-[120%] my-2.5'>{item?.title}</h2>
<div className=" flex justify-between items-center">
    <p className=' text-[#0970CD] font-bold text-[22px] font-poppins'>৳{item?.price}</p>
    <button className=' cursor-pointer'> <img src={cart} alt="cart" /></button>
</div>
       </div>
    </div>
    
    </>
  )
}
