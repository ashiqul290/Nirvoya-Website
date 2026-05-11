import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router'

export const RoutePath = () => {
  return (
    <>
    
      <div className=" flex items-center gap-1 text-[#02344F] font-poppins font-normal text-[16px] pt-14">
           <Link to={'/'}>
           Home
           </Link>
       <div className=" flex items-center gap-1">
           <IoIosArrowForward />
            <Link to={'#'}> Men’s fashion </Link>
       </div>
            </div>
    
    
    </>
  )
}
