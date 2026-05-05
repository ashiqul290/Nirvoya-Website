import React from "react";
import { Container } from "../../Common/Container";
import Groceres from "../../assets/Banner/placeholder.png";
import beauty from "../../assets/Banner/placeholder (1).png";
import sliderimg from '../../assets/Banner/image.png'

export const Banner = () => {
  
  return (
    <>
      <div className=" py-2.5">
        <Container>
          <div className="flex gap-6.75 items-center">
   
              <div className="w-231.25 h-140.75 rounded-[10px] relative">
                <img src={sliderimg} alt="" />
                <div className=" absolute top-37 left-15">
                    <h1 className=" text-[#0970CD] font-bold text-[45px] font-montserrat max-w-121.5 ">Explore Men’s Winter Collection</h1>
                    <p className=" text-[20px] font-poppins font-normal leading-10 text-[#646464] w-104.5 my-6.75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                    <button className=" px-6.25 py-2.5 text-white bg-[#0198E9] rounded-[5px] font-poppins font-semibold text-[16px]">SHOP NOW</button>
                </div>
              </div>
              
     

            <div className="">
              <div className="w-md h-66.75  rounded-[10px] relative">
                <img src={Groceres} alt="" />
                <div className=" absolute bottom-4.5 left-22.5">
                  <button className=" rounded-[10px] bg-[#FAFAFA]/80 px-8 py-4 text-[#0198E9] font-semibold font-montserrat text-[20px]">
                    Groceries collection
                  </button>
                </div>
              </div>
              <div className="w-md h-66.75 relative mt-7 rounded-[10px]">
                <img src={beauty} alt="" />
                <div className=" absolute bottom-4.5 left-13.5">
                  <button className=" rounded-[10px] bg-[#FAFAFA]/80 px-8 py-4 text-[#0198E9] font-semibold font-montserrat text-[20px]">
                    Health & Beauty collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
