import React from 'react'
import { Container } from '../Common/Container'
import { Link } from 'react-router'
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'
import { RoutePath } from '../components/ProductDetails/RoutePath'
import { FaCheck, FaCheckCircle, FaFacebookF, FaHeart, FaLink, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import img from '../assets/ProductView/Image Placeholder (4).png'
import { IoStarSharp } from 'react-icons/io5'
import { ProductDiscription } from '../components/ProductDetails/ProductDiscription'
import { RetingAndReview } from '../components/ProductDetails/RetingAndReview'
import { gsap } from "gsap";


export const ProductDtails = () => {
  
      const flyAnimation = (startElement, targetSelector) => {
      const target = document.querySelector(targetSelector);
    
      if (!target || !startElement) return;
    
      const clone = startElement.cloneNode(true);
    
      const startRect = startElement.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
    
      clone.style.position = "fixed";
      clone.style.left = `${startRect.left}px`;
      clone.style.top = `${startRect.top}px`;
      clone.style.width = `${startRect.width}px`;
      clone.style.height = `${startRect.height}px`;
      clone.style.zIndex = "9999";
      clone.style.pointerEvents = "none";
    
      document.body.appendChild(clone);
    
      gsap.to(clone, {
        x: targetRect.left - startRect.left,
        y: targetRect.top - startRect.top,
        scale: 0.3,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          clone.remove();
        },
      });
    };
  let heandleWislist = (e) => {
      flyAnimation(e.currentTarget, "#wishlist-icon");
  };
  return (
    <>
        
    <div className="bg-gray-50">
      <Container>
       <div className="">
       <RoutePath />

<div className="mt-6 flex gap-27.25 mb-21">

<div className="w-169.75 h-159.75  ">
<div className=" flex justify-between">
  <div className="w-129.75 h-129.75 bg-gray-100">
    <img src={img} alt="long img" />
  </div>
<div className="">
  <div className=' text-[20px] flex justify-center py-3 cursor-pointer  hover:text-[#0198E9] duration-150'>

<IoIosArrowUp />
  </div>
  <div className="w-26  p-1">
    <img src={img} className=' bg-gray-100' alt="long img" />
  </div>
<div className="w-26  p-1">
  <img src={img} className=' bg-gray-100' alt="long img" />
</div>
<div className="w-26  p-1">
  <img src={img} className=' bg-gray-100' alt="long img" />
</div>
<div className="w-26  p-1">
  <img src={img} className=' bg-gray-100' alt="long img" />
</div>
 <div className=' text-[20px] flex justify-center py-3 cursor-pointer  hover:text-[#0198E9] duration-150'>

<IoIosArrowDown />
 </div>
</div>
</div>

<div className=" flex gap-3 items-center mt-11.25">
  <h4 className=' text-[#333333] text-[20px] font-poppins font-normal'>Share</h4>
  <div className=" flex gap-3.5">
    <Link to={'#'}>
    <div className=" w-11 h-11 rounded-full text-[19px] bg-[#268AA9]/15 text-[#268AA9] flex justify-center items-center">
    <FaLinkedin />
  </div>
  </Link>
  <Link to={'#'}>
  <div className=" w-11 h-11 rounded-full text-[19px] bg-[#53D1E2]/15 text-[#53D1E2] flex justify-center items-center">
    <FaTwitter />
  </div>
  </Link>
  <Link to={'#'}>
  <div className=" w-11 h-11 rounded-full text-[19px] bg-[#4391DA]/15 text-[#4391DA] flex justify-center items-center">
<FaFacebookF />
  </div>
  </Link>
  <Link to={'#'}>
  <div className=" w-11 h-11 rounded-full text-[19px] bg-[#3AB137]/15 text-[#3AB137] flex justify-center items-center">
<FaWhatsapp />
  </div>
  </Link>
  <Link to={'#'}>
  <div className=" w-11 h-11 rounded-full text-[19px] bg-[#FF7020]/15 text-[#FF7020] flex justify-center items-center">
<FaLink />
  </div>
  </Link>
  </div>

</div>

</div>
<div className="">
  <h3 className='text-[#333333] font-poppins font-medium text-[26px]'>Super Skinny Rib Trouser & Joggers for Men By 
Sowdagar Trouser</h3>
<div className=" flex items-center gap-8.5 mt-4.5 mb-8.25">
 <div className=" flex gap-1 items-center">
   <span className='text-[18px] font-poppins font-medium text-[#333333]'>4.0</span>
  <div className='flex gap-0.75'>
    <IoStarSharp className='text-[#FFB340]'/>
    <IoStarSharp className='text-[#FFB340]'/>
    <IoStarSharp className='text-[#FFB340]'/>
    <IoStarSharp className='text-[#FFB340]'/>
    <IoStarSharp className='text-[#A7A7A7]'/>
  </div>
  <span className='text-[#BABABA] font-poppins font-normal text-[18px]'>(223)</span>
 </div>
 <div className=" flex gap-2 items-center ">
   <FaCheck className='text-green-600'/>
   <h4 className='text-[#333333] font-poppins font-semibold text-[18px]'>4320 <span className=' font-normal'>Sold</span></h4>
 </div>
 <button   className='text-[#0198E9] font-poppins font-bold text-[18px] relative flex gap-2 items-center  z-1 cursor-pointer pl-5'><div onClick={heandleWislist} className="  w-full h-full   absolute "><FaHeart  className='text-[#A7A7A7] absolute   top-1 -left-5 '/></div> Add to wishlist</button>
</div>
<div className=" flex items-center gap-5.25">
  <p className=' text-[36px] font-poppins text-[#0198E9] font-semibold'>$976.33</p> <del className='text-[#8D8D8D] font-normal text-[20px] font-poppins'>$1020.99</del>
  <span className='px-2.5 py-2 text-[14px] font-semibold font-poppins bg-linear-to-r from-[#FF7A00] to-[#FFB800] rounded-[4px] text-white'>20%</span>
</div>
<div className=" flex gap-5 mt-2.5">
<h4 className='text-[#757575] font-medium font-poppins text-[16px]'>  <span className=' text-[#3D3D3F]'>SKU: </span> 1231432535 </h4>
<p className='text-[#757575] text-[16px] font-normal font-poppins flex gap-2 items-center'><FaCheckCircle className='text-[#3AB137]'/> In Stock</p>
</div>
<p className='mt-8.25 text-[18px] font-normal font-poppins leading-7.5 text-[#333333] max-w-149.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

<ul className='mt-2.5'>
  <li className=' text-[#333333] font-normal font-poppins text-[18px] list-disc ml-5'> Direct Full Array</li>
  <li className=' text-[#333333] font-normal font-poppins text-[18px] list-disc ml-5'>  Quantum Dot Technology</li>
  <li className=' text-[#333333] font-normal font-poppins text-[18px] list-disc ml-5'>  Ambient Mode</li>
  <li className=' text-[#333333] font-normal font-poppins text-[18px] list-disc ml-5'>One Remote Control</li>
</ul>

<div className=" flex gap-3.75 items-center my-8.25">
  <h4 className=' text-[#333333] text-[19px] font-poppins font-normal'>Size</h4>
  <button className=' text-[#6E6E6F] bg-white border border-gray-100 text-[14px] font-poppins font-normal hover:bg-[#0198E9] px-3.25 rounded-[2px] py-1  hover:text-white'>S</button>
  <button className=' text-white  border border-gray-100 text-[14px] font-poppins font-normal bg-[#0198E9] px-3.25 rounded-[2px] py-1  hover:text-white'>M</button>
  <button className=' text-[#6E6E6F] bg-white border border-gray-100 text-[14px] font-poppins font-normal hover:bg-[#0198E9] px-3.25 rounded-[2px] py-1  hover:text-white'>L</button>
  <button className=' text-[#6E6E6F] bg-white border border-gray-100 text-[14px] font-poppins font-normal hover:bg-[#0198E9] px-3.25 rounded-[2px] py-1  hover:text-white'>XL</button>
  <button className=' text-[#6E6E6F] bg-white border border-gray-100 text-[14px] font-poppins font-normal hover:bg-[#0198E9] px-3.25 rounded-[2px] py-1  hover:text-white'>XXL</button>
</div>
<div className=" flex items-center gap-8.5">
 <div className="flex items-center gap-4">
   <h2 className='text-[#3D3D3F] font-poppins font-normal text-[14px]'>Quantity :</h2>
  <div className=" bg-gray-200 py-1 px-2">
    <button className='  px-2 text-[16px] font-medium font-poppins cursor-pointer'>-</button>
    <button className='  px-3 text-[16px] font-medium font-poppins bg-white '>2</button>
    <button className='  px-2 text-[16px] font-medium font-poppins cursor-pointer'>+</button>
  </div>
 </div>

    <button  className='bg-[#0198E9] text-white border border-[#0198E9] px-11 py-3.5  text-[20px] font-medium font-poppins rounded-[3px] cursor-pointer'>Add Cart</button>
  <button className='text-[#0198E9] border border-[#0198E9] px-11 py-3.5  text-[20px] font-medium font-poppins rounded-[3px] cursor-pointer'>Buy Now</button>

</div>
</div>

</div>

      <div className="">
        <ProductDiscription />
      </div>
      <div className="mt-7.5 pb-12.5">
        <RetingAndReview />
      </div>
       </div>
      </Container>
    </div>

    </>
  )
}







