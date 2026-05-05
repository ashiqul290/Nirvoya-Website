import React from 'react'
import { Container } from '../../Common/Container'
import img1 from '../../assets/Footer/top/Vector (5).png'
import img2 from '../../assets/Footer/top/Vector (6).png'
import img3 from '../../assets/Footer/top/Vector (7).png'
import img4 from '../../assets/Footer/top/Vector (8).png'
export const FooterTop = () => {
  return (
    <>
    <div className="py-12.5 border-b border-gray-200">
        <Container>
            <div className=" flex gap-24.75 justify-center ">
                <div className=" flex gap-4.5 items-center">
                    <img src={img1} className='w-15.25' alt="img" />
                    <div className="">
                        <h2 className='text-[#333333] font-medium text-[20px]'>FREE SHIPPING</h2>
                    <p className=' text-[#757575] font-poppins font-[16px]'>Order via Campaign</p>
                    </div>
                </div>
                <div className=" flex gap-4.5 items-center">
                    <img src={img2} className='w-12.4' alt="img" />
                    <div className="">
                        <h2 className='text-[#333333] font-medium uppercase text-[20px]'>Best Price</h2>
                    <p className=' text-[#757575] font-poppins font-[16px]'>Quality products</p>
                    </div>
                </div>
                <div className=" flex gap-4.5 items-center">
                    <img src={img3} className='w-10' alt="img" />
                    <div className="">
                        <h2 className='text-[#333333] font-medium uppercase text-[20px]'>FREE  Retern</h2>
                    <p className=' text-[#757575] font-poppins font-[16px]'>Within 7 days returns</p>
                    </div>
                </div>
                <div className=" flex gap-4.5 items-center">
                    <img src={img4} className='w-11.5' alt="img" />
                    <div className="">
                        <h2 className='text-[#333333] font-medium uppercase text-[20px]'>Secure Payment</h2>
                    <p className=' text-[#757575] font-poppins font-[16px]'>100% secure payment</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    
    </>
  )
}
