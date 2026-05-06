import React, { useState } from 'react'
import { Container } from '../Common/Container'
import { IoStar } from 'react-icons/io5'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import productimg1 from "../assets/FeaturedProduct/image (1).png";
import { ProductCart } from '../Common/ProductCart';

export const ProdactFilterInCategory = () => {

 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    let products = [
        { id: 1, img: productimg1, title: "Chair", price: "10500" },
        { id: 2, img: productimg1, title: "Dress", price: "10500" },
        { id: 3, img: productimg1, title: "Chair", price: "10500" },
        { id: 4, img: productimg1, title: "Chair", price: "10500" },
        { id: 5, img: productimg1, title: "Chair", price: "10500" },
        { id: 6, img: productimg1, title: "Dress", price: "10500" },
        { id: 7, img: productimg1, title: "Chair", price: "10500" },
        { id: 8, img: productimg1, title: "Dress", price: "10500" },
        { id: 9, img: productimg1, title: "Chair", price: "10500" },
        { id: 10, img: productimg1, title: "Dress", price: "10500" },
        { id: 11, img: productimg1, title: "Chair", price: "10500" },
        { id: 12, img: productimg1, title: "Dress", price: "10500" },
        { id: 13, img: productimg1, title: "Chair", price: "10500" },
        { id: 14, img: productimg1, title: "Dress", price: "10500" },
        { id: 15, img: productimg1, title: "Chair", price: "10500" },
        { id: 16, img: productimg1, title: "Dress", price: "10500" },
        { id: 17, img: productimg1, title: "Chair", price: "10500" },
        { id: 18, img: productimg1, title: "Dress", price: "10500" },
        { id: 19, img: productimg1, title: "Chair", price: "10500" },
        { id: 20, img: productimg1, title: "Dress", price: "10500" },
        { id: 21, img: productimg1, title: "Chair", price: "10500" },
        { id: 22, img: productimg1, title: "Dress", price: "10500" },
        { id: 23, img: productimg1, title: "Chair", price: "10500" },
        { id: 24, img: productimg1, title: "Dress", price: "10500" },
        { id: 25, img: productimg1, title: "Chair", price: "10500" },
        { id: 26, img: productimg1, title: "Dress", price: "10500" },
        { id: 27, img: productimg1, title: "Chair", price: "10500" },
        { id: 28, img: productimg1, title: "Chair", price: "10500" },
        { id: 29, img: productimg1, title: "Chair", price: "10500" },
        { id: 30, img: productimg1, title: "Chair", price: "10500" },
        { id: 31, img: productimg1, title: "Chair", price: "10500" },
    ];

    // pagination হিসাব
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

const handleNext = () => {
    if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);

    }
};

const handlePrevious = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
         window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
};
  return (
    <>
        
    <div className="pt-10.75 pb-12.5  bg-gray-50">
       
             <Container>
            <div className=" flex gap-13.25 items-start">
                <div className="w-75 border  bg-white border-gray-100 rounded-[10px]">
                   <div className="pl-4.75 pr-3">
                     <h2 className=' font-medium font-poppins text-[18px] text-[#383838] mt-6.25'>Related Categories</h2>
                    <h3 className=' text-[#757575] font-poppins font-normal text-[16px]'>* Men’s fashion</h3>
                    <ul className='ml-5 '>
                        <li className=' text-[#757575] font-poppins font-normal text-[16px] hover:text-[#0198E9] duration-300 mt-1.25 cursor-pointer'>Men’s Jacket</li>
                        <li className=' text-[#757575] font-poppins font-normal text-[16px] hover:text-[#0198E9] duration-300 mt-1.25 cursor-pointer'>Men's T-Shirts</li>
                        <li className=' text-[#757575] font-poppins font-normal text-[16px] hover:text-[#0198E9] duration-300 mt-1.25 cursor-pointer'>Casual Shirts</li>
                        <li className=' text-[#757575] font-poppins font-normal text-[16px] hover:text-[#0198E9] duration-300 mt-1.25 cursor-pointer'>Summer T-Shirts</li>
                    </ul>
                   </div>
                   <hr className='mt-4.5 mb-5.5 text-gray-300'/>
                    <div className="pl-4.75 pr-3">
                        <div className=" flex justify-between items-center">
                            <h2 className=' font-medium font-poppins text-[18px] text-[#383838]'>Filter by Price</h2>
                            <IoIosArrowDown />
                        </div>


                        <h3 className="text-[18px] font-medium font-poppins mt-6 text-[#383838]"><span className=' text-[#A7A7A7] '>Price:</span> ৳1000 - ৳2500 </h3>
                    </div>
                     <hr className='mt-4.5 mb-5.5 text-gray-300'/>
                    <div className="pl-4.75 pr-3 mb-7">
                       <div className=" flex items-center justify-between">
                         <h2 className=' font-medium font-poppins text-[18px] text-[#383838]'>Filter by Rating</h2>
                          <IoIosArrowDown />
                       </div>
                        <div className="flex gap-2 mt-4 text-[24px] text-[#FFB340] ">
                            <input type="checkbox" className=' w-6 h-6' value="1" />
                            <IoStar />
                        </div>
                        <div className="flex gap-2 mt-4 text-[24px] text-[#FFB340] ">
                            <input type="checkbox" className=' w-6 h-6' value="2" />
                            <IoStar />
                            <IoStar />
                        </div>
                        <div className="flex gap-2 mt-4 text-[24px] text-[#FFB340] ">
                            <input type="checkbox" className=' w-6 h-6' value="3" />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>
                        <div className="flex gap-2 mt-4 text-[24px] text-[#FFB340] ">
                            <input type="checkbox" className=' w-6 h-6' value="4" />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>
                        <div className="flex gap-2 mt-4 text-[24px] text-[#FFB340] ">
                            <input type="checkbox" className=' w-6 h-6' value="5" />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>
                    </div>
                </div>
                <div className="w-full  ">
                    <div className=" mt-5.5 flex items-center justify-between">
                        <h3 className=' text-[#424241]/50 font-medium text-[18px] font-poppins'>Showing  <span className='text-[#424241]'>20</span> of <span className='text-[#424241]'>160</span> product</h3>
                        <h3 className=' text-[#424241]/50 font-medium text-[18px] font-poppins flex gap-2 items-center'>Sort by: <button className=' flex items-center gap-1 border text-[#424241] px-3.75 py-1.5 cursor-pointer rounded-[5px] border-gray-200'> Newest Items <IoIosArrowDown /></button></h3>
                    </div>
                      {/* Products */}
                <div className="grid grid-cols-3 gap-6.5 mt-5.5">
                    {
                        selectedProducts.map((item) => (
                            <ProductCart key={item.id} item={item} />
                        ))
                    }
                </div>

                   <div className="flex gap-4.5 items-center justify-end mt-10">

    {/* Previous */}
    <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className='px-6.5 py-3 font-semibold cursor-pointer text-[18px] text-[#0198E9] border border-gray-200 flex items-center gap-2 rounded-[10px] disabled:opacity-50'
    >
        <IoIosArrowForward className="rotate-180" />
        Previous
    </button>

    {/* Page Numbers */}
    <div className="flex gap-2">
        {
            [...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-6.5 py-3 font-semibold text-[18px] border border-gray-200 rounded-[5px] cursor-pointer 
                    ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                >
                    {index + 1}
                </button>
            ))
        }
    </div>

    {/* Next */}
    <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='px-6.5 py-3 font-semibold text-[18px] cursor-pointer text-[#0198E9] border border-gray-200 flex items-center gap-2 rounded-[10px] disabled:opacity-50'
    >
        Next <IoIosArrowForward />
    </button>

</div>

                </div>
            </div>
        </Container>
    
    </div>

    </>
  )
}
