import React from 'react'
import Rating from './OnlyReting'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { IoIosStar, IoMdStar } from 'react-icons/io'
import clientImg from '../../assets/ProductView/unsplash_mEZ3PoFGs_k.png' 


export const RetingAndReview = () => {
  return (
    <>
    


    <div className="bg-white">

    <div className=" md:flex flex-wrap lg:gap-18.75 items-center md:pl-12">
        <div>
            <h3 className='text-[#3D3D3F] font-medium font-poppins text-[20px]'>Customer reviews</h3>
         <div className="flex gap-2 mt-2.5 items-center">
               <div className=" flex gap-1 items-center">
                <FaStar className='text-[#FFB340]'/>
                <FaStar className='text-[#FFB340]'/>
                <FaStar className='text-[#FFB340]'/>
                <FaStar className='text-[#FFB340]'/>
                <FaStarHalfAlt className='text-[#FFB340]'/>
            </div>
            <h3 className=' font-normal font-poppins text-[15px] text-[#3D3D3F]'>4.6 out of 5</h3>
         </div>
        </div>
        <Rating />

        <div className="">
            <button className=' text-[14px] font-poppins font-medium text-white px-12 cursor-pointer py-2.5 bg-[#0198E9] rounded-[5px]'>Write a Review</button>
        </div>

    </div>

    <h3 className=' pb-5 md:pl-12 font-medium font-poppins text-[24px] text-[#333333] mt-8.75'>Reviews (4)</h3>

    <hr  className='text-[#F1F1F1] py-5'/>

    <div className="md:pl-12">
        <div className=" mt-7.5 border-b border-[#F1F1F1] pb-7.5">
        <div className=" md:flex gap-4 items-center">
            <img src={clientImg} alt="img" />
            <div className=" mt-4 md:mt-0">
                <h3 className='text-[#383838] font-poppins font-medium text-[18px]'>Vanille</h3>
                <div className="flex flex-wrap gap-4 items-center mt-2">
                    <span className='text-[#636363] font-poppins font-normal text-[18px]'>5.0</span>
                    <div className="flex gap-1 items-center">
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                    </div>
                    <p className='text-[#A7A7A7] font-poppins font-normal text-[18px]'>1 Month Ago</p>
                </div>
            </div>
        </div>
        <p className=' font-normal font-poppins sm:text-[18px] text-[#383838] mt-2 sm:mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div className=" mt-7.5 border-b border-[#F1F1F1] pb-7.5">
        <div className=" md:flex gap-4 items-center">
            <img src={clientImg} alt="img" />
            <div className=" mt-4 md:mt-0">
                <h3 className='text-[#383838] font-poppins font-medium text-[18px]'>Vanille</h3>
                <div className="flex flex-wrap gap-4 items-center mt-2">
                    <span className='text-[#636363] font-poppins font-normal text-[18px]'>5.0</span>
                    <div className="flex gap-1 items-center">
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                        <IoMdStar className='text-[#FFB340] text-[24px]'/>
                    </div>
                    <p className='text-[#A7A7A7] font-poppins font-normal text-[18px]'>1 Month Ago</p>
                </div>
            </div>
        </div>
        <p className=' font-normal font-poppins sm:text-[18px] text-[#383838] mt-2 sm:mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
   
    </div>

    <div className="md:pl-12 pb-15 mt-17.5">
        <h3 className='text-[#383838] font-semibold font-poppins text-[24px]'>Add Your Review</h3>
        <p className='text-[#A7A7A7] mt-4 font-poppins font-normal text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
        <form action="">
            <div className="mt-8">
                <label className='text-[#383838] font-medium font-poppins text-[18px] block' htmlFor="">Name *</label>
                <input type="text" className='lg:w-193.75 w-full border rounded-[5px] mt-4 h-15 border-[#A7A7A7]' />
            </div> 
            <div className="mt-8">
                <label className='text-[#383838] font-medium font-poppins text-[18px] block' htmlFor="">Email *</label>
                <input type="email" className='lg:w-193.75 w-full border rounded-[5px] mt-4 h-15 border-[#A7A7A7]' />
            </div>
            <div className="mt-8">
                <label className='text-[#383838] font-medium font-poppins text-[18px] block' htmlFor="">Review *</label>
                <textarea name="" id="" className='lg:w-193.75 w-full border rounded-[5px] mt-4 h-29.75 border-[#A7A7A7]'></textarea>
            </div>

            <div className=" flex gap-4 items-center my-10">
                <span className='text-[#383838] font-medium font-poppins text-[18px]'>Reting</span>
                <div className="flex gap-1 items-center">
                    <IoIosStar className='text-[#FFB340] text-[32px]'/>
                    <IoIosStar className='text-[#FFB340] text-[32px]'/>
                    <IoIosStar className='text-[#FFB340] text-[32px]'/>
                    <IoIosStar className='text-[#FFB340] text-[32px]'/>
                    <IoIosStar className='text-[#A7A7A7] text-[32px]'/>
                </div>
            </div>
            <button className='text-white px-14.25 py-4 bg-[#0198E9] rounded-[5px] font-medium font-poppins text-[18px] cursor-pointer'>Submit </button>
        </form>
    </div>

    </div>
    
    </>
  )
}
