import React from "react";
import { FaStar } from "react-icons/fa";
import cart from "../assets/HeaderImg/Union.png";
import productImg from "../assets/FlashDeals/Image Placeholder.png";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router";
import { gsap } from "gsap";


export const ProductCart = ({ item }) => {
  let navigete = useNavigate();
  let handlebtn = (e) => {
    flyAnimation(e.currentTarget, "#cart-icon");
  };
  let handleMain = () => {
    navigete("/view-product");
  };
  let heandleWislist = (e) => {
      flyAnimation(e.currentTarget, "#wishlist-icon");
  };


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
  return (
    <>
      {/* <Link to={'/view-product'}> */}

      <div className="max-w-83  border border-gray-200 rounded-[15px] relative bg-white p-2">
        <div
          onClick={handleMain}
          className="w-full flex cursor-pointer justify-center rounded-[10px] h-78.25 relative bg-gray-100"
        >
          <img src={item?.img} className=" rounded-[10px]" alt="product" />
          {item.discoutprice && (
            <span className=" absolute top-0 left-0 px-3 py-2 text-[14px] font-semibold font-poppins bg-gradient-to-r from-[#FF7A00] to-[#FFB800] rounded-r rounded-b rounded-tl-[10px] text-white">
              -{item?.discoutprice}% OFF
            </span>
          )}
        </div>
        <span
          onClick={heandleWislist}
          className=" absolute top-5.5 right-4 cursor-pointer text-[23px]"
        >
          <CiHeart />
        </span>
       <div className=" relative">
         <div onClick={handleMain} className=" px-2 cursor-pointer">
          <div className="flex mt-3.5 items-center gap-0.5">
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-gray-500" />
            <span>(0)</span>
          </div>
          <h2 className=" text-[18px] h-12 overflow-hidden  font-poppins font-normal text-[#383838] leading-[120%] my-2.5">
            {item?.title}
          </h2>
          <div className=" flex justify-between items-center">
            <p className=" text-[#0970CD] font-bold text-[22px] font-poppins">
              ৳{item?.price}
            </p>
          </div>
           
        </div>
            <button onClick={handlebtn} className=" absolute right-2  px-2 py-2  bottom-2 cursor-pointer">
              {" "}
              <img src={cart} alt="cart" />
            </button>
       </div>
      </div>
      {/* </Link> */}
    </>
  );
};
